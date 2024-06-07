import DuitElementType from "../lib/element_type";
import { DuitLeafElement, SingleChildLayout } from "./child";

import type { RadioAttributes, RadioGroupContextAttributes } from "../attributes";
import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class RadioUiElement extends DuitLeafElement {
  type = DuitElementType.radio as const;
  attributes: RadioAttributes;

  constructor(attrs: RadioAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export class RadioGroupContextUiElement extends SingleChildLayout {
  type = DuitElementType.radioGroupContext as const;
  attributes: RadioGroupContextAttributes;

  constructor(attrs: RadioGroupContextAttributes, id?: string, action?: BaseAction, child?: DuitElement) {
    super(id, action, true);
    this.attributes = attrs;
    this.child = child;
  }
} 