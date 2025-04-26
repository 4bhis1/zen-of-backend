It's like post office, which hold the information from a provider and sends it to the consumers.

    - Producer (Sends the message)
    - Consumer (Listents the message and process it)

Decoupling, producer can send the message without thinking if ocnsumer has handled it or not.

## Why it matters
    0. Various services can crash, used so services can scale indipendently
    1. Retires (if consumer is crashed MQ will retry in several time)
    2. Hanles spikes in traffic very smoothly (as they are made for this.)

## `BullMq` messaging quque for node Js
 It hanldes the asnycrounous and background and quque process in NodeJs. Must know.


# Event - Driven architecture

Its an architecure where on change of something an communition is triggered in lossely coupled systems.

### Components
- Producer (creating and event)
- Event (data)
- Event Broker (medium which transports the event)
- Event Consumer (Reacts to events)

