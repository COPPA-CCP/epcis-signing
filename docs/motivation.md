---
tags: VC,SSI,EPCIS
---

# Future data streams - The value of signed data in an interconnected economy

![](https://ipfs.ssi.eecc.de/ipfs/QmbsDfYqNiBreR5qLid7TabAxbTyRqCe4W5dsxndkxpkHB)

## Motivation

In today's world, everyone should be aware of the value and importance of data. It controls, flows, informs and describes. Data is omnipresent and forms the basis of our modern economy. This trend will continue to grow and the amount of data and the speed at which it moves across the globe will continue to increase.  

Against this background, we should ask ourselves how this data economy currently functions and to what extent it is sustainable in this form. Currently, data is mostly stored in central data silos and can be accessed with the appropriate authorization. The data silo must be trusted as the only source with regard to the quality, authenticity and origin of the data. In the case of a central instance, this is possible, but still questionable, since the provider is usually not the data creator. It is even more difficult in the case of a federated data flow, where data is passed on from stakeholder to stakeholder or even attached to a product by means of a [digital link](https://www.gs1.org/standards/gs1-digital-link), for example. This problem comes into play especially in complex supply chains or circular economies.  

The current hype around AI highlights the problem on another level. By means of AI technology, data can be falsified and manipulated at will, which currently makes the value of text and images tend towards zero. If you want to build an essential structure on data, it is even more important to trust the data used or, even better, to verify it.


## Approach

In order to use data securely regardless of its path and intermediary origin, it must be digitally signed by its original creator. The signing data has the following advantages over its unsigned version:

### Immutability

With a digital signature, the data is unalterably linked to it. The signature acts like a seal on the data that breaks if the data inside the envelope is manipulated. On a technical level, this means that if the data is tampered with, the verification of the signature fails and its incorrectness becomes obvious. Thus, once signed, the data in the cryptographic envelope is unchangeable.

### Verifiability

The digital signature mentioned above is executed with a cryptographic key pair. This key pair can be uniquely assigned to an actor and thus the data signed with this key pair can also be assigned to an actor. This property makes it possible to identify a unique originator of the data and then to match this originator with a target, for example. Further, the immutability allows to verify the original state of the data as when they were signed.

### Prove instead of trust

Unlike a purely trust-based approach, everything can be unambiguously verified when using digital signatures. Although trust is still required for the respective keys, these can be used in any fine-grained manner and serve as the basis for an extended trust infrastructure. Thus, it is not necessary to trust a data provider, but rather, for example, directly a data-generating machine and the certification authority that verified it.
 


## Technical implementation

Since there are a variety of ways to apply digital signatures to data and interoperability is essential in such an approach, we have tried to stick to widely used and at the same time most suitable standards as far as possible in the technical implementation. The core of the implementation is based on the following three technologies.

### Self-Sovereign Identity (SSI)

Sovereign digital identities, or SSI in English, describes in the form of the [DID standard](https://www.w3.org/TR/did-core/) a decentralized key infrastructure that links key pairs with unique identities. With the help of SSI, the keys required for verification can be resolved and applied by the verifier.

### Verifiable Credentials

[Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) are a standard data format that acts like a cryptographic envelope around data. This standard builds directly on the SSI standard and is universally applicable to any data. In addition to SSI identifiers (DID), Verifiable Credentials also allow other identifier formats to be expressed as IRI, such as [GS1 Digital Links](https://www.gs1.org/standards/gs1-digital-link).

### EPCIS

[EPCIS](https://ref.gs1.org/standards/epcis/) is a data standard developed by [GS1](https://www.gs1.org/) that maps business data and can be extended as required. However, a large number of business processes are already described by default, such as production events or transport events. The synergies between the EPCIS2.0 standards and the Verifiable Credential Standard help with implementation, since both are based on the JSON-LD data model and thus merge with each other without any problems.
  
  
![](https://ipfs.ssi.eecc.de/ipfs/QmeHyr3f33X1B9xafcj5SAc4N7wVSH6bsj3rCSjuYZBHPT?filename=epcis-signing.png)



The [implementation](https://github.com/COPPA-CCP/epcis-signing) with ECPIS is currently being worked on primarily within the framework of the COPPA german governmental funding project, which deals with the circular economy for plastic packaging. Furthermore, GS1 Germany GmbH and the [EECC](https://id.eecc.de) are also working on other implementations in the IDunion and ID-Ideal funding projects, such as an [open-source verifier for verifiable credentials](https://github.com/european-epc-competence-center/vc-verifier).


## Conclusion

The properties of signed data compared to unsigned data almost completely eliminate the problems from the motivation. The use of signed data thus allows the data economy to be continued and even expanded in the future. Only with the use of signed data can federated data flows, such as in supply chains, be implemented securely and efficiently. The advantage here is that data received from a supplier via a previous processing step in a circular economy, for example, can be used securely after verification without any extra bureaucratic effort and is guaranteed to be resilient.  

But even apart from this, signed data has clear advantages over data that cannot be verified. For example, signed data offers the possibility of verifiability for new legislative requirements and also security for critical and also verifiable calculations, such as for CO2 certificates.

## Outlook

Although the digital signing of data already remedies a large part of the problems from the motivation, a trusted third party who can verify the point in time is missing for complete verifiability. For example, the original creator of the data could intentionally co-sign an incorrect time. This would then be unverifiable by a verifier, who can only rely on the data signed by the creator. One possibility here would be to anonymously notarize the data packet when it is created in a distributed ledger in order to be able to guarantee a latest creation time.

In the future application of the technology, one can refer to results from the aforementioned funded projects. A follow-up for interested parties would be, for example, [the digital product passport (DDP) based on Verifiable Credentials](https://id.eecc.de/01/04012345999990/10/20210401-A/21/XYZ-1234), which contains both master data and dynamic lifecycle data on an EPCIS basis, and the associated white paper from the ID-Union funding project.


