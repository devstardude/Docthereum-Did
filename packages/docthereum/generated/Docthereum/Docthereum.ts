// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApplicationResult extends ethereum.Event {
  get params(): ApplicationResult__Params {
    return new ApplicationResult__Params(this);
  }
}

export class ApplicationResult__Params {
  _event: ApplicationResult;

  constructor(event: ApplicationResult) {
    this._event = event;
  }

  get applicantAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get AuthId(): string {
    return this._event.parameters[1].value.toString();
  }

  get status(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ChainlinkCancelled extends ethereum.Event {
  get params(): ChainlinkCancelled__Params {
    return new ChainlinkCancelled__Params(this);
  }
}

export class ChainlinkCancelled__Params {
  _event: ChainlinkCancelled;

  constructor(event: ChainlinkCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkFulfilled extends ethereum.Event {
  get params(): ChainlinkFulfilled__Params {
    return new ChainlinkFulfilled__Params(this);
  }
}

export class ChainlinkFulfilled__Params {
  _event: ChainlinkFulfilled;

  constructor(event: ChainlinkFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkRequested extends ethereum.Event {
  get params(): ChainlinkRequested__Params {
    return new ChainlinkRequested__Params(this);
  }
}

export class ChainlinkRequested__Params {
  _event: ChainlinkRequested;

  constructor(event: ChainlinkRequested) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class DoctorAuthorised extends ethereum.Event {
  get params(): DoctorAuthorised__Params {
    return new DoctorAuthorised__Params(this);
  }
}

export class DoctorAuthorised__Params {
  _event: DoctorAuthorised;

  constructor(event: DoctorAuthorised) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _authAddre(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get AuthId(): string {
    return this._event.parameters[2].value.toString();
  }

  get AuthOnDate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LabAuthorised extends ethereum.Event {
  get params(): LabAuthorised__Params {
    return new LabAuthorised__Params(this);
  }
}

export class LabAuthorised__Params {
  _event: LabAuthorised;

  constructor(event: LabAuthorised) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _authAddre(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get AuthId(): string {
    return this._event.parameters[2].value.toString();
  }

  get AuthOnDate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ReportSaved extends ethereum.Event {
  get params(): ReportSaved__Params {
    return new ReportSaved__Params(this);
  }
}

export class ReportSaved__Params {
  _event: ReportSaved;

  constructor(event: ReportSaved) {
    this._event = event;
  }

  get fileId(): string {
    return this._event.parameters[0].value.toString();
  }

  get category(): string {
    return this._event.parameters[1].value.toString();
  }

  get PatientName(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get LabName(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get AddedAt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get age(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get height(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get weight(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get bloodGroup(): string {
    return this._event.parameters[8].value.toString();
  }

  get gender(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class Docthereum__SaveReportInput_generalInfoStruct extends ethereum.Tuple {
  get age(): BigInt {
    return this[0].toBigInt();
  }

  get height(): BigInt {
    return this[1].toBigInt();
  }

  get weight(): BigInt {
    return this[2].toBigInt();
  }

  get bloodGroup(): string {
    return this[3].toString();
  }

  get gender(): string {
    return this[4].toString();
  }
}

export class Docthereum__GetAuthDetailsResultValue0Struct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get _address(): Address {
    return this[1].toAddress();
  }

  get auth_id(): string {
    return this[2].toString();
  }

  get authOnDate(): BigInt {
    return this[3].toBigInt();
  }
}

export class Docthereum__GetDetailedReportResultValue0Struct extends ethereum.Tuple {
  get fileHash(): string {
    return this[0].toString();
  }

  get category(): string {
    return this[1].toString();
  }

  get User(): Address {
    return this[2].toAddress();
  }

  get ByLab(): Address {
    return this[3].toAddress();
  }

  get dated(): BigInt {
    return this[4].toBigInt();
  }

  get generalInfo(): Docthereum__GetDetailedReportResultValue0GeneralInfoStruct {
    return changetype<
      Docthereum__GetDetailedReportResultValue0GeneralInfoStruct
    >(this[5].toTuple());
  }
}

export class Docthereum__GetDetailedReportResultValue0GeneralInfoStruct extends ethereum.Tuple {
  get age(): BigInt {
    return this[0].toBigInt();
  }

  get height(): BigInt {
    return this[1].toBigInt();
  }

  get weight(): BigInt {
    return this[2].toBigInt();
  }

  get bloodGroup(): string {
    return this[3].toString();
  }

  get gender(): string {
    return this[4].toString();
  }
}

export class Docthereum extends ethereum.SmartContract {
  static bind(address: Address): Docthereum {
    return new Docthereum("Docthereum", address);
  }

  checkAuthorisation(name: string, id: string, applyId: BigInt): Bytes {
    let result = super.call(
      "checkAuthorisation",
      "checkAuthorisation(string,string,uint256):(bytes32)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(id),
        ethereum.Value.fromUnsignedBigInt(applyId)
      ]
    );

    return result[0].toBytes();
  }

  try_checkAuthorisation(
    name: string,
    id: string,
    applyId: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "checkAuthorisation",
      "checkAuthorisation(string,string,uint256):(bytes32)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(id),
        ethereum.Value.fromUnsignedBigInt(applyId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  SaveReport(
    _fileHash: string,
    user_address: Address,
    category: string,
    _generalInfo: Docthereum__SaveReportInput_generalInfoStruct
  ): boolean {
    let result = super.call(
      "SaveReport",
      "SaveReport(string,address,string,(int256,int256,int256,string,string)):(bool)",
      [
        ethereum.Value.fromString(_fileHash),
        ethereum.Value.fromAddress(user_address),
        ethereum.Value.fromString(category),
        ethereum.Value.fromTuple(_generalInfo)
      ]
    );

    return result[0].toBoolean();
  }

  try_SaveReport(
    _fileHash: string,
    user_address: Address,
    category: string,
    _generalInfo: Docthereum__SaveReportInput_generalInfoStruct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "SaveReport",
      "SaveReport(string,address,string,(int256,int256,int256,string,string)):(bool)",
      [
        ethereum.Value.fromString(_fileHash),
        ethereum.Value.fromAddress(user_address),
        ethereum.Value.fromString(category),
        ethereum.Value.fromTuple(_generalInfo)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setFee(_fee: BigInt): boolean {
    let result = super.call("setFee", "setFee(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_fee)
    ]);

    return result[0].toBoolean();
  }

  try_setFee(_fee: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("setFee", "setFee(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_fee)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setJobId(_jobId: Bytes): boolean {
    let result = super.call("setJobId", "setJobId(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_jobId)
    ]);

    return result[0].toBoolean();
  }

  try_setJobId(_jobId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("setJobId", "setJobId(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_jobId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setOracle(_oracle: Address): boolean {
    let result = super.call("setOracle", "setOracle(address):(bool)", [
      ethereum.Value.fromAddress(_oracle)
    ]);

    return result[0].toBoolean();
  }

  try_setOracle(_oracle: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("setOracle", "setOracle(address):(bool)", [
      ethereum.Value.fromAddress(_oracle)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setOwner(_owner: Address): boolean {
    let result = super.call("setOwner", "setOwner(address):(bool)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBoolean();
  }

  try_setOwner(_owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("setOwner", "setOwner(address):(bool)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  AuthorisedDoc(param0: Address): boolean {
    let result = super.call("AuthorisedDoc", "AuthorisedDoc(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_AuthorisedDoc(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "AuthorisedDoc",
      "AuthorisedDoc(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  AuthorisedLab(param0: Address): boolean {
    let result = super.call("AuthorisedLab", "AuthorisedLab(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_AuthorisedLab(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "AuthorisedLab",
      "AuthorisedLab(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  GetAllDoctors(): Array<Address> {
    let result = super.call("GetAllDoctors", "GetAllDoctors():(address[])", []);

    return result[0].toAddressArray();
  }

  try_GetAllDoctors(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "GetAllDoctors",
      "GetAllDoctors():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  GetAllLabs(): Array<Address> {
    let result = super.call("GetAllLabs", "GetAllLabs():(address[])", []);

    return result[0].toAddressArray();
  }

  try_GetAllLabs(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("GetAllLabs", "GetAllLabs():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  GetAuthDetails(
    _address: Address
  ): Docthereum__GetAuthDetailsResultValue0Struct {
    let result = super.call(
      "GetAuthDetails",
      "GetAuthDetails(address):((string,address,string,uint256))",
      [ethereum.Value.fromAddress(_address)]
    );

    return changetype<Docthereum__GetAuthDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_GetAuthDetails(
    _address: Address
  ): ethereum.CallResult<Docthereum__GetAuthDetailsResultValue0Struct> {
    let result = super.tryCall(
      "GetAuthDetails",
      "GetAuthDetails(address):((string,address,string,uint256))",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Docthereum__GetAuthDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  GetDetailedReport(
    _fileHash: string
  ): Docthereum__GetDetailedReportResultValue0Struct {
    let result = super.call(
      "GetDetailedReport",
      "GetDetailedReport(string):((string,string,address,address,uint256,(int256,int256,int256,string,string)))",
      [ethereum.Value.fromString(_fileHash)]
    );

    return changetype<Docthereum__GetDetailedReportResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_GetDetailedReport(
    _fileHash: string
  ): ethereum.CallResult<Docthereum__GetDetailedReportResultValue0Struct> {
    let result = super.tryCall(
      "GetDetailedReport",
      "GetDetailedReport(string):((string,string,address,address,uint256,(int256,int256,int256,string,string)))",
      [ethereum.Value.fromString(_fileHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Docthereum__GetDetailedReportResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getUserReports(_address: Address): Array<string> {
    let result = super.call(
      "getUserReports",
      "getUserReports(address):(string[])",
      [ethereum.Value.fromAddress(_address)]
    );

    return result[0].toStringArray();
  }

  try_getUserReports(_address: Address): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getUserReports",
      "getUserReports(address):(string[])",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  jobId(): Bytes {
    let result = super.call("jobId", "jobId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_jobId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("jobId", "jobId():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  oracle(): Address {
    let result = super.call("oracle", "oracle():(address)", []);

    return result[0].toAddress();
  }

  try_oracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("oracle", "oracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  UserExists(param0: Address): boolean {
    let result = super.call("UserExists", "UserExists(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_UserExists(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("UserExists", "UserExists(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddAuthDocCall extends ethereum.Call {
  get inputs(): AddAuthDocCall__Inputs {
    return new AddAuthDocCall__Inputs(this);
  }

  get outputs(): AddAuthDocCall__Outputs {
    return new AddAuthDocCall__Outputs(this);
  }
}

export class AddAuthDocCall__Inputs {
  _call: AddAuthDocCall;

  constructor(call: AddAuthDocCall) {
    this._call = call;
  }

  get _authAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _authId(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddAuthDocCall__Outputs {
  _call: AddAuthDocCall;

  constructor(call: AddAuthDocCall) {
    this._call = call;
  }
}

export class AddAuthLabCall extends ethereum.Call {
  get inputs(): AddAuthLabCall__Inputs {
    return new AddAuthLabCall__Inputs(this);
  }

  get outputs(): AddAuthLabCall__Outputs {
    return new AddAuthLabCall__Outputs(this);
  }
}

export class AddAuthLabCall__Inputs {
  _call: AddAuthLabCall;

  constructor(call: AddAuthLabCall) {
    this._call = call;
  }

  get _authAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _authId(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddAuthLabCall__Outputs {
  _call: AddAuthLabCall;

  constructor(call: AddAuthLabCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CheckAuthorisationCall extends ethereum.Call {
  get inputs(): CheckAuthorisationCall__Inputs {
    return new CheckAuthorisationCall__Inputs(this);
  }

  get outputs(): CheckAuthorisationCall__Outputs {
    return new CheckAuthorisationCall__Outputs(this);
  }
}

export class CheckAuthorisationCall__Inputs {
  _call: CheckAuthorisationCall;

  constructor(call: CheckAuthorisationCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get id(): string {
    return this._call.inputValues[1].value.toString();
  }

  get applyId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CheckAuthorisationCall__Outputs {
  _call: CheckAuthorisationCall;

  constructor(call: CheckAuthorisationCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class FulfillCall extends ethereum.Call {
  get inputs(): FulfillCall__Inputs {
    return new FulfillCall__Inputs(this);
  }

  get outputs(): FulfillCall__Outputs {
    return new FulfillCall__Outputs(this);
  }
}

export class FulfillCall__Inputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _res(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FulfillCall__Outputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }
}

export class SaveReportCall extends ethereum.Call {
  get inputs(): SaveReportCall__Inputs {
    return new SaveReportCall__Inputs(this);
  }

  get outputs(): SaveReportCall__Outputs {
    return new SaveReportCall__Outputs(this);
  }
}

export class SaveReportCall__Inputs {
  _call: SaveReportCall;

  constructor(call: SaveReportCall) {
    this._call = call;
  }

  get _fileHash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get user_address(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get category(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _generalInfo(): SaveReportCall_generalInfoStruct {
    return changetype<SaveReportCall_generalInfoStruct>(
      this._call.inputValues[3].value.toTuple()
    );
  }
}

export class SaveReportCall__Outputs {
  _call: SaveReportCall;

  constructor(call: SaveReportCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SaveReportCall_generalInfoStruct extends ethereum.Tuple {
  get age(): BigInt {
    return this[0].toBigInt();
  }

  get height(): BigInt {
    return this[1].toBigInt();
  }

  get weight(): BigInt {
    return this[2].toBigInt();
  }

  get bloodGroup(): string {
    return this[3].toString();
  }

  get gender(): string {
    return this[4].toString();
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetJobIdCall extends ethereum.Call {
  get inputs(): SetJobIdCall__Inputs {
    return new SetJobIdCall__Inputs(this);
  }

  get outputs(): SetJobIdCall__Outputs {
    return new SetJobIdCall__Outputs(this);
  }
}

export class SetJobIdCall__Inputs {
  _call: SetJobIdCall;

  constructor(call: SetJobIdCall) {
    this._call = call;
  }

  get _jobId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetJobIdCall__Outputs {
  _call: SetJobIdCall;

  constructor(call: SetJobIdCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}