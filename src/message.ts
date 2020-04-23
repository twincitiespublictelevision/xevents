import { XSysActions, Action } from "./types";

function isValidAction(action: XSysActions) {
  return [XSysActions.Register, XSysActions.Unregister, XSysActions.Fire].indexOf(action) !== -1;
}

export function makeMessage(action: XSysActions, value: any): Action<any>  {
  return {
    ns: 'XEVENT',
    action,
    value
  };
}

export function readMessage<T>(data: any): Action<T> | undefined {
  if (data) {
    let { ns, action, value } = data;
    
    if (ns === 'XEVENT' && isValidAction(action) && value) {
      return data;
    }
  }

  return undefined;
}