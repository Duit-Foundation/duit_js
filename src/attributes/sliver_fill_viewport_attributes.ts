import { DuitElement } from "../lib/element";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface SliverFillViewportAttributes extends ValueReferenceHolder<SliverFillViewportAttributes>, ThemeConsumer {
  childObjects?: DuitElement[];
  viewportFraction?: number;
  padEnds?: boolean;
  isBuilderDelegate?: boolean;
  addAutomaticKeepAlives?: boolean;
  addRepaintBoundaries?: boolean;
  addSemanticIndexes?: boolean;
  childCount?: number;
}