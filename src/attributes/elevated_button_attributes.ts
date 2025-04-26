import type { Clip } from "./properties/clip";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { ButtonStyle } from "./properties";
import type { BaseAction } from "../lib/action";

export interface ElevatedButtonAttributes extends ValueReferenceHolder<ElevatedButtonAttributes>, ThemeConsumer {
    autofocus?: boolean;
    clipBehavior?: keyof typeof Clip;
    style?: ButtonStyle;
    onLongPress?: BaseAction;
}