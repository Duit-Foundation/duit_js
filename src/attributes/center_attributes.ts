import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface CenterAttributes extends ValueReferenceHolder<CenterAttributes>, ThemeConsumer {
    widthFactor?: number;
    heightFactor?: number;
}