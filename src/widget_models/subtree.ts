import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { BaseProps } from "./props";
import type { DuitElement } from "../lib/element";


export class SubtreeUiElement extends SingleChildLayout {
  type = DuitElementType.subtree as const;
  attributes: DuitElement;

  constructor(attrs: DuitElement, id?: string) {
    super(id, null, true);
    this.attributes = attrs;
  }
}

export const Subtree = (props: BaseProps<DuitElement>): SubtreeUiElement => {
  return new SubtreeUiElement(props.attributes, props.id);
}