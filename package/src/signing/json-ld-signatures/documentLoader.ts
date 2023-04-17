// @ts-ignore
import jsonldSignatures from 'jsonld-signatures';

import { contexts } from './contexts/index';


export const documentLoader: Promise<any> = jsonldSignatures.extendContextLoader(async (url: string) => {

    const document = contexts.get(url);

    if (!document) throw new Error(`Document loader unable to load URL "${url}".`);

    return {
        contextUrl: null,
        documentUrl: url,
        document: document,
    };

});