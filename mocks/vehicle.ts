import { Vehicle } from '../src/types';

export const vehicleMock: Vehicle = {
  name: 'My Vehicle',
  VIN: 'ABC123',
  customerVehicleId: '123456',
  departureTime: '2023-05-17T10:00:00Z',
  batteryCapacity: 60.5,
  location: 'New York',
  maxChargingPower: 7.2,
  stateOfCharge: 50,
  targetStateOfCharge: 80,
  group: 'Fleet',
  insideDepot: '12345678-1234-1234-1234-1234567890AB',
};
