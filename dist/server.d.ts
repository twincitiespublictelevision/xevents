import { XEventHandlerOptions } from "./types";
export interface XEventSys {
    addEventListener(event: string, handler: string, options: XEventHandlerOptions): Promise<string>;
    removeEventListener(event: string, key: string): Promise<boolean>;
    listen(): void;
}
declare let createSys: (name: string) => XEventSys;
export default createSys;
