export type Measurand =
  | "Energy.Active.Export.Register"
  | "Energy.Active.Import.Register"
  | "Energy.Reactive.Export.Register"
  | "Energy.Reactive.Import.Register"
  | "Energy.Active.Export.Interval"
  | "Energy.Active.Import.Interval"
  | "Energy.Reactive.Export.Interval"
  | "Energy.Reactive.Import.Interval"
  | "Power.Active.Export"
  | "Power.Active.Import"
  | "Power.Offered"
  | "Power.Reactive.Export"
  | "Power.Reactive.Import"
  | "Power.Factor"
  | "Current.Import"
  | "Current.Export"
  | "Current.Offered"
  | "Voltage"
  | "Frequency"
  | "Temperature"
  | "SoC"
  | "RPM";

export type Phase =
  | "L1"
  | "L2"
  | "L3"
  | "N"
  | "L1-N"
  | "L2-N"
  | "L3-N"
  | "L1-L2"
  | "L2-L3"
  | "L3-L1";

export type Location = "Cable" | "EV" | "Inlet" | "Outlet" | "Body";

export type Unit =
  | "Wh"
  | "kWh"
  | "varh"
  | "kvarh"
  | "W"
  | "kW"
  | "VA"
  | "kVA"
  | "var"
  | "kvar"
  | "A"
  | "V"
  | "K"
  | "Celcius"
  | "Fahrenheit"
  | "Percent";

export enum Status {
  Accepted = "Accepted",
  Blocked = "Blocked",
  Expired = "Expired",
  Invalid = "Invalid",
  ConcurrentTx = "ConcurrentTx",
  Unlocked = "Unlocked",
  UnlockFailed = "UnlockFailed",
  NotImplemented = "NotImplemented",
  NotSupported = "NotSupported",
};

export enum StatusEVSE {
  Available = "Available",
  Preparing = "Preparing",
  Charging = "Charging",
  SuspendedEVSE = "SuspendedEVSE",
  SuspendedEV = "SuspendedEV",
  Finishing = "Finishing",
  Reserved = "Reserved",
  Unavailable = "Unavailable",
  Faulted = "Faulted",
};

export type AuthorizeRequest = {
  idTag: string;
};

export type AuthorizeResponse = {
  idTagInfo: {
    expiryDate?: string; // Should be in the format "YYYY-MM-DDTHH:mm:ss.sssZ"
    parentIdTag?: string;
    status: 'Accepted' | 'Blocked' | 'Expired' | 'Invalid' | 'ConcurrentTx';
  };
};

export type BootNotificationRequest = {
  chargePointVendor: string;
  chargePointModel: string;
  chargePointSerialNumber?: string;
  chargeBoxSerialNumber?: string;
  firmwareVersion?: string;
  iccid?: string;
  imsi?: string;
  meterType?: string;
  meterSerialNumber?: string;
};

export type BootNotificationResponse = {
  status: 'Accepted' | 'Pending' | 'Rejected';
  currentTime: string;
  interval: number;
};

export type CancelReservationRequest = {
  reservationId: number;
};

export type CancelReservationResponse = {
  status: 'Accepted' | 'Rejected';
};

export type ChangeAvailabilityRequest = {
  connectorId: number;
  type: 'Inoperative' | 'Operative';
};

export type ChangeAvailabilityResponse = {
  status: 'Accepted' | 'Rejected' | 'Scheduled';
};

export type ChangeConfigurationRequest = {
  key: string;
  value: string;
};

export type ChangeConfigurationResponse = {
  status: 'Accepted' | 'Rejected' | 'RebootRequired' | 'NotSupported';
};

export type ClearCacheRequest = {};

export type ClearCacheResponse = {
  status: 'Accepted' | 'Rejected';
};

export type ClearChargingProfileRequest = {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose: 'ChargePointMaxProfile' | 'TxDefaultProfile' | 'TxProfile';
  stackLevel?: number;
};

export type ClearChargingProfileResponse = {
  status: 'Accepted' | 'Unknown';
};

export type DataTransferRequest = {
  vendorId: string;
  messageId?: string;
  data?: string;
};

