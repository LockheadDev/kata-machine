type QNode<T> = {
    value: T,
    prev?: QNode<T>
}
export default class Stack<T> {
    public length: number;
    private _head?: QNode<T>


    constructor() {
        this.length = 0;
        this._head = undefined;
    }

    push(item: T): void {
    const node = {value :item} as QNode<T>;
    this.length++;
    if(!this._head)
    {
        this._head =node;
        return; 
    }
    node.prev = this._head
    this._head = node;
    }
    pop(): T | undefined {
        this.length =Math.max(0,this.length-1);
        if(this.length===0)
        {
            const head = this._head;
            this._head = undefined;
            return head?.value;
        }
            const head = this._head as QNode<T>;
            this._head = head.prev;
            return head.value;
    }
    peek(): T | undefined {
        return this._head?.value;
    }
}