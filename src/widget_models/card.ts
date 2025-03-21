import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { CardAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class CardUiElement extends SingleChildLayout {
  type = DuitElementType.card as const;
  attributes: CardAttributes;

  constructor(attrs: CardAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}