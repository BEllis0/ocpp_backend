export type ConnectorId = number | string;
export type ChargingRateUnit = 'W' | 'kW' | 'A';

export type ChargingSession = {
  chargePointId: string; // UUID
  connectorId: ConnectorId;
  energyToCharge: number;
  chargingRateUnit: ChargingRateUnit;
  maxChargingPowerOfVehicle: number | null;
  maximumChargingTimeDate: string; // Date-time in UTC
  ocppTransactionStart: string; // Date
  transactionId: number;
  vehicleId: string; // UUID
  priority: number;
  idTag: string;
  plugInTime: string; // Date
  plugOutTime: string; // Date
  paymentInfo: string;
  remoteStopOnCompletion: boolean;
  meterStart: number;
};

export type MeterValue = {
  chargePointId: string; // UUID
  connectorId: ConnectorId;
  vehicleId: string; // UUID
  meterValues: Array<{
    sampledValue: Array<{
      context: 'Sample.Clock' | 'Sample.Periodic' | 'Other';
      format: 'Raw';
      location?: 'Body' | 'Cable' | 'EV' | 'Inlet' | 'Outlet';
      measurand: 'Power.Active.Import' | 'Energy.Active.Import.Register' | 'SoC';
      phase?: 'L1' | 'L2' | 'L3' | 'N' | 'L1-N' | 'L2-N' | 'L3-N' | 'L1-L2' | 'L2-L3' | 'L3-L1';
      unit: 'W' | 'kW' | 'Wh' | 'kWh' | 'A' | 'V' | 'Percent';
      value: number;
      timestamp: string; // Date-time in ISO 8601 format
    }>;
    transactionId?: number;
  }>;
};
