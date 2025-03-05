import type { EdgeInsets } from "./properties/insets"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { AnimatedPropertyOwner } from "../animations"
import type { ThemeConsumer } from "./theme";

export interface SafeAreaAttributes extends ValueReferenceHolder<SafeAreaAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    top?: boolean
    left?: boolean
    right?: boolean
    bottom?: boolean
    minimum?: EdgeInsets
    maintainBottomViewPadding?: boolean
}