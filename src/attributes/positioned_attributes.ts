import type { ValueReferenceHolder } from "./value_reference_holder"

export interface PositionedAttributes extends ValueReferenceHolder<PositionedAttributes> {
    top?: number
    bottom?: number
    left?: number
    right?: number
}