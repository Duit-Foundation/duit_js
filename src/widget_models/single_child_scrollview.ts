import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { BaseProps } from "./props";
import type { SingleChildScrollViewAttributes } from "../attributes";


export class SingleChildScrollViewUiElement extends SingleChildLayout {
  type = DuitElementType.singleChildScrollView as const;
  attributes: SingleChildScrollViewAttributes;

  constructor(attrs: SingleChildScrollViewAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const SingleChildScrollView = (props: BaseProps<SingleChildScrollViewAttributes>): SingleChildScrollViewUiElement => {
  return new SingleChildScrollViewUiElement(props.attributes, props.id, props.controlled);
}