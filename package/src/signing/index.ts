import { EPCISDocument, EPCISEvent, VerifiableCredential } from "../types";
import { isIRI } from "../utils/index";
import { signJSONLD } from "./json-ld-signatures/index";
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';


export async function signEPCIS(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020, credentialId?: string): Promise<VerifiableCredential> {

    // make EPCIS specific checks before signing
    if (!subject.id) throw new Error('The EPCIS subject must have an id in order to be signable');

    if (!isIRI(subject.id)) throw new Error('The EPCIS id must a an IRI');

    return signJSONLD(subject, keyPair, credentialId);

}