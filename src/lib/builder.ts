import { CenterUiElement, ColoredBoxUiElement, ColumnUiElement, ExpandedUiElement, RowUiElement, SizedBoxUiElement, StackUiElement } from "../widget_models";
import DuitElementType from "./element_type";

import type { DuitElement, DuitLayoutElement } from "./element";
import type { _ComponentDescription } from "../widgets";


export default class UIBuilder {
  private root?: DuitLayoutElement;
  private widgets?: DuitElement[];
  private embedded?: _ComponentDescription[];

  /**
   * Creates a root element of the exact specified type and returns it.
   *
   * @param {DuitElementType} type - The type of the root element to create.
   * @param {any} rootAttributes - The attributes to pass to the root element constructor.
   * @return {DuitLayoutElement} The created root element.
   */
  createRootOfExactType(
    type: DuitElementType,
    rootAttributes: any
  ): DuitLayoutElement {
    switch (type) {
      case DuitElementType.coloredBox: {
        return this.root = new ColoredBoxUiElement(rootAttributes);
      }
      case DuitElementType.sizedBox: {
        return this.root = new SizedBoxUiElement(rootAttributes);
      }
      case DuitElementType.row: {
        return this.root = new RowUiElement(rootAttributes);
      }
      case DuitElementType.column: {
        return this.root = new ColumnUiElement(rootAttributes);
      }
      case DuitElementType.center: {
        return this.root = new CenterUiElement(rootAttributes);
      }
      case DuitElementType.stack: {
        return this.root = new StackUiElement(rootAttributes);
      }
      case DuitElementType.expanded: {
        return this.root = new ExpandedUiElement(rootAttributes);
      }
    }

    return new ColumnUiElement(rootAttributes);
  }

  /**
   * Creates a root element and assigns it to the "root" property.
   *
   * @return {ColumnUiElement} The newly created root element.
   */
  createRoot(): ColumnUiElement {
    return this.root = new ColumnUiElement({});
  }

  /**
   * Returns the root element of the layout.
   *
   * @return {DuitLayoutElement | undefined} The root element of the layout, or undefined if there is no root element.
   */
  getRoot(): DuitLayoutElement | undefined {
    return this.root;
  }

  /**
   * Builds and returns a JSON string representation of the root object.
   *
   * @return {string} A JSON string representation of the root object.
   */
  build(): string {
    const content = {
      "root": this.root,
      "embedded": this.embedded
    };
    return JSON.stringify(content);
  }

  buidlUnwrapped(): string {
    if (this.embedded != undefined) {
      console.warn("Warning: The embedded field is not supported in unwrapped mode.");
    }

    return JSON.stringify(this.root);
  }

  /**
   * Generates the function comment for the given function body.
   *
   * @param {DuitLayoutElement} rootElement - The root element of the DuitLayout.
   * @return {DuitLayoutElement} The root element of the DuitLayout.
   */
  rootFrom(rootElement: DuitLayoutElement): DuitLayoutElement {
    this.root = rootElement;
    return this.root;
  }

  addWidgets(widgets: DuitElement[]): void {
    this.widgets = widgets;
  }

  buildMultiview(): string {
    if (!this.widgets || this.widgets.length === 0) {
      throw new Error("No widgets provided");
    }

    return JSON.stringify({
      "widgets": this.widgets,
      "embedded": this.embedded
    });
  }

  addComponents(components: _ComponentDescription[]): void {
    this.embedded = this.embedded?.concat(components);
  }
}