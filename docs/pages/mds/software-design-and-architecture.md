Arunav Khare
Assistant Director (Systems), CPC-TDS

Software Architecture or Functionality - What comes first for you ?
========================

![](https://www.crucibledevlabs.com/themes/demo/assets/images/resource/cartoonie-1.png)

The word “software” is a word composed of two words - “soft” and “ware.” The word “ware” means “product” and the word
“soft”… Well, that’s where the value lies. Software was invented to be “soft.” It was intended to be a way to easily change the behavior of machines. If we’d wanted the behavior of machines to be hard to change, we would have called it hardware, wouldn't we ?

To be true to its purpose, the software must be soft — that is, it must be easy to change. When the people at CBDT want to implement a changes in an existing form or the way of processing TDS statements, that change must be easy to make. From the department point of view, they are simply giving a stream of changes which are more of less similar to previous one, but for the developers, it is a stream of puzzle that they must fit into a existing puzzle of ever increasing complexity. There is a reason that the first year of development is much cheaper than the second, and the second year is much cheaper than the third. The reason or the problem is the architecture of the system, the tight coupling (dependency) the various parts of system and lack of cohesion (grouping similar modules together).

The wrong attitude
----------------------------------

There is a reason why much congnizance isn't paid to the architecture of a system in each and every change. It is largely due to the fact that the changes are mainly driven by people who are mostly functional and thus pay more attention to the function than architecture. Also, the Project managers often tend to make sure that atleast a functionality is developed and thus pay no heed to the architecture. This thinking even creeps into the minds of newbie developers due to lack of understanding of the system.

But this is a wrong attitude. What would you prefer ?
- A program that works perfectly but is impossible to change ? Meaning if tomorrow the requirements change you won't be able to make changes.
- Or a program that makes it easy to incorporate changes ? Even it has bugs, it will be easy to fix them as it is easy to make changes.

By referring that something is impossible to change, it is meant that the cost of change exceeds the benefits of change.

> Remember, If the architecture comes last, then the system will become more costly to develop with time, and eventually the change will become practically impossible. 

Conclusion
-------------

There are lot of things that one needs to study in order to acquire knowledge of software architecture and to design the architecture of a system that makes it easy in future to incoporate changes. From the macro level to the micro level (code), there has to be a complete focus on makign things generic and modular. The focus of the entire team including management has to change that anyone can write software. Though anyone can write software, but only a few can write software that is easy to change and the cost of changes do not rise exponentially in future. We will see in next article some of design principles for micro level architecture.




