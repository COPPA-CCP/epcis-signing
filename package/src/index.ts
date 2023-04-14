import {
    EPCISDocument,
    EPCISEvent,
    VerifiableCredential
} from './types';

import { signEPCIS } from './signing';

export async function sign(issuer: string, event: EPCISDocument | EPCISEvent, keyPair: any): Promise<VerifiableCredential> {

    return await signEPCIS(issuer, event, keyPair);

};

export type * from './types';
