import { SliverFillRemainingUiElement, SliverPaddingUiElement } from "../widget_models";

import type { SliverFillRemaningAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverFillRemaining = (props: BaseProps<SliverFillRemaningAttributes>, child?: DuitElement): SliverFillRemainingUiElement => {
    return new SliverFillRemainingUiElement(props.attributes, props.id, props.controlled, child);
}