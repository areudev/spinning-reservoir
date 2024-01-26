import SpinningReservoir from '../src/index'

describe('SpinningReservoir', () => {
  // Test the constructor
  test('should initialize correctly', () => {
    const buffer = new SpinningReservoir<number>(5)
    expect(buffer.size).toBe(0)
    expect(buffer.maxSizeValue).toBe(5)
  })

  // Test the push method
  describe('push', () => {
    test('should add an element to the buffer', () => {
      const buffer = new SpinningReservoir<number>(5)
      buffer.push(1)
      expect(buffer.size).toBe(1)
      expect(buffer.get(0)).toBe(1)
    })

    test('should overwrite the oldest element when the buffer is full', () => {
      const buffer = new SpinningReservoir<number>(3)
      buffer.push(1).push(2).push(3).push(4)
      expect(buffer.size).toBe(3)
      expect(buffer.get(0)).toBe(2)
      expect(buffer.get(1)).toBe(3)
      expect(buffer.get(2)).toBe(4)
    })
  })

  // Test the clear method
  test('clear should reset the buffer', () => {
    const buffer = new SpinningReservoir<number>(5)
    buffer.push(1).push(2).push(3)
    buffer.clear()
    expect(buffer.size).toBe(0)
  })

  // Test the get method
  describe('get', () => {
    test('should retrieve an element at a given index', () => {
      const buffer = new SpinningReservoir<number>(5)
      buffer.push(1).push(2).push(3)
      expect(buffer.get(0)).toBe(1)
      expect(buffer.get(1)).toBe(2)
      expect(buffer.get(2)).toBe(3)
    })

    test('should throw an error when the index is out of bounds', () => {
      const buffer = new SpinningReservoir<number>(5)
      buffer.push(1)
      expect(() => buffer.get(1)).toThrow('Index out of bounds')
    })
  })

  // Test the size getter
  test('size should return the current size of the buffer', () => {
    const buffer = new SpinningReservoir<number>(5)
    buffer.push(1).push(2)
    expect(buffer.size).toBe(2)
  })

  // Test the maxSizeValue getter and setter
  describe('maxSizeValue', () => {
    test('should return the maximum size of the buffer', () => {
      const buffer = new SpinningReservoir<number>(5)
      expect(buffer.maxSizeValue).toBe(5)
    })

    test('should update the maximum size of the buffer', () => {
      const buffer = new SpinningReservoir<number>(5)
      buffer.maxSizeValue = 10
      expect(buffer.maxSizeValue).toBe(10)
    })

    test('should throw an error when setting an invalid value', () => {
      const buffer = new SpinningReservoir<number>(5)
      expect(() => {
        buffer.maxSizeValue = -1
      }).toThrow('maxSize must be an integer greater than 0')
      expect(() => {
        buffer.maxSizeValue = 0
      }).toThrow('maxSize must be an integer greater than 0')
      expect(() => {
        buffer.maxSizeValue = 1.5
      }).toThrow('maxSize must be an integer greater than 0')
    })
  })
})
