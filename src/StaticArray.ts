interface StaticArrayInterface<Type> {
    size: number;
    lookup(index: number): Type;
    append(item: Type): void;
    insert(item: Type, index: number): undefined | void;
    delete(index: number): boolean;
}

class StaticArray<Type> implements StaticArrayInterface<Type> {
    private items: Type[];
    size: number;
    constructor(size = 0) {
        this.size = size;
        this.items = [];
    }

    getItems(): Type[] {
        return this.items;
    }

    lookup(index: number): Type {
        return this.items[index];
    }

    append(item: Type): void {
        if (this.items.length === this.size) {
            throw new Error("Array size limit reached!");
        } else {
            this.items[this.items.length] = item;
        }
    }

    insert(item: Type, index: number): void | undefined {
        if (index < 0 || index > this.size) {
            throw new Error(`Index - ${index} out of bounds.`);
        } else if (this.items.length === this.size) {
            throw new Error("Array size limit reached!");
        }

        let newItems: Type[] = []
        let itemInserted: boolean = false;
        for (let i: number = 0; i < this.size; i++) {
            if (i === index) {
                newItems[i] = item;
                itemInserted = true;
            } else if (itemInserted) {
                newItems[i] = this.items[i - 1]
            } else {
                newItems[i] = this.items[i];
            }
        }
        this.items = newItems;
    }

    delete(index: number): boolean {
        if (index < 0 || index > this.size) {
            throw new Error(`Index ${index} out of bounds.`);
        } else {
            const newItems: Type[] = [];
            let itemDeleted = false;
            for (let i: number = 0; i < this.size; i++) {
                if (itemDeleted) {
                    newItems[i - 1] = this.items[i];
                } else if (i === index) {
                    itemDeleted = true;
                } else {
                    newItems[i] = this.items[i];
                }
            }
            this.items = newItems;
            this.size--;
        }
        return true;
    }
}

export default StaticArray;