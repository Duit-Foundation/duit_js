import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AnimatedCrossFadeAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class AnimatedCrossFadeUiElement extends MultiChildLayout {
  type = DuitElementType.animatedCrossFade as const;
  attributes: AnimatedCrossFadeAttributes;

  constructor(attrs: AnimatedCrossFadeAttributes, id?: string, children?: DuitElement[]) {
    super(id, null, true);
    this.attributes = attrs;
    this.children = children;
  }
}