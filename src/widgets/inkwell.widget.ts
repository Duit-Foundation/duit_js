import { InkWellUiElement } from "../widget_models";

import type { InkwellAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const InkWell = (props: BaseProps<InkwellAttributes>, child?: DuitElement): InkWellUiElement => new InkWellUiElement(props.attributes, props.id, child);