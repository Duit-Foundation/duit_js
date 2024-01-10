import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { LifecycleEventListenerAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class LifecycleEventListenerUiElement extends SingleChildLayout {
    type = DuitElementType.lifecycleEventListener as const;
    attributes: LifecycleEventListenerAttributes;

    constructor(attrs: LifecycleEventListenerAttributes, id?: string) {
        super(id, null, true);
        this.attributes = attrs;
    }
}

export const LifecycleEventListener = (props: BaseProps<LifecycleEventListenerAttributes>): LifecycleEventListenerUiElement => {
    return new LifecycleEventListenerUiElement(props.attributes, props.id);
}