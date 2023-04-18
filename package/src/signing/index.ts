import { EPCISDocument, EPCISEvent } from "../types";
import { signJSONLD } from "./json-ld-signatures/index";
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

export async function signEPCIS(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020) {

    return signJSONLD(subject, keyPair);

}