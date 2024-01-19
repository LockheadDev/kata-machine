export default class ArrayList<T> {
    public length: number;
    private _arr: T[];
    constructor(len:number) {
        this.length = len;
    }

    prepend(item: T): void {
        this.length++;
        let newArr = new Array<T>(this.length);
        newArr[0] = item;
        for (let i = 1; i < newArr.length; i++) {
            newArr[i] = this._arr[i - 1];
        }
        this._arr = newArr;
    }
    insertAt(item: T, idx: number): void {
        this.length++;
        let newArr = new Array<T>(this.length);
        for
    }
    append(item: T): void {
        this.length++;
        let newArr = new Array<T>(this.length);
        newArr[this.length - 1] = item;
        for (let i = 0; i < newArr.length - 1; i++) {
            newArr[i] = this._arr[i];
        }
        this._arr = newArr;
    }
    remove(item: T): T | undefined {
        this.length--;
        let newArr = new Array<T>(this.length);
        let value = undefined;
        let idx: number = -1;
        for (let i = 0; i < this._arr.length; i++) {
            if (item === this._arr[i]) {
                idx = i;
                value = item;
            }
        }
        for (let j = 0; j < newArr.length; j++) {
            if (idx === j && idx !== 0) j--;
            newArr[j] = this._arr[j];
        }
        this._arr = newArr;
        return value;
    }
    get(idx: number): T | undefined {
        return this._arr[idx];
    }
    removeAt(idx: number): T | undefined {
        this.length--;
        let newArr = new Array<T>(this.length);
        let value = this._arr[idx];
        for (let j = 0; j < newArr.length; j++) {
            if (idx === j && idx !== 0) j--;
            newArr[j] = this._arr[j];
        }
        this._arr =  newArr;
        return value;
    }
}