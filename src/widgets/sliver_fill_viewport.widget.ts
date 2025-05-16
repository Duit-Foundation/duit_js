import { SliverFillViewportUIElement } from "../widget_models";

import type { SliverFillViewportAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverFillViewport = (props: BaseProps<SliverFillViewportAttributes>, child?: DuitElement): SliverFillViewportUIElement => {
    return new SliverFillViewportUIElement(props.attributes, props.id, props.controlled, child);
}