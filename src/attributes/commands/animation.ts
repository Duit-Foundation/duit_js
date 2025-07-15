import { AnimationMethod, AnimationTrigger } from "../properties";

export interface AnimationCommandProps {
    method: keyof typeof AnimationMethod,
    trigger: keyof typeof AnimationTrigger,
    animatedPropKey: string,
}

export const AnimationCommand = ({ ...props }: AnimationCommandProps) => {
    return {
        type: "animation",
        method: props.method,
        trigger: props.trigger,
        animatedPropKey: props.animatedPropKey,
    }
}
