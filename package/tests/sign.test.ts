
import { epcisDocument } from './events/document';
import { epcisEvent } from './events/event';
import chai, { expect } from "chai";
chai.should();

import { sign } from '../src/index';

// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

const TEST_SEED = 'testseedtestseedtestseedtestseed'

async function getKeyPair(): Promise<Ed25519VerificationKey2020> {

    // generate the keyPair from seed
    let keyPair = await Ed25519VerificationKey2020.generate({
        seed: Uint8Array.from(Buffer.from(TEST_SEED))
    });

    // name the keyPair in order to make it resolvable
    keyPair.id = 'did:key:' + keyPair.publicKeyMultibase + '#' + keyPair.publicKeyMultibase;
    keyPair.controller = 'did:key:' + keyPair.publicKeyMultibase;

    return keyPair;

}

describe("Signing Test", () => {

    it("Sign EPCIS Document", async () => {

        // get seeded keyPair
        const keyPair = await getKeyPair();

        // sign the test document with the seeded key
        const signedDocument = await sign(epcisDocument, keyPair);

        expect(signedDocument).to.have.property('proof')
            .which.has.property('proofValue');
        expect(signedDocument).to.have.property('credentialSubject')
            .which.has.property('type')
            .which.equal('EPCISDocument');

    });

    it("Sign EPCIS Event", async () => {

        // get seeded keyPair
        const keyPair = await getKeyPair();

        // sign the test document with the seeded key
        const signedEvent = await sign(epcisEvent, keyPair);

        expect(signedEvent).to.have.property('proof')
            .which.has.property('proofValue');
        expect(signedEvent).to.have.property('credentialSubject')
            .which.has.property('type')
            .which.equal('ObjectEvent');

    });

});


