import type { EdgeInsets } from "./properties/insets"
import type { ValueReferenceHolder } from "./value_reference_holder"
import { AnimatedPropertyOwner } from "../animations"

export interface SafeAreaAttributes extends ValueReferenceHolder<SafeAreaAttributes>, AnimatedPropertyOwner {
    top?: boolean
    left?: boolean
    right?: boolean
    bottom?: boolean
    minimum?: EdgeInsets
    maintainBottomViewPadding?: boolean
}