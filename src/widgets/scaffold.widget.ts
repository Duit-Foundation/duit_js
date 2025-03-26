import { ScaffodUiElement } from "../widget_models";

import type { ScaffoldAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const Scaffod = (props: BaseProps<ScaffoldAttributes>): ScaffodUiElement => {
    return new ScaffodUiElement(props.attributes, props.id);
}