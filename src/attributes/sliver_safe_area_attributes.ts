import type { EdgeInsets } from "./properties/insets"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ThemeConsumer } from "./theme";
import type { SliverProps } from "./sliver_props";

export interface SliverSafeAreaAttributes extends ValueReferenceHolder<SliverSafeAreaAttributes>, ThemeConsumer, SliverProps {
    top?: boolean
    left?: boolean
    right?: boolean
    bottom?: boolean
    minimum?: EdgeInsets
    maintainBottomViewPadding?: boolean
} 