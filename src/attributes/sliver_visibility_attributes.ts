import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";
import { DuitElement } from "../lib/element";

export interface SliverVisibilityAttributes extends ValueReferenceHolder<SliverVisibilityAttributes>, ThemeConsumer, SliverProps {
    visible?: boolean;
    maintainSize?: boolean;
    maintainAnimation?: boolean;
    maintainState?: boolean;
    maintainSemantics?: boolean;
    maintainInteractivity?: boolean;
    replacementSliver?: DuitElement;
}