export type DataTransferResponse = {
  status: 'Accepted' | 'Rejected' | 'UnknownMessageId' | 'UnknownVendorId';
  data?: string;
};

export type DiagnosticsStatusNotificationRequest = {
  status: 'Idle' | 'Uploaded' | 'UploadFailed' | 'Uploading';
};

export type DiagnosticsStatusNotificationResponse = {};

export type FirmwareStatusNotificationRequest = {
  status: 
  'Downloaded' 
  | 'DownloadFailed' 
  | 'Downloading' 
  | 'Idle' 
  | 'InstallationFailed' 
  | 'Installing' 
  | 'Installed';
};

export type FirmwareStatusNotificationResponse = {};

export type GetCompositeScheduleRequest = {
  connectorId: number;
  duration: number;
  chargingRateUnit: 'A' | 'W';
};

export type GetCompositeScheduleResponse = {
  status: 'Accepted' | 'Rejected';
  connectorId: number;
  scheduleStart: string;
  chargingSchedule: {
    duration: number;
    startSchedule: string;
    chargingRateUnit: 'A' | 'W';
    chargingSchedulePeriod: {
      startPeriod: number;
      limit: number;
      numberPhases: number;
    }[];
    minChargingRate: number;
  };
};

export type GetConfigurationRequest = {
  key: string[];
};

export type GetConfigurationResponse = {
  configurationKey: {
    key: string;
    readonly: boolean;
    value: string;
  }[];
  unknownKey: string[];
};

export type GetDiagnosticsRequest = {
  location: string;
  retries?: number;
  retryInterval?: number;
  startTime?: string;
  stopTime?: string;
};

export type GetDiagnosticsResponse = {
  fileName: string;
};

export type GetLocalListVersionRequest = {};

export type GetLocalListVersionResponse = {
  listVersion: number;
};

export type HeartbeatRequest = {};

export type HeartbeatResponse = {
  currentTime: string;
};

export type MeterValuesRequest = {
  connectorId: number;
  transactionId?: number;
  meterValue: {
    timestamp: string;
    sampledValue: {
      value: string;
      context?: 
      "Interruption.Begin" 
      | "Interruption.End" 
      | "Sample.Clock" 
      | "Sample.Periodic" 
      | "Transaction.Begin" 
      | "Transaction.End" 
      | "Trigger" 
      | "Other";
      format?: "Raw" | "SignedData";
      measurand?: Measurand;
      phase?: Phase;
      location?: Location;
      unit?: Unit;
    }[]
  }[]
};

export type MeterValuesResponse = {};

export type RemoteStartTransactionRequest = {
  connectorId: number;
  idTag: string;
  chargingProfile?: {
      chargingProfileId: number;
      transactionId: number;
      stackLevel: number;
      chargingProfilePurpose: "ChargePointMaxProfile" | "TxDefaultProfile" | "TxProfile";
      chargingProfileKind: "Absolute" | "Recurring" | "Relative";
      recurrencyKind: "Daily" | "Weekly";
      validFrom: string;
      validTo: string;
      chargingSchedule: {
          duration: number;
          startSchedule: string;
          chargingRateUnit: "A" | "W";
          chargingSchedulePeriod: {
              startPeriod: number;
              limit: number;
              numberPhases: number;
          }[];
          minChargingRate: number;
      };
  };
};

export type RemoteStartTransactionResponse = {
  status: "Accepted" | "Rejected";
};

export type RemoteStopTransactionResponse = {
  status: "Accepted" | "Rejected";
};

export type ReserveNowRequest = {
  connectorId: number;
  expiryDate: string;
  idTag: string;
  parentIdTag?: string;
  reservationId: number;
};

export type ReserveNowResponse = {
  status: "Accepted" | "Faulted" | "Occupied" | "Rejected" | "Unavailable";
};

export type ResetRequest = {
  type: "Hard" | "Soft";
};

export type ResetResponse = {
  status: "Accepted" | "Rejected";
};

export type SendLocalListRequest = {
  listVersion: number;
  localAuthorizationList: LocalAuthorizationListItem[];
  updateType: "Differential" | "Full";
};

