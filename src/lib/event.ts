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

export class UpdateEvent extends ServerEvent {
    type = ServerEventType.update as const;
    updates: Record<string, any>;

    constructor(updates?: Record<string, any>) {
        super();
        this.updates = updates ?? {}
    }
}

export class LayoutUpdateEvent extends ServerEvent {
    type = ServerEventType.updateLayout as const;
    layout?: string;

    constructor(layout: string) {
        super();
        this.layout = layout;
    }
}

export class NavigationEvent extends ServerEvent {
    type = ServerEventType.navigation as const;
    path: string;
    extra?: Record<string, any>;

    constructor(path: string, extra?: Record<string, any>) {
        super();
        this.path = path;
        this.extra = extra;
    }
}

export class OpenUrlEvent extends ServerEvent {
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

export class CommonEventGroup extends ServerEvent {
    type = ServerEventType.grouped as const;
    events: ServerEvent[];

    constructor(events: ServerEvent[]) {
        super();
        this.events = events;
    }
}

export class SequencedEventGroup extends ServerEvent {
    type = ServerEventType.sequenced as const;
    events: SequencedEvent[];

    constructor(events: SequencedEvent[]) {
        super();
        this.events = events;
    }
}

export class CustomEvent extends ServerEvent {
    type = ServerEventType.custom as const;
    key: string;
    extra?: Record<string, any>;

    constructor(key: string, extra?: Record<string, any>) {
        super();
        this.key = key;
        this.extra = extra;
    }
}

export const CreateUpdateEvent = (updates: Record<string, any>) => {
    return new UpdateEvent(updates);
}

export const CreateLayoutUpdateEvent = (layout: string) => {
    return new LayoutUpdateEvent(layout);
}

export const CreateNavigationEvent = (path: string, extra?: Record<string, any>) => {
    return new NavigationEvent(path, extra);
}

export const CreateOpenUrlEvent = (url: string) => {
    return new OpenUrlEvent(url);
}

export const CreateCustomEvent = (key: string, extra?: Record<string, any>) => {
    return new CustomEvent(key, extra);
}

export const CreateSequencedEventGroup = (events: SequencedEvent[]) => {
    return new SequencedEventGroup(events);
}

export const CreateCommonEventGroup = (events: ServerEvent[]) => {
    return new CommonEventGroup(events);
}