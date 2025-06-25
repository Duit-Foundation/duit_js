import { SliverGridUiElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";
import type { SliverGridAttributes } from "../attributes";

export const SliverGrid = (props: PropsWithAction<SliverGridAttributes>, children?: DuitElement[]): SliverGridUiElement => {
    return new SliverGridUiElement(props.attributes, props.id, props.controlled, props.action, children);
} 