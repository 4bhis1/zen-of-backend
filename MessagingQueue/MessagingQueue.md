It's like post office, which hold the information from a provider and sends it to the consumers.

    - Producer (Sends the message)
    - Consumer (Listents the message and process it)

Decoupling, producer can send the message without thinking if ocnsumer has handled it or not.

## Why it matters
    0. Various services can crash, used so services can scale indipendently
    1. Retires (if consumer is crashed MQ will retry in several time)
    2. Hanles spikes in traffic very smoothly (as they are made for this.)

## `BullMq` messaging queue for node Js
 It hanldes the asnycrounous and background and queue process in NodeJs. Must know.


# Event - Driven architecture

Its an architecure where on change of something an communition is triggered in lossely coupled systems.

### Components
- Producer (creating and event)
- Event (data)
- Event Broker (medium which transports the event)
- Event Consumer (Reacts to events)

# Kafka

It's an distributed event streaming platform developed by linked and futhur  open-sourced and now is been handle by apache.

[Chatgpt Thread](https://chatgpt.com/share/680cac08-349c-8011-9e91-bb8f63927def)

### Concepts

|Concept |Detail |
|--------|-----|
Producer | sends message to the topic
consumer | receives message from the toic
topic | Seperate queues, which hanle similar kind of events
partition | distribution in topic to handle the streaming parallely
broker | server that store and serves the message
offset | unique Id in each message in partition

### Insights

#### 1. Topics and Partioning
---
* Topics are split into partitions for handling the task and can scale horizontally as per the demand.
* Uses consistent hashing for loadbalancing over partitions. Zoo keeper is used for the same.

* `High availability`, every partition follows master-slave chronology. In each partition one broker acting as leader and else replicate it as followers


#### 2. Message Retention
---
* Kafka store the event and metadata even after the consumer consumes it (can set TTL)
* In case of consumer failure, we can use re-try mechanism to send the missed of-set to consumer.


### FAQS
---
    1. How will you handle consumer lags ?
        Consumer lag is a situation when consumer is not able to sync the events producer is emitting.
        * Sale consumer horizontally.
        * Use resume/pause method supported by kafka it-self
        * Increase consumer fetch size.
        * Tune broker config(broker themselves make lag to send the message)
        * Look into consumer processing service.

    2. Producers are timing out, what are the steps you can take?
        * Scale procuder horizontally or vertically considering bottelnecks.
        * Check the handling ar producer side when triggering the event to kafka.
        * Tune broker    

    3. Scailing Kafka for millions
        * Create Kafka shards, introduce routing layer(loadbalancer)
        * re-grpup events into more smaller chunks
        * increase Topics,
        * increase replicas
        * use leader-follower technique 
        * Use compression on payload reduces network latency by using Gzip and more