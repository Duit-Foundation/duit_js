import { RowUiElement } from "../widget_models";

import type { FlexAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Row = (props: BaseProps<FlexAttributes>, children?: DuitElement[]): RowUiElement => {
    return new RowUiElement(props.attributes, props.id, props.controlled, children);
}