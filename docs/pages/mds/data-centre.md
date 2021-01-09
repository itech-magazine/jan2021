Rajesh Patil
Assistant Director (Systems), ADG(S)-1

Active and Passive Reconnaissance for Information Gathering
=====================================

> Hello Friends,
>
> We  started  this  series  with  what goes into designing a modern datacenter and in the last article, you all came  to  know  about  the  Non-Obvious and Potential Attack Vectors. In this article, the focus would be learn about Active and passive Reconnaissance for Information Gathering.


![](https://i.ibb.co/dp2D8cM/image.png)

Introduction
---------------
Reconnaissance is one of the crucial phase through which target organization’s IT assets & vulnerabilities are enumerated which helps further to evaluate the potential attack surface. 
It is a process of collecting information on the target which can be an organization, a data-center or a web application. 

The commonly gathered information are existing domains, sub-domains, accessible IP addresses, directory structure of domains & sub-domains, ports & services running on these ports, technologies being used their versions & vulnerabilities.

Active Reconnaissance
---------------------
In active-reconnaissance, there is a user who directly engages with the target i.e. user tries to connect with the system either manually (using ping, traceroute, netcat commands) or automatically through tools like nmap, port scanner, masscan etc. Active reconnaissance can be more accurate & provides updated information, however, it creates noise (network traffic) & also leaves fingerprint (logs) at the target systems.

Passive Reconnaissance
----------------------
In passive-reconnaissance there is no direct engagement with the target & this methodology depends on third party services, & is also based on previous recon/info gathering results of other researchers or service providers. The advantage of it is that there are no footprints, & it takes less time.

Reconnaissance Tools and Techniques
--------------------------
Few of the useful recon tools & techniques with example (sample target www.example.com) are explained here. These approaches are carried out by attackers & penetration testers to evaluate the security posture of an organization.

Identifying IP Addresses and other details
--------------------------------------
Identifying IP addresses, hosting location & available sub-domains (passive) through [Riskiq]

![](https://i.ibb.co/Yp1pswB/image.png)

As shown in above figure, IP address registered for an organization or against a domain can be fetched.

![](https://i.ibb.co/QmscwcZ/image.png)

Further as shown above, navigating to the subdomains tab, all the existing subdomains will be shown.
Similar to this other commonly used online tools are [Censys], [DnsDumpster], [bgp], [Shodan].

Wayback Machine Search Through Waybackcurls (Passive)
-----------------------
This command line tool fetches archive records from Internet Archieve/Waybackmachine & can be useful to identify existing & historical url paths with parameters (as in below figure)

![](https://i.ibb.co/kxBjM9B/image.png)

URL Path and Content Enumeration through brute force (Active)
----------------------------
Since web applications also have many url paths & directories which are not directly exposed through navigation paths/sitemaps or robots.txt. Such paths & pages on it are often used for sensitive operations and at times are not password protected. With brute force on web applications using wordlists, such paths can be enumerated (as shown in below figure).

![](https://i.ibb.co/fHz7ZYJ/image.png)

Conclusion
---------------
Through this article, it was tried to share few of the common approaches of active & passive reconnaissance. Further approaches will be continued in subsequent articles.






[Riskiq]: https://community.riskiq.com
[Censys]: https://censys.io 
[DnsDumpster]: https://dnsdumpster.com
[bgp]: https://bgp.he.net
[Shodan]: https://www.shodan.io

