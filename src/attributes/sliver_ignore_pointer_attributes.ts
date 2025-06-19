import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import { SliverProps } from "./sliver_props";

export interface SliverIgnorePointerAttributes extends ValueReferenceHolder<SliverIgnorePointerAttributes>, ThemeConsumer, SliverProps {
    ignoring: boolean;
} 