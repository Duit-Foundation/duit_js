import type { BaseAction } from "../lib/action";
import type { Alignment, Border, Color, Curves, EdgeInsets, Size, BoxConstraints, BoxDecoration, TextStyle, AnimationTrigger, AnimationMethod } from "./properties";

export interface AnimatedBuilderAttributes {
    tweenDescriptions: TweenDescription[];
}

abstract class TweenBase<T> {
    abstract type: string;
    animatedPropKey: string;
    duration: number;
    curve?: keyof typeof Curves;
    begin: T;
    end: T;
    reverseOnRepeat?: boolean;
    onAnimationEnd?: BaseAction;
    trigger: keyof typeof AnimationTrigger;
    method: keyof typeof AnimationMethod;

    constructor(
        animatedPropKey: string,
        duration: number,
        begin: T,
        end: T,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        this.animatedPropKey = animatedPropKey;
        this.curve = curve;
        this.duration = duration;

        this.begin = begin;
        this.end = end;
        this.reverseOnRepeat = false;
        this.trigger = trigger ?? "onEnter";
        this.method = method ?? "forward";
        this.onAnimationEnd = onAnimationEnd;
        reverseOnRepeat = reverseOnRepeat;
    }
}

type TweenDescription = Tween | ColorTween | TextStyleTween | BorderTween | EdgeInsetsTween | SizeTween | BoxConstraintsTween | DecorationTween;

class Tween extends TweenBase<any> {
    type = "tween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: any,
        end: any,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class ColorTween extends TweenBase<Color> {
    type = "colorTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: Color,
        end: Color,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class TextStyleTween extends TweenBase<TextStyle> {
    type = "textStyleTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: TextStyle,
        end: TextStyle,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class DecorationTween extends TweenBase<BoxDecoration> {
    type = "decorationTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: BoxDecoration,
        end: BoxDecoration,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class AlignmentTween extends TweenBase<Alignment> {
    type = "alignmentTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: Alignment,
        end: Alignment,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class EdgeInsetsTween extends TweenBase<EdgeInsets> {
    type = "edgeInsetsTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: EdgeInsets,
        end: EdgeInsets,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class BoxConstraintsTween extends TweenBase<BoxConstraints> {
    type = "boxConstraintsTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: BoxConstraints,
        end: BoxConstraints,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class SizeTween extends TweenBase<Size> {
    type = "sizeTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: Size,
        end: Size,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}

class BorderTween extends TweenBase<Border> {
    type = "borderTween" as const;
    constructor(
        animatedPropKey: string,
        duration: number,
        begin: Border,
        end: Border,
        curve: keyof typeof Curves,
        trigger?: keyof typeof AnimationTrigger,
        method?: keyof typeof AnimationMethod,
        reverseOnRepeat?: boolean,
        onAnimationEnd?: BaseAction
    ) {
        super(animatedPropKey, duration, begin, end, curve, trigger, method, reverseOnRepeat, onAnimationEnd);
    }
}