export type LocalAuthorizationListItem = {
  idTag: string;
  idTagInfo: {
      expiryDate: string;
      parentIdTag: string;
      status: "Accepted" | "Blocked" | "Expired" | "Invalid" | "ConcurrentTx";
  };
};

export type SendLocalListResponse = {
  status: "Accepted" | "Failed" | "NotSupported" | "VersionMismatch";
};

export type SetChargingProfileRequest = {
  connectorId: number;
  csChargingProfiles: {
      chargingProfileId: number;
      transactionId?: number;
      stackLevel: number;
      chargingProfilePurpose: "ChargePointMaxProfile" | "TxDefaultProfile" | "TxProfile";
      chargingProfileKind: "Absolute" | "Recurring" | "Relative";
      recurrencyKind?: "Daily" | "Weekly";
      validFrom?: string;
      validTo?: string;
      chargingSchedule: {
          duration: number;
          startSchedule: string;
          chargingRateUnit: "A" | "W";
          chargingSchedulePeriod: {
              startPeriod: number;
              limit: number;
              numberPhases?: number;
          }[];
          minChargingRate?: number;
      };
  };
};

export type StartTransactionRequest = {
  connectorId: number;
  idTag: string;
  meterStart: number;
  reservationId?: number;
  timestamp: string;
};

export type StartTransactionResponse = {
  idTagInfo: {
      expiryDate: string;
      parentIdTag?: string;
      status: 
      "Accepted" 
      | "Blocked" 
      | "Expired" 
      | "Invalid" 
      | "ConcurrentTx";
  };
  transactionId: number;
};

export type StatusNotificationRequest = {
  connectorId: number;
  errorCode: 
  "ConnectorLockFailure" 
  | "EVCommunicationError" 
  | "GroundFailure" 
  | "HighTemperature" 
  | "InternalError" 
  | "LocalListConflict" 
  | "NoError" 
  | "OtherError" 
  | "OverCurrentFailure" 
  | "PowerMeterFailure" 
  | "PowerSwitchFailure" 
  | "ReaderFailure" 
  | "ResetFailure" 
  | "UnderVoltage" 
  | "OverVoltage" 
  | "WeakSignal";
  info?: string;
  status: StatusEVSE;
  timestamp: string;
  vendorId?: string;
  vendorErrorCode?: string;
};

export type StatusNotificationResponse = {};

export type StopTransactionRequest = {
  idTag: string;
  meterStop: number;
  timestamp: string;
  transactionId: number;
  reason: 
  "EmergencyStop" 
  | "EVDisconnected" 
  | "HardReset" 
  | "Local" 
  | "Other" 
  | "PowerLoss" 
  | "Reboot" 
  | "Remote" 
  | "SoftReset" 
  | "UnlockCommand" 
  | "DeAuthorized";
  transactionData?: TransactionData[];
};

export type TransactionData = {
  timestamp: string;
  sampledValue: SampledValue[];
};

export type SampledValue = {
  value: string;
  context: 
  "Interruption.Begin" 
  | "Interruption.End" 
  | "Sample.Clock" 
  | "Sample.Periodic" 
  | "Transaction.Begin" 
  | "Transaction.End" 
  | "Trigger" 
  | "Other";
  format: "Raw" | "SignedData";
  measurand: Measurand;
  phase?: Phase;
  location?: Location;
  unit: Unit;
};

export interface StopTransactionResponse {
  idTagInfo: {
    expiryDate?: string;
    parentIdTag?: string;
    status: Status;
  };
};

export interface TriggerMessageRequest {
  requestedMessage: 
  "BootNotification" 
  | "DiagnosticsStatusNotification" 
  | "FirmwareStatusNotification" 
  | "Heartbeat" 
  | "MeterValues" 
  | "StatusNotification";
  connectorId?: number;
};

export interface TriggerMessageResponse {
  status: "Accepted" | "Rejected" | "NotImplemented";
};

export interface UnlockConnectorRequest {
  connectorId: number;
};

export interface UnlockConnectorResponse {
  status: "Unlocked" | "UnlockFailed" | "NotSupported";
};

export interface UpdateFirmwareRequest {
  location: string;
  retries?: number;
  retrieveDate: string;
  retryInterval?: number;
};

export interface UpdateFirmwareResponse {};
