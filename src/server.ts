import { XEventHandlerOptions, XEventHandler, XSysActions, XSysEvents } from "./types";
import { readMessage } from "./message";

interface Storage {
    getItem<T>(key: string, callback?: (err: any, value: T) => void): Promise<T>
    setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>
}

interface StorageOptions {
  name: string
}

let createInstance: (opts: StorageOptions) => Storage;

// @ts-ignore - Allow for using an already loaded version of localforage
//              instead of the bundled copy
if (typeof localforage !== 'undefined' && typeof localforage.createInstance === 'function') {
  // @ts-ignore
  createInstance = localforage.createInstance;
} else {
  createInstance = require('localforage').createInstance;
}

export interface XEventSys {
  addEventListener(event: string, handler: string, options: XEventHandlerOptions): Promise<string>
  removeEventListener(event: string, key: string): Promise<boolean>
  listen(): void
}

type XEventRegistration = [string, XEventHandlerOptions];
type Register = Map<string, XEventRegistration>

function randomKey() {
  return 'k';
}

let createSys = (function wrap(sw: ServiceWorkerGlobalScope) {
  async function broadcastToClients(message: any) {
    let clients = await sw.clients.matchAll();
    
    clients.forEach(function(client) {
      client.postMessage(message);
    });
  }
  
  return function createSys(name: string): XEventSys {
    let store = createInstance({ name });
    
    async function addEventListener(event: string, handler: string, options: XEventHandlerOptions) {
      let register = await store.getItem<Register>(event);
      let key = randomKey();
      register.set(key, [handler, options]);

      return key;
    }
  
    async function removeEventListener(event: string, key: string) {
      let register = await store.getItem<Register>(event);
      return register.delete(key);
    }
  
    function listen() {
      sw.addEventListener('message', async (e: any) => {
        let message = readMessage(e.data);
  
        if (message) {
          switch (message.action) {
            case XSysActions.Register: {
              let { event, handler, options, returnKey } = message.value;
              let key = addEventListener(event, handler, options);

              if (returnKey && key) {
                await broadcastToClients({ event: XSysEvents.Registered, [returnKey]: key });
              }

              break;
            }
            case XSysActions.Unregister: {
              let { event, key } = message.value;
              
              if (await removeEventListener(event, key)) {
                await broadcastToClients({ event: XSysEvents.Unregistered, key });
              }

              break;
            }
            case XSysActions.Fire: {
              let { event, data } = message.value;
              let register = await store.getItem<Register>(event);
    
              register.forEach(([handler, options], k) => {
                let fn: XEventHandler<any> = eval(handler);
                fn({ name: event, state: options.state, data });

                options.repeat = options.repeat - 1;
                
                if (options.repeat > 0) {
                  register.set(k, [handler, options]);
                } else {
                  register.delete(k);
                }
              });
              break;
            }
          }
        }
      });
    }
  
    return {
      addEventListener,
      removeEventListener,
      listen
    };
  }
})(self as any);

export default createSys