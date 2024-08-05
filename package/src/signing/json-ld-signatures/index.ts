// @ts-ignore
import { issue } from '@digitalbazaar/vc';
// @ts-ignore
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

import { documentLoader } from './documentLoader.js';

import { isURL } from '../../utils/index.js';

import {
    EPCISDocument,
    EPCISEvent,
    VerifiableCredential
} from '../../types';


/**
* Generates a date in W3C datetime format (eg: 2011-03-09T21:55:41Z).
*
* @return the current date in W3C datetime format.
*/
export function w3cDate(): string {
    const dateStr = new Date().toISOString();
    return dateStr.substr(0, dateStr.length - 5) + 'Z';
};

export function createEPCISCredential(issuer: string, subject: EPCISDocument | EPCISEvent, credentialId?: string): VerifiableCredential {

    if (credentialId && !isURL(credentialId)) throw new Error('Credential id must be an URL');

    return {
        '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://raw.githubusercontent.com/COPPA-CCP/epcis-signing/main/package/src/signing/json-ld-signatures/contexts/epcis-credential-context.json'
        ],
        type: ['VerifiableCredential', subject.type == 'EPCISDocument' ? 'EPCISDocumentCredential' : 'EPCISEventCredential'],
        ...(credentialId && { id: credentialId }),
        issuer: issuer,
        issuanceDate: w3cDate(),
        credentialSubject: subject
    }

}

function getSuite(keyPair: any) {

    return new Ed25519Signature2020({
        key: keyPair
    });

}

export async function signJSONLD(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020, credentialId?: string): Promise<VerifiableCredential> {

    // make LD specific checks


    const credential = createEPCISCredential(keyPair.controller, subject, credentialId);

    const suite = getSuite(keyPair);

    const signedCredential = await issue({ credential, suite, documentLoader });

    return signedCredential;

}