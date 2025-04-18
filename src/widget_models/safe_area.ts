import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { SafeAreaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class SafeAreaUiElement extends SingleChildLayout {
  type = DuitElementType.container as const;
  attributes: SafeAreaAttributes;

  constructor(attrs: SafeAreaAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}