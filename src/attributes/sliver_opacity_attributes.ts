import type { AnimatedPropertyOwner } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";

export interface SliverOpacityAttributes extends ValueReferenceHolder<SliverOpacityAttributes>, AnimatedPropertyOwner, ThemeConsumer, SliverProps {
    opacity?: number,
}