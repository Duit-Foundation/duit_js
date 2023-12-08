import { CenterUiElement, ColoredBoxUiElement, ColumnUiElement, RowUiElement, SizedBoxUiElement } from "../widget_models";
import DuitElementType from "./element_type";

import type { DuitElement, DuitLayoutElement } from "./element";


export default class UIBuilder {
  private root?: DuitLayoutElement;

  /**
   * Сhecks whether the type of the passed element is a container
   * @param el DuitElement
   * @returns element with layput element type or undefined
   */
  layoutTypeQualifier(el: DuitElement): DuitLayoutElement | undefined {
    if (mayHaveChildList.has(el.type)) {
      return el as DuitLayoutElement;
    }
  }

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
    return JSON.stringify(this.root);
  }
}

const mayHaveChildList = new Set([
  DuitElementType.center,
  DuitElementType.coloredBox,
  DuitElementType.column,
  DuitElementType.row,
  DuitElementType.sizedBox,
  DuitElementType.elevatedButton,
  DuitElementType.expanded,
  DuitElementType.padding,
  DuitElementType.positioned,
  DuitElementType.stack,
  DuitElementType.decoratedBox,
  DuitElementType.container,
]);