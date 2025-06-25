import { SliverOpacityUiElement } from "../widget_models";

import type { SliverOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverOpacity = (props: BaseProps<SliverOpacityAttributes>, child?: DuitElement): SliverOpacityUiElement => {
    return new SliverOpacityUiElement(props.attributes, props.id, props.controlled, child);
}