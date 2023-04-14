import { epcisContext } from "./epcis-context";

const contexts = new Map();

contexts.set('https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld', epcisContext);

export { contexts };