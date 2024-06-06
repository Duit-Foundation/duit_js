import { LifecycleEventListenerUiElement } from "../widget_models";

import type { LifecycleEventListenerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const LifecycleEventListener = (props: BaseProps<LifecycleEventListenerAttributes>, child?: DuitElement): LifecycleEventListenerUiElement => {
    return new LifecycleEventListenerUiElement(props.attributes, props.id, child);
}