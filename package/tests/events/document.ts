import { EPCISDocument, VerifiableCredential } from "../../src/index"

export const eventDocument: EPCISDocument = {
  "@context": [
    "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"
  ],
  "id": "https://id.eecc.de/epcis/document/12345",
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "creationDate": "2023-02-07T11:05:00.0Z",
  "epcisBody": {
    "eventList": [
      {
        "type": "ObjectEvent",
        "id": 'https://testid.com',
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
    ]
  }
}

// replace with test key signed example
export const signedEventDocument: VerifiableCredential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://ssi.eecc.de/api/registry/context",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ],
  "id": "https://ssi.eecc.de/api/registry/vc/f2c39be7-2bbf-4a97-a3af-b6d5a2a74909",
  "type": [
    "VerifiableCredential"
  ],
  "issuer": {
    "id": "did:web:ssi.eecc.de",
    "image": "https://id.eecc.de/assets/img/logo_big.png",
    "name": "EECC"
  },
  "issuanceDate": "2023-02-13T10:26:07Z",
  "credentialSubject": {
    "@context": [
      "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"
    ],
    "id": "https://id.eecc.de/epcis/document/12345",
    "type": "EPCISDocument",
    "schemaVersion": "2.0",
    "creationDate": "2023-02-07T11:05:00.0Z",
    "epcisBody": {
      "eventList": [
        {
          "type": "ObjectEvent",
          "id": 'https://testid.com',
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
      ]
    }
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2023-02-13T10:26:07Z",
    "verificationMethod": "did:web:ssi.eecc.de#z6MkoHWsmSZnHisAxnVdokYHnXaVqWFZ4H33FnNg13zyymxd",
    "proofPurpose": "assertionMethod",
    "proofValue": "z43q6v4ejP9uAZkX8tjjWeH3W6raHKRH2fXRLuN51YMprpTwE8331EaL5jfRcNQNV9bLxVVEpT8gfMsU2iA2A5bMh"
  }
}