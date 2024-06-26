---
layout: archive
title: "Research Projects"
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---
{% include base_path %}

### (1) Sound Detection of Serializability Bugs in Weakly Consistent Database Applications:
In this ongoing project, we present an end-to-end analysis framework 
for efficient/automated detection and replay of concurrent executions of weakly consistent database
applications that diverge from their intended behavior, i.e. manifest a [serializability](https://jepsen.io/consistency/models/serializable) anomaly.

This framework is backed by a static analysis engine which takes a full-fledged java
program and compiles it down to an
intermediate representation that abstracts away unnecessary details (❶). 
The abstract representation is then encoded in [FOL](https://en.wikipedia.org/wiki/First-order_logic), 
allowing us to reduce the problem of constructing a bounded serializability anomaly
in the given program to finding a satisfying assignment to a SAT formula. 
We then explore the space of all solutions to this formula through iterative
communications to Z3 (❷,❸) and construct all desired abstract anomalies.
 
<img src="/images/pipeline.png"
     alt="Markdown Monster icon"
     style="float: center; margin-left: 15px; margin-bottom: 20px" />

In order to provide users with an easy to grasp notion of bugs and more importantly, to account for
low-level specific behaviors of each database system (which can slightly differ from
our abstract model of weakly consistent/isolated executions), we also developed a test administration
tool. 
Given the abstract anomalies, our tool maps them back to concrete schedules
of operations (❹,❺,❻), sets up the initial state of the database and tries to replay each anomaly by
enforcing the specified order between operations (❼) and the possible network partitionings (❽). 







### (2) Enforcement of fine-grained consistency guarantees using effect orchestration:
Non-deterministic behaviors arise in weakly consistent data stores which can potentially
violate application correctness, forcing designers to either implement (very complex) ad-hoc
mechanisms to avoid these anomalies, or choose to run applications using stronger levels of
consistency than necessary. In this project, we introduced a lightweight runtime verification
system that relieves developers from having to make such tradeoffs. We leveraged declarative
axiomatic specifications that reflect the necessary constraints any correct implementation
must satisfy to guide a runtime consistency enforcement. Experimental results show that
the performance of our automatically derived mechanisms is better than both specialized
hand-written protocols and common store-offered consistency guarantees.

### (3) Coq Implementation of Quelea:
In this  project, I formalized and implemented the
operational semantics used in the PLDI'15 paper, [Declarative Programming
over Eventually Consistent Data Stores](https://dl.acm.org/citation.cfm?id=2737981) in the [Coq proof assistant](https://coq.inria.fr/). Even though the mere
goal of the project was to familiarize myself with proof assistants and formal language definition, I was able to point out numerous previously unknown problems in the paper foe which I offered fixes as well. 
The Coq implementation and the fixes were later used as a supplementary material for
the original paper [(source code)](https://github.com/Kiarahmani/Quelea_Coq_Imp).




