import type { BaseAction } from "../lib/action";

export interface LifecycleEventListenerAttributes {
    onStateChanged?: BaseAction;
    onResumed?: BaseAction;
    onPaused?: BaseAction;
    onInactive?: BaseAction;
    onHidden?: BaseAction;
    onDetached?: BaseAction;
}