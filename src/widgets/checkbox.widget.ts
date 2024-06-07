import { CheckBoxUiElement } from "../widget_models";

import type { CheckboxAttributes } from "../attributes";
import type { PropsWithAction } from "../widget_models/props";

export const CheckBox = (props: PropsWithAction<CheckboxAttributes>): CheckBoxUiElement => {
    return new CheckBoxUiElement(props.attributes, props.id, props.action);
}