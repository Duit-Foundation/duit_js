import { AnimatedPropertyOwner } from "../animations";
import type { BoxDecoration } from "./properties/decoration";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface DecoratedBoxAttributes extends ValueReferenceHolder<DecoratedBoxAttributes>, AnimatedPropertyOwner {
    decoration: BoxDecoration;
}