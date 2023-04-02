export function isTypeOf<T>(check: unknown): check is T {
    if (check as T) {
        return true;
    }
    return false;
}

export function isInstanceOf(type: string, instance: unknown): boolean {
    return typeof instance === type;
}
