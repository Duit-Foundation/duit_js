import { AnimationMethod } from "../attributes";

enum ServerEventType {
    update = "update",
    updateLayout = "updateLayout",
    navigation = "navigation",
    openUrl = "openUrl",
    custom = "custom",
    sequenced = "sequenced",
    grouped = "grouped",
    animationTrigger = "animationTrigger",
    timer = "timer",
}

export abstract class ServerEvent {
    abstract type: ServerEventType;
}

class _UpdateEvent extends ServerEvent {
    type = ServerEventType.update as const;
    updates: Record<string, any>;

    constructor(updates?: Record<string, any>) {
        super();
        this.updates = updates ?? {}
    }
}

class _LayoutUpdateEvent extends ServerEvent {
    type = ServerEventType.updateLayout as const;
    layout?: string;

    constructor(layout: string) {
        super();
        this.layout = layout;
    }
}

class _NavigationEvent extends ServerEvent {
    type = ServerEventType.navigation as const;
    path: string;
    extra?: Record<string, any>;

    constructor(path: string, extra?: Record<string, any>) {
        super();
        this.path = path;
        this.extra = extra;
    }
}

class _OpenUrlEvent extends ServerEvent {
    type = ServerEventType.openUrl as const;
    url: string;

    constructor(url: string) {
        super();
        this.url = url;
    }
}

interface SequencedEvent {
    event: ServerEvent;
    //delay in ms
    delay: number;
}

class _CommonEventGroup extends ServerEvent {
    type = ServerEventType.grouped as const;
    events: ServerEvent[];

    constructor(events: ServerEvent[]) {
        super();
        this.events = events;
    }
}

class _SequencedEventGroup extends ServerEvent {
    type = ServerEventType.sequenced as const;
    events: SequencedEvent[];

    constructor(events: SequencedEvent[]) {
        super();
        this.events = events;
    }
}

class _CustomEvent extends ServerEvent {
    type = ServerEventType.custom as const;
    key: string;
    extra?: Record<string, any>;

    constructor(key: string, extra?: Record<string, any>) {
        super();
        this.key = key;
        this.extra = extra;
    }
}

class _AnimationTriggerEvent extends ServerEvent {
    type = ServerEventType.animationTrigger as const;
    method: AnimationMethod;
    controllerId: string;
    animatedPropKey: string;

    constructor(method: AnimationMethod, controllerId: string, animatedPropKey: string) {
        super();
        this.method = method;
        this.controllerId = controllerId;
        this.animatedPropKey = animatedPropKey;
    }
}

class _TimerEvent extends ServerEvent {
    type = ServerEventType.timer as const;
    timerDelay: number; //delay in ms
    event: ServerEvent;

    constructor(timerDelay: number, event: ServerEvent) {
        super();
        this.timerDelay = timerDelay;
        this.event = event;
    }
}

export const UpdateEvent = (updates: Record<string, any>) => {
    return new _UpdateEvent(updates);
}

export const LayoutUpdateEvent = (layout: string) => {
    return new _LayoutUpdateEvent(layout);
}

export const NavigationEvent = (path: string, extra?: Record<string, any>) => {
    return new _NavigationEvent(path, extra);
}

export const OpenUrlEvent = (url: string) => {
    return new _OpenUrlEvent(url);
}

export const CustomEvent = (key: string, extra?: Record<string, any>) => {
    return new _CustomEvent(key, extra);
}

export const SequencedEventGroup = (events: SequencedEvent[]) => {
    return new _SequencedEventGroup(events);
}

export const CommonEventGroup = (events: ServerEvent[]) => {
    return new _CommonEventGroup(events);
}

export const AnimationTriggerEvent = (method: AnimationMethod, controllerId: string, animatedPropKey: string) => {
    return new _AnimationTriggerEvent(method, controllerId, animatedPropKey);
}

export const TimerEvent = (timerDelay: number, event: ServerEvent) => {
    return new _TimerEvent(timerDelay, event);
}