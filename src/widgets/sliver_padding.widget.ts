import { SliverPaddingUiElement } from "../widget_models";

import type { SliverPaddingAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverPadding = (props: BaseProps<SliverPaddingAttributes>, child?: DuitElement): SliverPaddingUiElement => {
    return new SliverPaddingUiElement(props.attributes, props.id, props.controlled, child);
}