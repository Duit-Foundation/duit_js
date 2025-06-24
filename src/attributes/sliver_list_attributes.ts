import { ComponentUiElement } from "../widget_models";
import { Builder } from "./builder";

interface SliverList {
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
}

interface SliverListBuilderAttributes extends SliverList, Builder { }

interface SliverListSeparatedAttributes extends SliverListBuilderAttributes {
    separator: ComponentUiElement;
}

export type SliverListAttributes = SliverListBuilderAttributes | SliverListSeparatedAttributes | SliverList; 