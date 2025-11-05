import { SliverVisibilityUiElement } from "../widget_models";

import type { SliverVisibilityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverVisibility = (props: BaseProps<SliverVisibilityAttributes>, children?: DuitElement[]): SliverVisibilityUiElement => {
    return new SliverVisibilityUiElement(props.attributes, props.id, props.controlled, children);
}