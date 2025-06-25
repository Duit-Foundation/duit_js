import type { ImplicitAnimatable } from "../animations";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";

export interface SliverAnimatedOpacityAttributes extends ValueReferenceHolder<SliverAnimatedOpacityAttributes>, ImplicitAnimatable, ThemeConsumer, SliverProps {
    opacity?: number,
}