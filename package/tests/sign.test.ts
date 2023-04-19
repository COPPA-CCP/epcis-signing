
import { epcisDocument } from './events/document';
import { epcisEvent } from './events/event';
import chai, { expect } from 'chai';
import fetch from 'node-fetch';
chai.should();

import { VerifiableCredential, sign } from '../src/index';

// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

const TEST_SEED = 'testseedtestseedtestseedtestseed'

const CREDENTIAL_ID = 'https://coppa.org/registry/vc/12345'

let signedDocument: VerifiableCredential;

let signedEvent: VerifiableCredential;

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

async function verifyCredential(credential: VerifiableCredential): Promise<boolean> {

    const response = await fetch('https://ssi.eecc.de/api/verifier', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([credential])
    });

    const result: any = await response.json();

    return result[0].verified;

}

describe("Signing Test", () => {

    it("Sign EPCIS Document", async () => {

        // get seeded keyPair
        const keyPair = await getKeyPair();

        // sign the test document with the seeded key
        signedDocument = await sign(epcisDocument, keyPair, CREDENTIAL_ID);

        expect(signedDocument).to.have.property('proof')
            .which.has.property('proofValue');
        expect(signedDocument).to.have.property('credentialSubject')
            .which.has.property('type')
            .which.equal('EPCISDocument');

    });

    it("Verify signed EPCIS Document", async () => {

        const result = await verifyCredential(signedDocument);

        expect(result).to.be.true;

    });

    it("Sign EPCIS Event", async () => {

        // get seeded keyPair
        const keyPair = await getKeyPair();

        // sign the test document with the seeded key
        signedEvent = await sign(epcisEvent, keyPair, CREDENTIAL_ID);

        expect(signedEvent).to.have.property('proof')
            .which.has.property('proofValue');
        expect(signedEvent).to.have.property('credentialSubject')
            .which.has.property('type')
            .which.equal('ObjectEvent');

    });

    it("Verify signed EPCIS Event", async () => {

        const result = await verifyCredential(signedEvent);

        expect(result).to.be.true;

    });

    it("Pass non URL credential id", async () => {

        // get seeded keyPair
        const keyPair = await getKeyPair();

        // check for error
        try {
            await sign(epcisEvent, keyPair, '12345');
        } catch (error: any) {
            expect(error).to.be.an('error').with.property('message', 'Credential id must be an URL');
        }

    });

});


