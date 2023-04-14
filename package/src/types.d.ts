// global types declaration


/**
 * EPCIS 2.0 types 
 */

export type EPCISDocument = {
    creationDate: String;
    epcisBody: EPCISBody;
    id: String;
    schemaVersion: String;
    type: String;
}

export type EPCISEvent = {
    action: String;
    bizStep: String;
    disposition: String;
    epcList: String[];
    eventTime: String;
    eventTimeZoneOffset: String;
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
    challenge: string | undefined;
}

export type Verifiable = {
    '@context': (string | any)[];
    type: string[];
    proof: Proof | Proof[];
}

export type CredentialSubject = {
    id: string | URL;
}

export type VerifiableCredential = Verifiable & {
    id: URL;
    issuer: string | any;
    issuanceDate: string;
    credentialSubject: CredentialSubject;
}