// global types declaration


/**
 * EPCIS 2.0 types 
 */

export type EPCISDocument = {
    '@context'?: string[],
    creationDate: string;
    epcisBody: EPCISBody;
    id: string;
    schemaVersion: string;
    type: string;
}

export type EPCISEvent = {
    '@context'?: string[],
    action: string;
    bizStep: string;
    disposition: string;
    epcList: string[];
    eventTime: string;
    eventTimeZoneOffset: string;
    id: string;
    readPoint: ReadPoint;
    type: string;
}

export type EPCISBody = {
    eventList: EPCISEvent[];
}

export type ReadPoint = {
    id: string;
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