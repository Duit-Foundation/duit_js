import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { FittedBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class FittedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.fittedBox as const;
  attributes: FittedBoxAttributes;

  constructor(attrs: FittedBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}