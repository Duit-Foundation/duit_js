import { ScaffodUiElement } from "../widget_models";

import type { ScaffoldAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";
import { ListChild } from "../widget_models/child";

export const Scaffod = (
    props: BaseProps<ScaffoldAttributes>,
    child?: DuitElement,
    bottomSheet?: DuitElement,
    appBar?: DuitElement,
    floatingActionButton?: DuitElement,
    bottomNavigationBar?: DuitElement,
    persistentFooterButtons?: DuitElement[]): ScaffodUiElement => {

    const children: ListChild[] = [child, bottomSheet, appBar, floatingActionButton, bottomNavigationBar];
    if (persistentFooterButtons) {
        children.push(...persistentFooterButtons);
    }

    return new ScaffodUiElement(props.attributes, props.id, children);
}