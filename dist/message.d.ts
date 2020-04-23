import { XSysActions, Action } from "./types";
export declare function makeMessage(action: XSysActions, value: any): Action<any>;
export declare function readMessage<T>(data: any): Action<T> | undefined;
