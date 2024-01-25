function walk(curr: BinaryNode<number> | null, path: number[]) {
    //we STOP recursing when we reach a node without any children, nothing else to search!
    if (!curr) {
        return path;
    }
    //recurse
    //pre
    path.push(curr.value);
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    //post -- nothing to do saince this is PREORDER
    return path;

}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[]);

}