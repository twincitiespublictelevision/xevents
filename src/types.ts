/**
 * ACTIONS
 */

export enum XSysActions {
  Register = 'REGISTER',
  Unregister = 'UNREGISTER',
  Fire = 'FIRE'
}

export type Action<T> = RegisterAction | UnregisterAction | FireAction<T>

export type RegisterAction = {
  ns: 'XEVENT'
  action: XSysActions.Register
  value: {
    event: string
    handler: string
    options?: XEventHandlerOptions
    returnKey?: string
  }
}

export type UnregisterAction = {
  ns: 'XEVENT'
  action: XSysActions.Unregister
  value: {
    event: string
    key: string
  }
}

export type FireAction<T> = {
  ns: 'XEVENT'
  action: XSysActions.Fire
  value: {
    event: string
    data: T
  }
}

/**
 * EVENTS
 */

export enum XSysEvents {
  Registered = 'REGISTERED',
  Unregistered = 'UNREGISTERED'
}

export interface RegisteredEvent extends MessageEvent {
  data: {
    event: XSysEvents.Registered
    [key: string]: string
  }
}

export interface UnregisteredEvent extends MessageEvent {
  data: {
    event: XSysEvents.Unregistered
    key: string
  }
}

/**
 * HANDLER
 */

export interface XEvent<T> {
  name: string
  state: { [k: string]: any }
  data: T
}

export type XEventHandler<T> = (e: XEvent<T>) => any

export interface XEventHandlerOptions {
  repeat: number
  state: { [k: string]: any }
}