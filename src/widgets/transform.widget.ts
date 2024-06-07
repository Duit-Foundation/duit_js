import { TransformUiElement } from "../widget_models";

import type { TransformAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Transform = (props: BaseProps<TransformAttributes>, child?: DuitElement): TransformUiElement => {
    return new TransformUiElement(props.attributes, props.id, props.controlled, child);
}