import { AnimationMethod, AnimationTrigger } from "../properties";

export interface AnimationCommandProps {
    type: "animation",
    method: keyof typeof AnimationMethod,
    trigger: keyof typeof AnimationTrigger,
    animatedPropKey: string,
}

export const AnimationCommand = ({ ...props }: AnimationCommandProps) => {
    return {
        type: "animation" as const,
        method: props.method,
        trigger: props.trigger,
        animatedPropKey: props.animatedPropKey,
    } as const;
}
