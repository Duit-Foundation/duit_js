import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedBuilderAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AnimatedBuilderUiElement extends SingleChildLayout {
  type = DuitElementType.animatedBuilder as const;
  attributes: AnimatedBuilderAttributes;

  constructor(attrs: AnimatedBuilderAttributes, id?: string, child?: DuitElement) {
    super(id, null, true);
    this.attributes = attrs;
    this.child = child;
  }
}