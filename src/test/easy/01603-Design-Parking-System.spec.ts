import { describe, expect, it } from 'vitest'
import { ParkingSystem } from '../../code/easy/01603-Design-Parking-System'

describe('design parking system test case 🥇', () => {
  it('should return the expected result', () => {
    const parkingSystem = new ParkingSystem(1, 1, 0)
    // return true because there is 1 available slot for a big car
    expect(parkingSystem.addCar(1)).toBe(true)
    // return true because there is 1 available slot for a medium car
    expect(parkingSystem.addCar(2)).toBe(true)
    // return false because there is no available slot for a small car
    expect(parkingSystem.addCar(3)).toBe(false)
    // return false because there is no available slot for a big car. It is already occupied.
    expect(parkingSystem.addCar(1)).toBe(false)
  })
})

describe('design parking system test case 🥈', () => {
  it('should return the expected result', () => {
    const parkingSystem = new ParkingSystem(2, 2, 3)
    // return true because there is 2 available slot for a big car
    expect(parkingSystem.addCar(1)).toBe(true)
    // return true because there is 2 available slot for a medium car
    expect(parkingSystem.addCar(2)).toBe(true)
    // return true because there is 3 available slot for a small car
    expect(parkingSystem.addCar(3)).toBe(true)
    // return true because there is 1 available slot for a big car
    expect(parkingSystem.addCar(1)).toBe(true)
    // return true because there is 1 available slot for a medium car
    expect(parkingSystem.addCar(2)).toBe(true)
    // return true because there is 2 available slot for a small car
    expect(parkingSystem.addCar(3)).toBe(true)
    // return false because there is no available slot for a big car. It is already occupied.
    expect(parkingSystem.addCar(1)).toBe(false)
    // return false because there is no available slot for a medium car. It is already occupied.
    expect(parkingSystem.addCar(2)).toBe(false)
    // return true because there is 1 available slot for a small car
    expect(parkingSystem.addCar(3)).toBe(true)
    // return false because there is no available slot for a big car. It is already occupied.
    expect(parkingSystem.addCar(1)).toBe(false)
    // return false because there is no available slot for a medium car. It is already occupied.
    expect(parkingSystem.addCar(2)).toBe(false)
    // return false because there is no available slot for a small car. It is already occupied.
    expect(parkingSystem.addCar(3)).toBe(false)
  })
})
