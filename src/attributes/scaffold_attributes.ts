import { DuitElement } from "../lib/element";
import { AlignmentDirectional, FloatingActionButtonLocation } from "./properties";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface ScaffoldAttributes extends ValueReferenceHolder<ScaffoldAttributes>, ThemeConsumer {
    body?: DuitElement;
    bottomSheet?: DuitElement;
    appBar?: DuitElement;
    floatingActionButton?: DuitElement;
    bottomNavigationBar?: DuitElement;
    persistentFooterButtons?: DuitElement[];
    persistentFooterAlignment?: keyof typeof AlignmentDirectional;
    primary?: boolean;
    extendBody?: boolean;
    extendBodyBehindAppBar?: boolean;
    resizeToAvoidBottomInset?: boolean;
    restorationId?: string;
    floatingActionButtonLocation?: keyof typeof FloatingActionButtonLocation;
}