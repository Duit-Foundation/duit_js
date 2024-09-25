import { IntrinsicHeightUiElement } from "../widget_models";

import type { IntrinsicHeightAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const IntrinsicHeight = (props: BaseProps<IntrinsicHeightAttributes>, child?: DuitElement): IntrinsicHeightUiElement => {
    return new IntrinsicHeightUiElement(props.attributes, props.id, child);
}