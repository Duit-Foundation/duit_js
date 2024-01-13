import { ValueReferenceHolder } from "./value_reference_holder";

export interface CenterAttributes extends ValueReferenceHolder<CenterAttributes> {
    widthFactor?: number;
    heightFactor?: number;
}