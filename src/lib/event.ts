enum ServerEventType {
    update = "update",
    updateLayout = "updateLayout",
    navigation = "navigation",
    openUrl = "openUrl",
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