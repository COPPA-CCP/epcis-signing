// global types declaration


/**
 * EPCIS 2.0 types
 * 
 * The type defintion differs from the EPCIS JSON-Schema https://gs1.github.io/EPCIS/JSON-Schema/EPCIS-Event-JSON-Schema.json as the 
 * id and @context property is mandatory for the LD-Signature
 */

export type EPCISDocument = {

    // required props
    '@context': string[],
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
    eventList: EPCISEvent[];
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
    '@context'?: string[];
    action?: string;
    bizStep?: string;
    bizLocation?: BizLocation;
    disposition?: string;
    certificationInfo?: any;
    epcList?: string[];
    errorDeclaration?: any;
    quantityList?: QuantityElement[];
    readPoint: ReadPoint;
}

/**
 * Event type definition with required props
 */
export type AggregationEvent = EPCISEvent & {
    type: "AggregationEvent";
}

export type ObjectEvent = EPCISEvent & {
    action: string;
    type: "ObjectEvent";
}


/**
 * Base types
 */
export type BizLocation = {
    id: string | URL;
}

export type QuantityElement = {
    epcClass: string | URL;
    quantity?: number;
    uom?: string;
}



export type ReadPoint = {
    id: string;
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
    '@context': (string | any)[];
    type: string[];
    proof?: Proof | Proof[];
}


export type VerifiableCredential = Verifiable & {
    id: string | URL;
    issuer: string | any;
    issuanceDate: string;
    credentialSubject: EPCISDocument | EPCISEvent;
}