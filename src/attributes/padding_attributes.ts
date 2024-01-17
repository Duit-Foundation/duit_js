import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface PaddingAttributes extends ValueReferenceHolder<PaddingAttributes> {
    padding: EdgeInsets,
}