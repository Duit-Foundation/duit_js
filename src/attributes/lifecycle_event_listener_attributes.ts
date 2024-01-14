import type { BaseAction } from "../lib/action";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface LifecycleEventListenerAttributes extends ValueReferenceHolder<LifecycleEventListenerAttributes> {
    onStateChanged?: BaseAction;
    onResumed?: BaseAction;
    onPaused?: BaseAction;
    onInactive?: BaseAction;
    onHidden?: BaseAction;
    onDetached?: BaseAction;
}