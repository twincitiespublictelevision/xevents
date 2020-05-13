import { XEventHandler, XEventHandlerOptions } from "./types";
export declare type XClient = {
    register<T>(event: string, handler: XEventHandler<T>, options: XEventHandlerOptions): Promise<string>;
    unregister(event: string, key: string): void;
    fire<T>(event: string, data: T): void;
};
declare function register<T>(event: string, handler: XEventHandler<T>, options: Partial<XEventHandlerOptions>): Promise<string>;
declare function unregister(event: string, key: string): Promise<string>;
declare function fire<T>(event: string, data: T): Promise<void>;
declare const _default: {
    register: typeof register;
    unregister: typeof unregister;
    fire: typeof fire;
};
export default _default;
