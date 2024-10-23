import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { DuitElement } from "../lib/element";


export class SubtreeUiElement extends SingleChildLayout {
  type = DuitElementType.subtree as const;
  attributes: DuitElement;

  constructor(attrs: DuitElement, id?: string, child?: DuitElement) {
    super(id, null, true);
    this.attributes = attrs;
    this.child = child;
  }
}