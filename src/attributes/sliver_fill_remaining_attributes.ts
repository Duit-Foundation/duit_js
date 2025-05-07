import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";

export interface SliverFillRemaningAttributes extends ValueReferenceHolder<SliverFillRemaningAttributes>, ThemeConsumer, SliverProps {
    hasScrollBody?: boolean,
    fillOverscroll?: boolean,
}