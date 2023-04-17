// global types declaration


/**
 * EPCIS 2.0 types 
 */

export type EPCISDocument = {
    '@context'?: String[],
    creationDate: String;
    epcisBody: EPCISBody;
    id: string | URL;
    schemaVersion: String;
    type: String;
}

export type EPCISEvent = {
    '@context'?: String[],
    action: String;
    bizStep: String;
    disposition: String;
    epcList: String[];
    eventTime: String;
    eventTimeZoneOffset: String;
    id: string | URL;
    readPoint: ReadPoint;
    type: String;
}

export type EPCISBody = {
    eventList: EPCISEvent[];
}

export type ReadPoint = {
    id: String;
}


/**
 * Verifiable credential types
 */

export type Proof = {
    type: string;
    challenge?: string | undefined;
    created: Date | string;
    verificationMethod: string;
    proofPurpose: string;
    proofValue: string;
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