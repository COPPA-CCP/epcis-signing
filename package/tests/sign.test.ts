
import { eventDocument, signedEventDocument } from './events/document';

import { sign } from '../src/index';

// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

async function getKeyPair() {
    return await Ed25519VerificationKey2020.generate({
        seed: 'testseed'
    });
}



test('signDocument', async () => {
    const keyPair = await getKeyPair();
    const signedDocument = sign('issuer', eventDocument, keyPair);
    expect(signedDocument).toBe(signedEventDocument);
});


