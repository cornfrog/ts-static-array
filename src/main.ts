import StaticArray from "./StaticArray.js";

const SIZE: number = 3;

console.log(`numbers[] SIZE: ${SIZE}`);

const numbers = new StaticArray<number>(SIZE);

for (let i: number = 0; i < SIZE + 1; i++) {
    try {
        numbers.append(i);
        console.log(`Appended: ${i} to numbers.`)
    } catch (error) {
        console.log(error);
    }
}

console.log("numbers[]: ", numbers.getItems());


console.log("numbers[0]: ", numbers.lookup(0));
console.log("numbers[1]: ", numbers.lookup(1));
console.log("numbers[2]: ", numbers.lookup(2));
console.log("numbers[3]: ", numbers.lookup(3));

const numbers2 = new StaticArray<number>(3);
numbers2.append(0);
numbers2.append(2);

console.log(numbers2);

numbers2.insert(1, 1);

console.log(numbers2);
try {
    numbers2.delete(1);
    numbers.delete(5);
} catch (error) {
    console.log(error);
}

console.log(numbers2);