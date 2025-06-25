import * as Widgets from "../widget_models";
import { DuitLeafElement } from "../widget_models/child";

export type DuitLayoutElement<T = any> =
    Widgets.ColumnUiElement
    | Widgets.RowUiElement
    | Widgets.ColoredBoxUiElement
    | Widgets.SizedBoxUiElement
    | Widgets.CenterUiElement
    | Widgets.StackUiElement
    | Widgets.ExpandedUiElement
    | Widgets.PaddingUiElement
    | Widgets.DecoratedBoxUiElement
    | Widgets.ContainerUiElement
    | Widgets.GestureDetectorUiElement
    | Widgets.WrapUiElement
    | Widgets.LifecycleEventListenerUiElement
    | Widgets.ComponentUiElement
    | Widgets.PositionedUiElement
    | Widgets.SingleChildScrollViewUiElement
    | Widgets.OpacityUiElement
    | Widgets.IgnorePoinerUiElement
    | Widgets.CustomSingleChildWidget<T>
    | Widgets.CustomMultiChildWidget<T>
    | Widgets.AlignUiElement
    | Widgets.TransformUiElement
    | Widgets.FittedBoxUiElement
    | Widgets.MetaUiElement
    | Widgets.ListViewUiElement
    | Widgets.RepaintBoundaryUiElement
    | Widgets.AnimatedSizeUiElement
    | Widgets.AnimatedBuilderUiElement
    | Widgets.RadioGroupContextUiElement
    | Widgets.IntrinsicHeightUiElement
    | Widgets.IntrinsicWidthUiElement
    | Widgets.RotatedBoxUiElement
    | Widgets.ConstrainedBoxUiElement
    | Widgets.SubtreeUiElement
    | Widgets.BackdropFilterUiElement
    | Widgets.AnimatedOpacityUiElement
    | Widgets.SafeAreaUiElement
    | Widgets.GridViewUiElement
    | Widgets.CardUiElement
    | Widgets.InkWellUiElement
    | Widgets.CarouselViewUiElement
    | Widgets.AnimatedContainerUiElement
    | Widgets.AnimatedAlignUiElement
    | Widgets.AnimatedRotationUiElement
    | Widgets.AnimatedPaddingUiElement
    | Widgets.AnimatedPositionedUiElement
    | Widgets.AnimatedScaleUiElement
    | Widgets.CustomScrollViewUiElement
    | Widgets.SliverPaddingUiElement
    | Widgets.SliverFillRemainingUiElement
    | Widgets.SliverToBoxAdapterUIElement
    | Widgets.SliverFillViewportUIElement
    | Widgets.SliverOpacityUiElement
    | Widgets.SliverOffstageUiElement
    | Widgets.SliverIgnorePointerUiElement
    | Widgets.SliverVisibilityUiElement
    | Widgets.SliverAnimatedOpacityUiElement
    | Widgets.SliverSafeAreaUiElement
    | Widgets.SliverAppBarUiElement
    | Widgets.FlexibleSpaceBarUiElement
    | Widgets.SliverListUiElement
    | Widgets.SliverGridUiElement
    | Widgets.RemoteSubtreeUiElement;

export type DuitElement<T = any> =
    Widgets.TextUiElement
    | DuitLeafElement
    | Widgets.ScaffodUiElement
    | Widgets.AppBarUiElement
    | Widgets.RadioUiElement
    | Widgets.SliderUiElement
    | Widgets.CheckBoxUiElement
    | Widgets.TextFieldUiElement
    | Widgets.ImageUiElement
    | Widgets.RichTextUiElement
    | Widgets.SwitchUiElement
    | Widgets.CustomWidget<T>
    | DuitLayoutElement<T>;