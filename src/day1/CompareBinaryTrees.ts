export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    //structural check
    if (a == null && b == null) {
        return true;
    }

    //structural check
    if (a == null || b == null) {// the correct way to catch this should be using an XOR but that case is taken by the AND above
        return false;
    }

    //value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}