import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { IgnorePointerAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class IgnorePoinerUiElement extends SingleChildLayout {
  type = DuitElementType.ignorePointer as const;
  attributes: IgnorePointerAttributes;

  constructor(attrs: IgnorePointerAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}