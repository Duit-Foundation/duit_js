import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { WrapAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class WrapUiElement extends MultiChildLayout {
  type = DuitElementType.wrap as const;
  attributes: WrapAttributes;

  constructor(attrs: WrapAttributes, id?: string, controlled?: boolean, children?: DuitElement[]) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.children = children;
  }
}