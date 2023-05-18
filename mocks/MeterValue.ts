import { MeterValue } from '../src/types';

export const meterValueMock: MeterValue = {
  chargePointId: '123e4567-e89b-12d3-a456-426614174000',
  connectorId: '1',
  vehicleId: '123e4567-e89b-12d3-a456-426614174001',
  meterValues: [
    {
      sampledValue: [
        {
          context: 'Sample.Clock',
          format: 'Raw',
          measurand: 'Power.Active.Import',
          unit: 'kW',
          value: 5.2,
          timestamp: '2023-05-17T10:30:00Z',
        },
        {
          context: 'Sample.Periodic',
          format: 'Raw',
          location: 'EV',
          measurand: 'Energy.Active.Import.Register',
          unit: 'kWh',
          value: 10.8,
          timestamp: '2023-05-17T10:30:00Z',
        },
        {
          context: 'Sample.Periodic',
          format: 'Raw',
          location: 'EV',
          measurand: 'SoC',
          unit: 'Percent',
          value: 80,
          timestamp: '2023-05-17T10:30:00Z',
        },
      ],
      transactionId: 12345,
    },
  ],
};
