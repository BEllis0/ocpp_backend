import { ChargePointStatus } from './ocpp.type';

export type ConnectorId = number;
export type Latitude = number | null;
export type Longitude = number | null;
export type Location = string | null;
export type CurrentType = 'DC' | 'AC_phase3_LN' | 'AC_phase3_LL' | 'AC_phase1';
export type PlugType = 'CCS1' | 'CCS2' | 'CHAdeMO' | 'GB/T' | 'Type 1' | 'Type 2' | 'Tesla';
export type PlugPowerLevel = 'Level 1' | 'Level 2' | 'DCFC';

export type ChargePointPosition = {
  latitude: Latitude;
  longitude: Longitude;
};

export type FleetSchedule = {
  departureTime: string;
  targetSOC: number;
  numberOfVehicles: number;
  defaultSOCOnArrival?: number;
};

export type ChargePoint = {
  latitude: Latitude;
  longitude: Longitude;
  location: Location;
  vendor: string | null;
  name: string;
  ocppId: string;
  networkId: string; // UUID
  protocol: string | null;
  customName: string | null;
  position: ChargePointPosition;
  firmwareVersion: string | null;
  modelName: string | null;
  allowAllIdTags: boolean;
  ocppStatus: 'ONLINE' | 'OFFLINE';
  source: 'CMS' | 'UI' | null;
  maxCapacity: number;
};

export type Connector = {
  chargePointId: string; // UUID
  connectorId: ConnectorId;
  currentType: CurrentType;
  name: string;
  voltage: number;
  plugType: PlugType;
  plugPowerLevel: PlugPowerLevel;
  ocppStatus: ChargePointStatus;
  currentChargingLoad: number | null;
  maxCapacity: number;
  powerFactor: number;
};

export type Network = {
  name: string;
  location: Location;
  latitude: Latitude;
  longitude: Longitude;
  address: string | null;
  country: string;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  objective:
    'load_sharing'
    | 'load_sharing_with_tou_rates'
    | 'fleet' | 'fleet_with_tou_rates'
    | 'mixed_fleet'
    | 'vehicle_to_grid'
    | 'off';
  timeZone: string;
  maxCapacityBuffer: number;
  webhook: string | null;
  webhookSecret: string | null;
  connectorPowerStep: number;
  optimizeWithMeterValue: boolean;
  solarActive: boolean;
  closeIdleSessions: boolean;
  reservedPower: number | null;
  defaultEnergyPrice: number | null;
  connectorMinimumLoad: number;
  fleetSchedule: FleetSchedule[] | null;
  startSessionsWithMeterValues: boolean;
  eventLogging: boolean;
  enableAnalytics: boolean;
  baseloadActive: boolean;
  baseloadPeak: number | null;
  baseloadAvgYearlyConsumption: number | null;
  baseloadBuildingType: 'office' | 'industry' | null;
  connectorReservedPowerSplit: boolean;
  priceConstraintsActive: boolean;
  currency: 'USD' | 'EUR';
  onTimeDeparture: boolean | null;
  geofenceRadius: number | null;
  maxCapacity: number;
};

export type Vehicle = {
  name: string;
  VIN?: string | null;
  customerVehicleId?: string | null;
  departureTime?: string | null;
  batteryCapacity: number;
  location?: string | null;
  maxChargingPower: number;
  stateOfCharge: number;
  targetStateOfCharge: number;
  group?: string | null;
  insideDepot?: string | null;
};

export type IdTag = {
  value: string;
  priority: number;
  group: 'RFID' | 'credit card reader' | 'VID or MAC address';
  vehicleId: string;
  listVersion: number;
};
