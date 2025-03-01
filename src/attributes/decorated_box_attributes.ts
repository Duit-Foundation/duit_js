import type { AnimatedPropertyOwner } from "../animations";
import type { BoxDecoration } from "./properties/decoration";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface DecoratedBoxAttributes extends ValueReferenceHolder<DecoratedBoxAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    decoration: BoxDecoration;
}