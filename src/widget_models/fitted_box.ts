import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { BaseProps } from "./props";
import type { FittedBoxAttributes } from "../attributes";

export class FittedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.fittedBox as const;
  attributes: FittedBoxAttributes;

  constructor(attrs: FittedBoxAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const FittedBox = (props: BaseProps<FittedBoxAttributes>): FittedBoxUiElement => {
  return new FittedBoxUiElement(props.attributes, props.id, props.controlled);
}