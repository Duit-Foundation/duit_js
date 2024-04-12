import { ValueReferenceHolder } from "./value_reference_holder";

export interface RepaintBoundaryAttributes extends ValueReferenceHolder<RepaintBoundaryAttributes> {
    childIndex?: number;
}