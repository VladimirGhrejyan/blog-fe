type TMods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: TMods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter((name) => name),
        ...Object.entries(mods)
            .filter(([_, value]) => !!value)
            .map(([className]) => className),
    ].join(' ');
};
