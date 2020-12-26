Kamal Singh Rana
Assistant Director(Systems), Project Insight

Best Practices in RESTful API Development
========================
![](https://cdn.tiempodev.com/wp-content/uploads/2020/07/28055436/api-design-best-practices-01.jpg)


Introduction
-------------
RESTful API development definitely revolutionized the software design and development. But with great power comes greater responsibility. Since, REST architectural style is not a Standard in itself, instead it just provides the guiding principles in design of efficient APIs, which somehow leaves a scope of carelessness in development. REST architectural style have 6 guiding constraints which are Client-Server, Stateless, Cacheable, Uniform Interface, Layered System and Code on Demand (Optional). Apart from these constraints, everything is open for developer to implement.

Basic features of a well-designed API
-------------
When we say an API is well designed, what do we mean by it? We must have some basic criteria to identify a well-designed API. So, in simpler terms a well-designed API should be quite easy to read and developer should feel at home to understand it, work with it and memorize it. It should be hard to misuse, with proper response code. It should also be complete and concise

Best practices in API design
-------------
Concepts explained earlier regarding basic features of a well-designed API can be broadly explained by means of certain best practices which should be taken care while designing APIs

>Best Practice-1 : Consider using JSON

REST can use different formats for output such as plain text, JSON, CSV, XML, RSS etc. However, using JSON provides some advantage such as easily readable, quite popular in public facing APIs, and easily understandable.

>Best Practice-2 : Descirbe API URLs with Nouns rather than verb

First thing first, the base URL of an API should be simple, elegant should provide information what it is meant for. Resources are the core of API and we work with resources or collections (group of resources) i.e. PAN is an resource. When we name a resource in API, nouns should be used instead of verb such as /pan/LIMCA2339l should give info about PAN number LIMCA2339l and when we are talking about collection such as /pans should provide a list of PANs. We should avoid /getPan etc. Collections should be plural nouns

>Best Practice-3 : Use meaningful response codes

Response codes are the ones which provide proper closure to an API call. Providing meaningful response code step ups the experience of API operation. Every successful request should accompany 2XX status code, every client error with 3XX and server error with 5XX HTTP Status Code

>Best Practice-4 : Use Rate Limiting and Throttling

In order to avoid DDOS, DOS attacks, each consumer of APN should be rate limited and should detect if too many requests are coming from a single consumer in a short duration.


>Best Practice-5: API Versioning

With continuous development, and so many changes in API, a well designed API should provide API versioning and should be able to handle requests pointed to a specific version and provide response accordingly. Version should preferably be included in base URL. 



>Best Practice-6: API Documentation

Documenting an API is one of the important aspects in API design. A well-documented API provides a good experience to the new developers as well as act as repository. There are several tools which can be used for generating API documentation.



Conclusion
---------
Best practices explained above are not exhaustive in nature but these practices provide some understanding about how to designed a well-defined API. The quality and efficiency of an API depends upon the developers and if they follow the guiding principles, a well-designed API can be developed.







