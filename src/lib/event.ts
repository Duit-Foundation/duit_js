enum ServerEventType {
    update = "update",
    updateLayout = "updateLayout",
    navigation = "navigation",
    openUrl = "openUrl",
    custom = "custom",
    sequenced = "sequenced",
    grouped = "grouped",
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