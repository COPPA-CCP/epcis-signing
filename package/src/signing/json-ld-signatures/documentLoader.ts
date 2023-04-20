// @ts-ignore
import jsonldSignatures from 'jsonld-signatures';
// @ts-ignore
import { defaultDocumentLoader } from '@digitalbazaar/vc';

import { contexts } from './contexts/index.js';


export const documentLoader: Promise<any> = jsonldSignatures.extendContextLoader(async (url: string) => {

    const document = contexts.get(url);

    if (document) {
        return {
            contextUrl: null,
            documentUrl: url,
            document: document,
        };
    }

    return defaultDocumentLoader(url);

});