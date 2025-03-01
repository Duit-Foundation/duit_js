export interface ThemeConsumer {
    theme?: string;
    ignoreTheme?: boolean;
    overrideRule?: keyof typeof ThemeOverrideRule;
}

export enum ThemeOverrideRule {
    themeOverlay = 0,
    themePriority
}

