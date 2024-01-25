function walk(curr: BinaryNode<number> | null, path: number[]) {
    //we STOP recursing when we reach a node without any children, nothing else to search!
    if (!curr) {
        return path;
    }


    //recurse
    //pre
    walk(curr.left, path);
    //recurse
    path.push(curr.value);
    walk(curr.right, path);
    //post -- nothing to do saince this is PREORDER
    return path;

}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head,[]);

}