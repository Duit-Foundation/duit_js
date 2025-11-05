import { FlexibleSpaceBarUiElement } from "../widget_models";

import type { FlexibleSpaceBarAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import { DuitElement } from "../lib/element";
import { ListChild } from "../widget_models/child";

export const FlexibleSpaceBar = (
    props: BaseProps<FlexibleSpaceBarAttributes>,
    title?: DuitElement,
    background?: DuitElement)
    : FlexibleSpaceBarUiElement => {
    const children: ListChild[] = [title, background];
    return new FlexibleSpaceBarUiElement(props.attributes, props.id, props.controlled, children);
} 