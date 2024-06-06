import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { OpacityAttributes } from "../attributes";
import type { DuitElement } from "..";


export class OpacityUiElement extends SingleChildLayout {
  type = DuitElementType.opacity as const;
  attributes: OpacityAttributes;

  constructor(attrs: OpacityAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}