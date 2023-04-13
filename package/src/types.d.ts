// global types declaration


/**
 * EPCIS 2.0 types 
 */

type EPCISDocument = {
    creationDate: String;
    epcisBody: EPCISBody;
    id: String;
    schemaVersion: String;
    type: String;
}

type EPCISEvent = {
    action: String;
    bizStep: String;
    disposition: String;
    epcList: String[];
    eventTime: String;
    eventTimeZoneOffset: String;
    readPoint: ReadPoint;
    type: String;
}

type EPCISBody = {
    eventList: EPCISEvent[];
}

type ReadPoint = {
    id: String;
}


/**
 * Verifiable credential types
 */

type Proof = {
    type: string;
    challenge: string | undefined;
}

type Verifiable = {
    '@context': (string | any)[];
    type: string[];
    proof: Proof | Proof[];
}

type CredentialSubject = {
    id: string | URL;
}

type VerifiableCredential = Verifiable & {
    id: URL;
    issuer: string | any;
    issuanceDate: string;
    credentialSubject: CredentialSubject;
}