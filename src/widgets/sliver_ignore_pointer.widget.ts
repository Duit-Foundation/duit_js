import { SliverIgnorePointerUiElement } from "../widget_models/sliver_ignore_pointer";

import type { SliverIgnorePointerAttributes } from "../attributes/sliver_ignore_pointer_attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverIgnorePointer = (props: BaseProps<SliverIgnorePointerAttributes>, child?: DuitElement): SliverIgnorePointerUiElement => {
    return new SliverIgnorePointerUiElement(props.attributes, props.id, props.controlled, child);
} 