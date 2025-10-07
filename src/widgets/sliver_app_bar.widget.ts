import { SliverAppBarUiElement } from "../widget_models";

import type { SliverAppBarAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import { DuitElement } from "../lib/element";
import { ListChild } from "../widget_models/child";

export const SliverAppBar = (props: BaseProps<SliverAppBarAttributes>,
    title?: DuitElement,
    leading?: DuitElement,
    flexibleSpace?: DuitElement,
    bottom?: DuitElement,
    actions?: DuitElement[]): SliverAppBarUiElement => {

    const children: ListChild[] = [title, leading, flexibleSpace, bottom];

    if (actions) {
        children.push(...actions);
    }
    return new SliverAppBarUiElement(props.attributes, props.id, props.controlled, children);
} 