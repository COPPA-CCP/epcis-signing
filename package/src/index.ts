import {
    EPCISDocument,
    EPCISEvent,
    VerifiableCredential
} from './types';

export async function signEPCIS(event: EPCISDocument | EPCISEvent): Promise<VerifiableCredential> {
    return {} as VerifiableCredential;
};

export type * from './types';
