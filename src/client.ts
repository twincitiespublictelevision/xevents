import { XEventHandler, XEventHandlerOptions, RegisteredEvent, UnregisteredEvent, XSysActions, XSysEvents } from "./types";
import { makeMessage } from "./message";
import { randomKey } from "./helpers";

export type XClient = {
  register<T>(event: string, handler: XEventHandler<T>, options: XEventHandlerOptions): Promise<string>
  unregister(event: string, key: string): void
  fire<T>(event: string, data: T): void
}

function serialize(fn: Function) {
  return `(function() { return ${fn.toString()}; })()`;
}

function hasSWSupport() {
  return 'serviceWorker' in navigator;
}

async function getSWController(): Promise<ServiceWorker | null> {
  if (hasSWSupport()) {
    let registration = await navigator.serviceWorker.ready;
    return registration.active;
  }
  
  return null;
}

const DEFAULT_OPTIONS: XEventHandlerOptions = {
  repeat: 0,
  state: {}
};

async function register<T>(event: string, handler: XEventHandler<T>, options: Partial<XEventHandlerOptions>): Promise<string> {
  let message = makeMessage(
    XSysActions.Register,
    {
      event,
      handler: serialize(handler),
      options: { ...DEFAULT_OPTIONS, ...options }
    }
  );
  let returnKey = randomKey();
  let returnMessage = new Promise<string>((resolve, reject) => {
    let listener = (e: RegisteredEvent) => {
      if (e.data.event === XSysEvents.Registered && typeof e.data[returnKey] === 'string') {
        let key = e.data[returnKey];
        resolve(key);
        window.removeEventListener('message', listener);
      }
    }

    window.addEventListener('message', listener);
  });

  let controller = await getSWController();
  
  if (controller) {
    controller.postMessage(message);
  }

  return returnMessage;
}

async function unregister(event: string, key: string) {
  let message = makeMessage(XSysActions.Unregister, { event, key });
  let returnMessage = new Promise<string>((resolve, reject) => {
    let listener = (e: UnregisteredEvent) => {
      if (e.data.event === XSysEvents.Unregistered && e.data.key === key) {
        resolve(key);
        window.removeEventListener('message', listener);
      }
    }

    window.addEventListener('message', listener);
  });

  let controller = await getSWController();

  if (controller) {
    controller.postMessage(message);
  }

  return returnMessage;
}

async function fire<T>(event: string, data: T) {
  let message = makeMessage(XSysActions.Fire, { event, data });

  let controller = await getSWController();

  if (controller) {
    controller.postMessage(message);
  }
}

export default {
  register,
  unregister,
  fire
}