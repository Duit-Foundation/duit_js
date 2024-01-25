import { ValueReferenceHolder } from "./value_reference_holder";

export interface IgnorePointerAttributes extends ValueReferenceHolder<IgnorePointerAttributes> {
    ignoring: boolean
}