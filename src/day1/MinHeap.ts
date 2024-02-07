export default class MinHeap {
    public length: number;
    private data: number[];


    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
        if (idx >= this.length || lIdx > this.length) {
            return;
        }
        const lvalue = this.data[lIdx];
        const rvalue = this.data[rIdx];
        const value = this.data[idx];
        if (lvalue > rvalue && value > rvalue) {
            this.data[idx] = rvalue;
            this.data[rIdx] = value;
            this.heapifyDown(rIdx);
        } else if (rvalue > lvalue && value > lvalue) {
            this.data[idx] = lvalue;
            this.data[lIdx] = value;
            this.heapifyDown(lIdx);
        }
    }


    private heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const pValue = this.data[p];
        const value = this.data[idx];

        if (pValue > value) {
            this.data[idx] = pValue;
            this.data[p] = value;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}