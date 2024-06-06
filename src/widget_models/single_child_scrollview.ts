import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { SingleChildScrollViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class SingleChildScrollViewUiElement extends SingleChildLayout {
  type = DuitElementType.singleChildScrollView as const;
  attributes: SingleChildScrollViewAttributes;

  constructor(attrs: SingleChildScrollViewAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}