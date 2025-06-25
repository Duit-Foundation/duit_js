import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";

export interface SliverOffstageAttributes extends ValueReferenceHolder<SliverOffstageAttributes>, ThemeConsumer, SliverProps {
    offstage?: boolean,
} 