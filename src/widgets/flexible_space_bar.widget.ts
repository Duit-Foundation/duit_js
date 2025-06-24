import { FlexibleSpaceBarUiElement } from "../widget_models";

import type { FlexibleSpaceBarAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const FlexibleSpaceBar = (props: BaseProps<FlexibleSpaceBarAttributes>): FlexibleSpaceBarUiElement => {
    return new FlexibleSpaceBarUiElement(props.attributes, props.id);
} 