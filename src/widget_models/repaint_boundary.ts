import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { BaseProps } from "./props";
import type { RepaintBoundaryAttributes } from "../attributes";


export class RepaintBoundaryUiElement extends SingleChildLayout {
  type = DuitElementType.sizedBox as const;
  attributes: RepaintBoundaryAttributes;

  constructor(attrs: RepaintBoundaryAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const RepaintBoundary = (props: BaseProps<RepaintBoundaryAttributes>): RepaintBoundaryUiElement => {
  return new RepaintBoundaryUiElement(props.attributes, props.id, props.controlled);
}