
import type { ValueReferenceHolder } from "./value_reference_holder"
import { AnimatedPropertyOwner } from "../animations"

export interface SafeAreaAttributes extends ValueReferenceHolder<SafeAreaAttributes>, AnimatedPropertyOwner {
    top?: boolean
    left?: boolean
    right?: boolean
    bottom?: boolean
    padding?: EdgeInsets
    maintainBottomViewPadding?: boolean
}