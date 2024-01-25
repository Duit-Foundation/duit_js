import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { OpacityAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class OpacityUiElement extends SingleChildLayout {
  type = DuitElementType.align as const;
  attributes: OpacityAttributes;

  constructor(attrs: OpacityAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const Opacity = (props: BaseProps<OpacityAttributes>): OpacityUiElement => {
  return new OpacityUiElement(props.attributes, props.id, props.controlled);
}