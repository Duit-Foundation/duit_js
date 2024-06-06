import { RepaintBoundaryUiElement } from "../widget_models";

import type { RepaintBoundaryAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const RepaintBoundary = (props: BaseProps<RepaintBoundaryAttributes>, child?: DuitElement): RepaintBoundaryUiElement => {
    return new RepaintBoundaryUiElement(props.attributes, props.id, props.controlled, child);
}