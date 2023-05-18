import { ChargePoint } from '../src/types';

export const chargePointMock: ChargePoint = {
  latitude: 40.7128,
  longitude: -74.0060,
  location: 'New York City',
  vendor: 'Vendor',
  name: 'Charge Point 1',
  ocppId: '123e4567-e89b-12d3-a456-426614174000',
  networkId: '98765432-10ab-12cd-efgh-9876543210ab',
  protocol: 'Protocol',
  customName: 'Custom Name',
  position: {
    latitude: 40.7128,
    longitude: -74.0060,
  },
  firmwareVersion: '1.0',
  modelName: 'Model',
  allowAllIdTags: true,
  ocppStatus: 'ONLINE',
  source: 'CMS',
  maxCapacity: 50,
};
