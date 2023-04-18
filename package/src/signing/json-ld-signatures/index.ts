// @ts-ignore
import { issue } from '@digitalbazaar/vc';
// @ts-ignore
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

import { documentLoader } from './documentLoader';

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

function createEPCISCredential(issuer: string, subject: EPCISDocument | EPCISEvent, credentialId: string | URL): VerifiableCredential {

    return {
        '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld'
        ],
        type: ['VerifiableCredential'],
        id: credentialId,
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

export async function signJSONLD(subject: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020): Promise<VerifiableCredential> {

    const credential = createEPCISCredential(keyPair.controller, subject, 'https://test.com/vc/1');

    const suite = getSuite(keyPair);

    const signedCredential = await issue({ credential, suite, documentLoader });

    return signedCredential;

}