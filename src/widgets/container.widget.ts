import { ContainerUiElement } from "../widget_models";

import type { ContainerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Container = (props: BaseProps<ContainerAttributes>, child?: DuitElement): ContainerUiElement => {
    return new ContainerUiElement(props.attributes, props.id, props.controlled, child);
}