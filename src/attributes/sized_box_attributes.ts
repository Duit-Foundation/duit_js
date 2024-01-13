import type { ValueReferenceHolder } from "./value_reference_holder";

export interface SizedBoxAttributes extends ValueReferenceHolder<SizedBoxAttributes>{
    width?: number;
    height?: number;
}