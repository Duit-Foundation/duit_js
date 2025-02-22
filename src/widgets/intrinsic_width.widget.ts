import { IntrinsicWidthUiElement } from "../widget_models";

import type { IntrinsicWidthAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const IntrinsicWidth = (props: BaseProps<IntrinsicWidthAttributes>, child?: DuitElement): IntrinsicWidthUiElement => {
    return new IntrinsicWidthUiElement(props.attributes, props.id, child);
}