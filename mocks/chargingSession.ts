import { ChargingSession } from '../src/types';

export const chargingSessionMock: ChargingSession = {
  chargePointId: '123e4567-e89b-12d3-a456-426614174000',
  connectorId: 1,
  energyToCharge: 50,
  chargingRateUnit: 'kW',
  maxChargingPowerOfVehicle: null,
  maximumChargingTimeDate: '2023-05-17T10:30:00Z',
  ocppTransactionStart: '2023-05-17T10:30:00',
  transactionId: 12345,
  vehicleId: '123e4567-e89b-12d3-a456-426614174001',
  priority: 3,
  idTag: 'ABC123',
  plugInTime: '2023-05-17T10:30:00',
  plugOutTime: '2023-05-17T11:30:00',
  paymentInfo: 'Credit Card',
  remoteStopOnCompletion: false,
  meterStart: 100,
};
