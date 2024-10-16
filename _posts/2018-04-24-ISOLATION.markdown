---
excerpt:    "In the previous blog post, I presented a few examples regarding how the
notion of application correctness (which guides the program verification and synthesis approaches) is currently being pushed 
to the application level. Here, I will challenge this trend by presenting what
I believe is the right notion of correctness for such applications."
title:      "Eventual Serializability (2)"
subtitle:   "How distributed applications are meant to behave"
date:       2018-04-24 12:00:00
author:     "Kia Rahmani"
permalink:  /posts/2018/04/isolation/2 
---
##### [This blog post is built on top of the examples presented in the [last post](https://kiarahmani.github.io/posts/2018/04/isolation/2). Here I will present my ideas on a suitable notion of generic and automatically extractable program correctness]


---
### Prologue
In my previous blog post, I presented a few examples regarding how the
notion of application correctness (which guides the program verification and synthesis approaches) is currently being pushed 
to the application level. Here, I will challenge this trend by presenting what
I believe is the right notion of correctness for such applications.

---
### High-level Invariants. Again.
Let's consider a simple canonical example used in the literature. The bank
account application, which maintains a number of bank account objects and offers
the following three operations: 
`deposit` `withdraw` and `getBalance`. The first two operations update the integer
value kept in the account where the last operation simply returns it. 
It is very common to use
this toy example to show how applications should satisfy some high-level invariant in order to be executed correctly:
"*for all accounts, the balance should always be greater than zero*". This is extremely easy to verify under SERIAL
isolation guarantee, following the implementation of the `withdraw` transaction:
``` python
withdraw(id accID, int amount){
  int current_val = get_value(accID)
  if(current_val>amount)
    set_value(accID,current_val-amount)
}
```
It is now a very reasonable question to ask whether the above invariant is preserved 
when the application is executed on weakly consistent or isolated environments
(which is what the two papers presented in the last blog post are trying to
answer).

However, a question that I want to raise now is: Was it really necessary ask
developers to also tell us how a correct bank account should behave before we
could do our analysis? 
Or in other words: 

* Didn't they already give the same correctness meaning to the program when they were adding the guard
`if(current_val>amount)` inside the `withdraw` transaction? 
* Couldn't we simply have
defined the correctness of the program as *some sort of equivalence to a serial
execution* of the same application with no extra effort?
* Isn't it the case that all serial executions
of the application preserve the invariant and all executions that satisfy the
invariant are equal to a serial execution?

--- 
### Dangling Reads
The very first answer that one might give to the above questions is: NO!
the following execution does not match any serial execution but is still acceptable according
to our high-level invariant:

![bank account](https://github.com/Kiarahmani/kiarahmani.github.io/raw/master/_posts/figures/bankaccount.jpg)

Understanding the existence of limited examples such as above, I am now going to define a new,
slightly weaker 
notion of serializability, which cannot be violated by the values returned by
*dangling reads*. I define dangling reads as the ones whose sole purpose is to show the state of the
application to the user and do not affect the following (or concurrently running) operations in any
mean, e.g. two `getBalance` operations above. 

To make it more clear, let's imagine our bank account application had a forth
transaction named `addInterest` which updates user accounts according to
the values returned by an invocation of the `getBalance` operations. In this case, the `getBalance` operation invoked, would not be 
dangling anymore and again the notion of the correct behavior of the application will be reduced to
some sort of equivalence to a *serial execution*. Luckily, dangling invocations of read operations
can be detected by a routine static program analysis which takes the burden off
the user's shoulder.



--- 
### Eventual Serializability
Following the above observations, I define the notion of Eventual
Serializability (ES) for an application under a certain choice of isolation and consistency
guarantees, as the **equivalence of each possible execution of it to some serial
execution after removing all
dangling reads.** 

**Example: TPC-C**<br>
The notion of *acceptable serializability anomalies*  appears very frequently in the literature. 
For example, the following case shows how researchers have already been implicitly only
accepting the notion of eventual serializability as the appropriate
notion of correctness for their frameworks.

[Serializability for Eventual Consistency: Criterion, Analysis, and
Applications](https://dl.acm.org/citation.cfm?id=3009895)
is a POPL'17 paper which presents a novel formal definition of serializability
for applications running on EC stores. Interestingly, toward the end of the
paper, when they have already established how to find serializability anomalies
and they are trying to get rid of them manually, they conclude that the following anomaly
possible in
TPC-C (under EC) is
*harmless* and does not need to be fixed (for the purpose of this post, the blue
edges can be interpreted as relating operations that are not visible 
to each other and the red edges relating visible ones).


![harmless](https://github.com/Kiarahmani/kiarahmani.github.io/raw/master/_posts/figures/harmless.png)

Clearly, the execution shown above is not serializable. However, it is acceptable
under SE, since the anomaly would be removed once the dangling read operations
are removed!


----
### Conclusion
In this blog post (and the previous one) I challenged the approach in which using
high-level application invariants are used as notions of correctness to guide synthesis
or verification procedures targeting modern distributed applications. It seems
to me that a slightly weaker version of generic serializability is an
unavoidable (but complete) notion of correctness for all aplications.





