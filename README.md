# Spinning Reservoir

Spinning Reservoir is a TypeScript class that implements a circular buffer with a fixed maximum size. When the buffer is full and a new item is added, the oldest item in the buffer is discarded.

## Installation

Install the package with npm:

```bash
npm install spinning-reservoir
```

### API

#### `constructor(maxSize: number)`

Creates a new `SpinningReservoir` with the specified maximum size.

```ts
new SpinningReservoir(20)
```

#### `push(value: T): SpinningReservoir<T>`

Adds a new item to the buffer. If the buffer is full, the oldest item is discarded.

```ts
const buffer = new SpinningReservoir()

console.log(buffer.size) // 0

buffer.push('hi')
buffer.push('there')

console.log(buffer.size) // 2
```

#### `clear(): SpinningReservoir<T>`

Clears all items from the buffer.

```ts
const buffer = new SpinningReservoir()

buffer.push('hi')
console.log(buffer.size) // 1

buffer.clear()
console.log(buffer.size) // 0
```

#### `get(index: number): T | undefined`

Returns the item at the specified index, or `undefined` if the index is out of bounds.

```ts
const buffer = new SpinningReservoir()

buffer.push('hi')
buffer.push('there')

console.log(buffer.get(0)) // 'hi'
console.log(buffer.get(1)) // 'there'
```

#### `size: number`

The current number of items in the buffer.

```ts
const buffer = new SpinningReservoir()

console.log(buffer.size) // 0

buffer.push('hi')
buffer.push('there')

console.log(buffer.size) // 2
```

#### `maxSizeValue: number`

The maximum size of the buffer. Can be changed after the buffer is created, but must be an integer greater than 0.

```ts
const buffer = new SpinningReservoir()

console.log(buffer.maxSizeValue) // 10

buffer.maxSizeValue = 20

console.log(buffer.maxSizeValue) // 20
```

#### `[Symbol.iterator](): Iterator<T>`

Returns an iterator that iterates over the items in the buffer in the order they were added.

```ts
const buffer = new SpinningReservoir<string>()

buffer.push('hi')
buffer.push('there')

for (const value of buffer) {
  console.log(value)
}

const it = buffer[Symbol.iterator]()
let r = it.next()
while (!r.done) {
  console.log(r.value)
  r = it.next()
}
```
