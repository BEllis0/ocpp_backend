import { Connector } from '../src/types';

export const ConnectorMock: Connector = {
  chargePointId: '123e4567-e89b-12d3-a456-426614174000',
  connectorId: 1,
  currentType: 'DC',
  name: 'Connector 1',
  voltage: 240,
  plugType: 'CCS1',
  plugPowerLevel: 'Level 2',
  ocppStatus: 'Available',
  currentChargingLoad: 10.5,
  maxCapacity: 50,
  powerFactor: 0.9,
};
