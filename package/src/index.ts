import { EPCISDocument, EPCISEvent, VerifiableCredential } from "./types";

// @ts-ignore
import { Ed25519VerificationKey2020 } from "@digitalbazaar/ed25519-verification-key-2020";

import { signEPCIS, wrapEPCISInCredential } from "./signing/index.js";

/**
 * Signes a passed EPICS object with the passed key pair and returns the signed verifiable credential which contains the signed EPCIS object.
 *
 * @param {EPCISDocument | EPCISEvent} [subject] - The subject to sign. MUST be an EPCIS event or EPCIS document in JSON-LD format.
 * @param {Ed25519VerificationKey2020} [keyPair] - The Ed255192 key pair to use for singing the credential.
 * @param {string} [credentialId] - The unique id of the resulting credential. MUST be an URL
 * @returns {Promise<VerifiableCredential>} Resolves to a signed verifiable credential containing the subject given as input.
 */
export async function sign(
  subject: EPCISDocument | EPCISEvent,
  keyPair: Ed25519VerificationKey2020,
  credentialId?: string
): Promise<VerifiableCredential> {
  return await signEPCIS(subject, keyPair, credentialId);
}

export function wrapEpcisInCredential(
  issuer: string,
  subject: EPCISDocument | EPCISEvent,
  credentialId?: string
): VerifiableCredential {
  return wrapEPCISInCredential(issuer, subject, credentialId);
}

export function unwrapEpcsFromCredential(
  credential: VerifiableCredential
): EPCISDocument | EPCISEvent {
  let epcisSubject = credential.credentialSubject;
  if (epcisSubject.type !== 'EPCISDocument') {
    let event = epcisSubject as any
    event.eventID = credential.credentialSubject.id;
    delete event.id;
    return event as EPCISEvent;
  }

  return epcisSubject as EPCISDocument;
}

export type * from "./types";
