import { SliverOffstageUiElement } from "../widget_models";

import type { SliverOffstageAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverOffstage = (props: BaseProps<SliverOffstageAttributes>, child?: DuitElement): SliverOffstageUiElement => {
    return new SliverOffstageUiElement(props.attributes, props.id, props.controlled, child);
} 