import { EPCISDocument, EPCISEvent, VerifiableCredential } from "../types";
import { isIRI } from "../utils/index.js";
import { signJSONLD, createEPCISCredential } from "./json-ld-signatures/index.js";
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

function prepareECPIS(subject: EPCISDocument | EPCISEvent):  EPCISDocument | EPCISEvent {
    // make EPCIS specific checks before signing
    if (!subject.id && (!("eventID" in subject) || !subject.eventID)) throw new Error('The EPCIS subject must have an id field in order to be signable');

    // match eventID to subject id for EPCISEvents
    if ("eventID" in subject && subject.eventID) {
        subject.id = subject.eventID;
        // delete eventID property to avoid @id keyword duplication in JSON-LD
        delete subject.eventID;
    }

    return subject;
}


export async function signEPCIS(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020, credentialId?: string): Promise<VerifiableCredential> {
    
    return signJSONLD(prepareECPIS(subject), keyPair, credentialId);

}

export function wrapEPCISInCredential(issuer: string, subject: EPCISDocument | EPCISEvent, credentialId?: string): VerifiableCredential {
    return createEPCISCredential(issuer, prepareECPIS(subject), credentialId);
}