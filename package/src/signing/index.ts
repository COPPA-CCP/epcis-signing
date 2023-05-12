import { EPCISDocument, EPCISEvent, VerifiableCredential } from "../types";
import { isIRI } from "../utils/index.js";
import { signJSONLD } from "./json-ld-signatures/index.js";
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';


export async function signEPCIS(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020, credentialId?: string): Promise<VerifiableCredential> {

    // make EPCIS specific checks before signing
    if (!subject.id && (!("eventID" in subject) || !subject.eventID)) throw new Error('The EPCIS subject must have an id field in order to be signable');

    // match eventID to subject id for EPCISEvents
    if ("eventID" in subject && subject.eventID) {
        subject.id = subject.eventID;
        // delete eventID property to avoid @id keyword duplication in JSON-LD
        delete subject.eventID;
    }

    if (!isIRI(subject.id)) throw new Error('The EPCIS id field must contain an IRI');

    return signJSONLD(subject, keyPair, credentialId);

}