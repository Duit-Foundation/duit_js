import DuitElementType from "../lib/element_type";
import { DuitLeafElement, SingleChildLayout } from "./child";

import type { RadioAttributes, RadioGroupContextAttributes } from "../attributes";
import type { BaseProps, PropsWithAction } from "./props";
import { BaseAction } from "../lib/action";

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

  constructor(attrs: RadioGroupContextAttributes, id?: string, action?: BaseAction) {
    super(id, action, true);
    this.attributes = attrs;
  }
} 

export const Radio = (props: BaseProps<RadioAttributes>): RadioUiElement => {
  return new RadioUiElement(props.attributes, props.id, props.controlled);
}

export const RadioGroupContext = (props: PropsWithAction<RadioGroupContextAttributes>): RadioGroupContextUiElement => {
  return new RadioGroupContextUiElement(props.attributes, props.id, props.action);
}