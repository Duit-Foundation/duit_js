import { BaseAction } from "../../lib/action";
import { DuitElement } from "../../lib/element";
import { BoxConstraints, OverlayAction, Offset, Color, ShapeBorder, Clip } from "../properties";

export interface BottomSheetCommandProps {
    isDismissible?: boolean,
    isScrollControlled?: boolean,
    useSafeArea?: boolean,
    useRootNavigator?: boolean,
    enableDrag?: boolean,
    showDragHandle?: boolean,
    scrollControlDisabledMaxHeightRatio?: number,
    constraints?: BoxConstraints,
    anchorPoint?: Offset,
    backgroundColor?: Color,
    barrierColor?: Color,
    shape?: ShapeBorder,
    clipBehavior?: keyof typeof Clip,
    onClose?: BaseAction,
    action?: keyof typeof OverlayAction,
    content: DuitElement,
}

export const BottomSheetCommand = ({ ...props }: BottomSheetCommandProps) => {
    return {
        type: "bottomSheet",
        action: props.action ?? OverlayAction.open,
        isDismissible: props.isDismissible,
        isScrollControlled: props.isScrollControlled,
        useSafeArea: props.useSafeArea,
        useRootNavigator: props.useRootNavigator,
        enableDrag: props.enableDrag,
        showDragHandle: props.showDragHandle,
        scrollControlDisabledMaxHeightRatio: props.scrollControlDisabledMaxHeightRatio,
        constraints: props.constraints,
        anchorPoint: props.anchorPoint,
        backgroundColor: props.backgroundColor,
        barrierColor: props.barrierColor,
        shape: props.shape,
        clipBehavior: props.clipBehavior,
        onClose: props.onClose,
        content: props.content,
    }
}