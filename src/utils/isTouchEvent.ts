export const isTouchEvent = (
    e: React.TouchEvent | React.MouseEvent,
): e is React.TouchEvent => {
    if ("touches" in e) return true;
    return false;
};
