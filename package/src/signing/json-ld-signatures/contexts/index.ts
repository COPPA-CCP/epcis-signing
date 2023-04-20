import { epcisContext } from "./epcis-context.js";
import { ed25519Context } from "./ed25519-2020.js";
import { signerDIDDoc } from "./signerDID.js";

const contexts = new Map();

contexts.set('https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld', epcisContext);
contexts.set('https://w3id.org/security/suites/ed25519-2020/v1', ed25519Context);
contexts.set('did:key:z6Mki6YaX9NZcvQnwnjFw8MNMksHGVf5ZAMkCf1ut2Mm1TxY', signerDIDDoc);

export { contexts };