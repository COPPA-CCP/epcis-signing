
import { eventDocument, signedEventDocument } from './events/document';
import chai, { assert } from "chai";
chai.should();

import { sign } from '../src/index';

// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

const TEST_SEED = 'testseedtestseedtestseedtestseed'

async function getKeyPair() {
    return await Ed25519VerificationKey2020.generate({
        seed: Uint8Array.from(Buffer.from(TEST_SEED))
    });
}

describe("Sign Test", () => {
    it("Should sign the EPCIS Doc/Event", async () => {
        const keyPair = await getKeyPair();
        const signedCredential = await sign('did:key:' + keyPair.publicKeyMultibase, eventDocument, keyPair);
        console.log(signedCredential)
        assert.equal('test', 'test');
    });
});


