---
tags: VC,SSI,EPCIS
---

# Datenströme der Zukunft - Der Wert von signierten Daten

![](https://i.imgur.com/FVgEsvp.png)

## Motivation

In der heutigen Welt dürfte jedem der Wert und die Wichtigkeit von Daten bewusst sein. Sie steuern, fließen, informieren und beschreiben. Daten sind omnipräsent und bilden die Basis unserer modernen Wirtschaft. Dieser Trend wird sich weiter verstärken und die Menge an Daten und die Geschwindigkeit mit der sie sich über den Globus bewegen weiter zunehmen.  
Vor diesem Hintergrund sollte man sich fragen, wie diese Datenökonmie aktuell funktioniert und inwieweit sie in dieser Form zukunftsfähig ist. Aktuell liegen Daten meist in zentralen Datensilos und können mit der entsprechenden Berechtigung von dort abgerufen werden. Dabei muss dem Datensilo als einzige Quelle vertraut werden, was Qualität, Authenzität und Ursprung der Daten angeht. Im Fall einer zentralen Instanz ist das zwar möglich, aber dennoch zu hinterfragen, da der Provider meist nicht der Datenerzeuger ist. Noch schwieriger wird es bei einem föderierten Datenfluss, bei dem Daten von Stakeholder zu Stakeholder weitergegeben werden oder beispielweise mittels eines [Digital Links sogar an einem Produkt hängen](https://id-ideal.de/id-ideal-praesentiert-ebon-und-garantiezertifikate-auf-basis-der-ssi-technologie-im-forum-digital-technologies-des-hhi-in-berlin/). Diese Problematik kommt besonders bei komplexen Supply Chains oder einer Kreislaufwirtschaft zum Tragen.  
Der aktuelle Hype um KI macht die Problematik auf einer anderen Ebene deutlich. Mittels der KI-technologie lassen sich Daten beliebig fälschen und manipulieren, was aktuell den Wert von Text und Bildern gegen Null tendieren lässt. Wenn man nun eine essentielle Struktur auf Daten aufbauen möchte, ist es um so wichtiger, dass man den benutzten Daten vertrauen oder noch besser, sie verifizieren kann.


## Ansatz

Um Daten unabhängig von ihrem Weg und der intermediären Herkunft sicher nutzen zu können, müssen sie von ihrem urspünglichen Erzeuger digital signiert werden. Die Signierung von Daten hat die folgenden Vorteile:

### Unveränderbarkeit

Mit einer digitalen Signatur werden die Daten unveränderbar mit dieser verbunden. Die Signatur wirkt dabei wie ein Siegel auf den Daten, dass zerbricht, sollte der Datenumschlag geöffnet und etwas manipuliert werden. Auf technischer Ebene heißt das, dass bei einer Manipulation der Daten die Verifizierung der Signatur fehlschlägt und deren Fehlerhaftigkeit offensichtlich wird. Somit sind die Daten, einmal signiert, unveränderbar.

### Nachweisbarkeit

Die oben angesprochene digitale Signatur wird mit einem kryptografischen Schlüsselpaar durchgeführt. Dieses Schlüsselpaar kann eindeutig einem Akteur und somit auch die mit diesem Schlüsselpaar signierte Daten einem Akteur zugeordnet werden. Diese Eigenschaft erlaubt es einen eindeutigen Urheber der Daten zu identifizeiren und diesen dann beispielsweise mit einem Soll abzugleichen.

### Verifizierung statt Vertrauen

Anders als bei einem rein vertrauensbasierten Ansatz, kann bei der Verwendung von digitalen Signaturen alles eindeutig verifiziert werden. Zwar wird weiterhin Vertrauen zu den jeweiligen Schlüsseln benötigt, aber diese können beliebig feingranular eingesetzt werden und als Basis einer erweiterten Vertrauensinfrastruktur dienen. So muss man nicht einem Datenprovider vertrauen, sondern beispielsweise direkt einer datenerzeugenden Maschine und der Zertifizierungsstelle, die diese geprüft hat.  
 


## Technische Umsetzung

Da es eine Vielzahl von Möglichkeiten gibt, digitale Signaturen auf Daten anzuwenden und Interoperabilität bei einem solchen Ansatz essentiell ist, haben wir bei der technischen Umsetzung versucht, uns so weit wie möglich an weit verbreitete und zugleich am besten geeignete Standards zu halten. Die Umsetzung basiert im Kern aus den drei folgenden Technologien.

### Self-Sovereign Identity (SSI)

Souveräne, digitale Identitäten, oder SSI auf Englisch, beschreibt in Form des [DID Standards](https://www.w3.org/TR/did-core/) eine dezentrale Schlüsselinfrastruktur, die die Schlüsselpaare mit eindeutigen Identitäten verknüpft. Mithilfe von SSI können die zur Verifikation nötigen Schlüssel aufgelöst und von dem Verifizierer angewendet werden.

### Verifiable Credentials

[Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) sind ein Standarddatenformat, das wie ein kryptografischer Briefumschlag um Daten fungiert. Dieser Standard setzt direkt auf dem SSI Standard auf und ist universell auf beliebige Daten anwendbar. Neben SSI identifiern (DID) erlauben Verifiable Credential auch andere Identifierformate, die als IRI asugedrückt werden können, wie zum Beispiel [GS1 Digital Links](https://www.gs1.org/standards/gs1-digital-link).

### EPCIS

[EPCIS](https://www.gs1-germany.de/gs1-standards/datenaustausch/epcis/) ist ein von der [GS1](https://www.gs1.org/) entwickelter Datenstandard, der Geschäftsdaten abbildet und beliebig erweiterbar ist. Standardmäßig sind aber bereits eine Vielzahl an Geschäftsprozessen beschrieben, wie etwa Produktionsevents oder Transportrevents. Bei der Umsetzung helfen die Synergien zwischen dem EPCIS2.0-Standards und dem Verifiable Credential Standard, da beide auf dem JSON-LD Datenmodell basieren und somit problemlos miteinander verschmelzen.
  
  
![](https://i.imgur.com/IqF3ten.png)



An der [Umsetzung](https://github.com/COPPA-CCP/epcis-signing) wird aktuell vor allem im Rahmen des COPPA Förderprojekts, das sich mit der Kreislaufwirtschaft für Plastikverpackungen beschäftigt, gearbeitet.


## Schlussfolgerung

Die Eigenschaften von signierten Daten gegenüber unsignierten Daten beheben fast vollständig die Probleme aus der Motivation. Die Nutzung von signierten Daten erlaubt es somit die Datenökonomie in Zukunft fortzusetzen und sogar auszubauen. Denn erst mit der Verwendung von signierten Daten, können föderierte Datenflüsse, wie beispielsweise in Supply Chains, sicher und effizient umgesetzt werden. Der Vorteil hierbei ist, dass man Daten, die man beispielsweise in einer Kreislaufwirtschaft von einem Zulieferer über einen frühreren Verarbeitungschritte erhalten hat, nach der Verifizierung ohne einen bürokratischen Extraaufwand sicher verwenden kann und diese garantiert belastbar sind.  
Doch auch abseits davon haben signierten Daten klare Vorteile gegenüber nicht verifizierbaren Daten. So bieten signierte Daten die Möglichkeit der Nachweisbarkeit für neue legislative Vorgaben und zudem die Sicherheit bei kritischen und auch nachzuweisenden Berechnungen, wie beispielsweise für CO2 Zertifikate. 

## Ausblick

Zwar mitigiert die digitale Signierung von Daten bereits viele Probleme, die in der Motivaiton beschrieben wurden, doch fehlt für eine vollständige Nachweisbarkeit eine vertrauensvolle dritter Person, die den Zeitpunkt verifizieren kann. So könnte beispielsweise der originale Ersteller der Daten absichtlich einen falschen Zeitpunkt mit signieren. Dieser wäre dann für einen Verifizierer nicht nachprüfbar, da er sich nur auf die vond em Ersteller signierten Daten verlassen kann. Eine Möglichkeit wäre hier, das Datenpaket bei der Erstellung in einem Distributed Ledger anonym zu notarisieren.


