import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { LifecycleEventListenerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class LifecycleEventListenerUiElement extends SingleChildLayout {
    type = DuitElementType.lifecycleEventListener as const;
    attributes: LifecycleEventListenerAttributes;

    constructor(attrs: LifecycleEventListenerAttributes, id?: string, child?: DuitElement) {
        super(id, null, true);
        this.attributes = attrs;
        this.child = child;
    }
}