import CircleBuffer from './circular-buffer'

const buffer = new CircleBuffer(20)

for (let i = 0; i < 5; i++) {
  buffer.push(`Value ${i}`)
}

console.log(buffer.size) // 5

for (let i = 5; i < 100; i++) {
  buffer.push(`Value ${i}`)
}

console.log(buffer.size) // 20

for (const value of buffer) {
  console.log(value) // Value XX
}
