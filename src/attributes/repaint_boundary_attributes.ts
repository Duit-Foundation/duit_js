import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface RepaintBoundaryAttributes extends ValueReferenceHolder<RepaintBoundaryAttributes>, ThemeConsumer {
    childIndex?: number;
}