import { ObjectEvent } from "../../src/index"

export const epcisEvent: ObjectEvent = {
    "@context": [
        "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"
    ],
    "id": "https://id.eecc.de/epcis/event/12345",
    "type": "ObjectEvent",
    "eventTime": "2023-02-07T11:04:03.15Z",
    "eventTimeZoneOffset": "+01:00",
    "epcList": [
        "https://id.eecc.de/01/04012345999990/21/XYZ-1234"
    ],
    "action": "OBSERVE",
    "bizStep": "repairing",
    "disposition": "conformant",
    "readPoint": {
        "id": "https://id.eecc.de/414/4012345000115"
    }
}