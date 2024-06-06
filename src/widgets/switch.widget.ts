import { SwitchUiElement } from "../widget_models";

import type { SwichAttributes } from "../attributes";
import type { PropsWithAction } from "../widget_models/props";

export const Switch = (props: PropsWithAction<SwichAttributes>): SwitchUiElement => {
    return new SwitchUiElement(props.attributes, props.id, props.action);
}