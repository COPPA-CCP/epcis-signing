// global types declaration


/**
 * EPCIS 2.0 types
 * 
 * The type defintion differs from the EPCIS JSON-Schema https://gs1.github.io/EPCIS/JSON-Schema/EPCIS-Event-JSON-Schema.json as the 
 * id and @context property is mandatory for the LD-Signature
 */

export type EPCISDocument = {

    // required props
    '@context': [string],
    creationDate: string;
    epcisBody: EPCISBody;
    id: string;
    schemaVersion: string;
    type: "EPCISDocument";

    // optional props
    epcisHeader?: string;
    instanceIdentifier?: string;
    receiver?: string;
    sender?: string;
}

export type EPCISBody = {
    // required props
    eventList: [EPCISEvent];
}

export type EPCISEvent = {

    // required props
    eventTime: string;
    eventTimeZoneOffset: string;
    //eventID: string;
    // should match eventID
    id: string;
    type: string;

    // optional props
    '@context'?: [string];
    action?: string;
    bizStep?: string;
    bizLocation?: BizLocation;
    bizTransactionList?: [BizTransaction];
    childEPCs?: [string | URL];
    childQuantityList?: [QuantityElement];
    destinationList?: [Destination];
    disposition?: string;
    certificationInfo?: any;
    epcList?: [string];
    errorDeclaration?: any;
    parentID?: string | URL;
    quantityList?: [QuantityElement];
    readPoint?: ReadPoint;
    sensorElementList?: [SensorElement];
    sourceList?: [Source];


    // allow any field for now
    [key: string]: any;
}

/**
 * Event type definition with required props
 */
export type AggregationEvent = EPCISEvent & {
    action: string;
    type: "AggregationEvent";
}

export type AssociationEvent = EPCISEvent & {
    action: string;
    parentID: string;
    type: "AssociationEvent";
}

export type TransactionEvent = EPCISEvent & {
    action: string;
    bizTransactionList: [BizTransaction];
    type: "TransactionEvent";
}

export type TransformationEvent = EPCISEvent & {
    type: "TransformationEvent";
}

export type ObjectEvent = EPCISEvent & {
    action: string;
    type: "ObjectEvent";
}


/**
 * Base EPCIS types
 */
export type BizLocation = {
    id: string | URL;
}

export type BizTransaction = {
    bizTransaction: string | URL;
    type?: string;
}

export type Destination = {
    destination: string | URL;
    type: string;
}

export type QuantityElement = {
    epcClass: string | URL;
    quantity?: number;
    uom?: string;
}

export type ReadPoint = {
    id: string;
}

export type Source = {
    source: string | URL;
    type: string;
}

export type SensorElement = {
    sensorReport: any;
    sensorMetadata?: any;
}

/**
 * Verifiable credential types
 */

export type Proof = {
    type: string;
    challenge?: string;
    created: Date | string;
    domain?: string;
    proofPurpose: string;
    proofValue: string;
    verificationMethod: string;
}

export type Verifiable = {
    '@context': [string | any];
    type: [string];
    proof?: Proof | [Proof];
}


export type VerifiableCredential = Verifiable & {
    id: string | URL;
    issuer: string | any;
    issuanceDate: string;
    credentialSubject: EPCISDocument | EPCISEvent;
}
