import { GestureDetectorUiElement } from "../widget_models";

import type { GestureDetectorAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const GestureDetector = (props: BaseProps<GestureDetectorAttributes>, child?: DuitElement): GestureDetectorUiElement => {
    return new GestureDetectorUiElement(props.attributes, props.id, child);
}