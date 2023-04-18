import {
    EPCISDocument,
    EPCISEvent,
    VerifiableCredential
} from './types';

// @ts-ignore
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

import { signEPCIS } from './signing/index';

export async function sign(event: EPCISDocument | EPCISEvent, keyPair: Ed25519VerificationKey2020, credentialId?: string): Promise<VerifiableCredential> {

    return await signEPCIS(event, keyPair, credentialId);

};

export type * from './types';
