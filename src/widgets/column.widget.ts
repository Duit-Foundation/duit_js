import { ColumnUiElement } from "../widget_models";

import type { FlexAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Column = (props: BaseProps<FlexAttributes>, children?: DuitElement[]): ColumnUiElement => {
    return new ColumnUiElement(props.attributes, props.id, props.controlled, children);
}