import { PhysicalModelUiElement } from "../widget_models";

import type { PhysicalModelAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const PhysicalModel = (props: BaseProps<PhysicalModelAttributes>, child?: DuitElement): PhysicalModelUiElement => {
    return new PhysicalModelUiElement(props.attributes, props.id, props.controlled, child);
} 