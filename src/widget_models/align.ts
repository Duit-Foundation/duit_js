import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { AlignAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class AlignUiElement extends SingleChildLayout {
  type = DuitElementType.align as const;
  attributes: AlignAttributes;

  constructor(attrs: AlignAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}