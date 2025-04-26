import { ScaffodUiElement } from "../widget_models";

import type { ScaffoldAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";

export const Scaffod = (props: BaseProps<ScaffoldAttributes>, child?: DuitElement): ScaffodUiElement => {
    return new ScaffodUiElement(props.attributes, props.id, child);
}