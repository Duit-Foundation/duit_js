import { FloatingActionButtonLocation } from "./properties";
import { AlignmentDirectional } from "./properties/alignment";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface ScaffoldAttributes extends ValueReferenceHolder<ScaffoldAttributes>, ThemeConsumer {
    persistentFooterAlignment?: keyof typeof AlignmentDirectional;
    primary?: boolean;
    extendBody?: boolean;
    extendBodyBehindAppBar?: boolean;
    resizeToAvoidBottomInset?: boolean;
    restorationId?: string;
    floatingActionButtonLocation?: keyof typeof FloatingActionButtonLocation;
}