type AsyncFunction = (...args: any[]) => Promise<any>;
type SyncFunction = (...args: any[]) => any;
export type LoopCallback = AsyncFunction | SyncFunction;
export interface IAwaitTimer {
    isStopped: boolean;
    start: () => void;
    stop: () => void;
    destroy: () => void;
}
export type AwaitTimerOptions = {
    immediate?: boolean;
    autoStart?: boolean;
};
export {};
