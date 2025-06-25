import { SliverListUiElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";
import type { SliverListAttributes } from "../attributes";

export const SliverList = (props: PropsWithAction<SliverListAttributes>, children?: DuitElement[]): SliverListUiElement => {
    return new SliverListUiElement(props.attributes, props.id, props.controlled, props.action, children);
} 