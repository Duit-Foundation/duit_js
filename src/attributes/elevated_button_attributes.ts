import type { Clip } from "./properties/clip";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface ElevatedButtonAttributes extends ValueReferenceHolder<ElevatedButtonAttributes>, ThemeConsumer {
    autofocus?: boolean;
    clipBehavior?: keyof typeof Clip;
}