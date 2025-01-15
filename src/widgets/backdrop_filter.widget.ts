import { BackdropFilterUiElement } from "../widget_models";

import type { BackdropFilterAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const BackdropFilter = (props: BaseProps<BackdropFilterAttributes>, child?: DuitElement): BackdropFilterUiElement => {
    return new BackdropFilterUiElement(props.attributes, props.id, props.controlled, child);
}