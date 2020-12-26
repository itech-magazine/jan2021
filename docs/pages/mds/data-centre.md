Rajesh Patil
Assistant Director(S), ADG(S)-1, **Securing the Data Center**

Active & Passive Reconnaissance for Information Gathering
================

Introduction
------------
Reconnaissance is one of the crucial phase through which target organization’s IT assets & vulnerabilities are enumerated which helps further to evaluate potential attack surface. 
It is a process of collecting information of the target which can be an organization, a data-center or a web application. 
The commonly gathered information is existing domains, sub-domains, accessible IP addresses, directory structure of domains & sub-domains, ports & services running on these ports, technologies being used their versions & vulnerabilities.

Active Reconnaissance
---------------------
In active reconnaissance, there is a user directly engages with the target i.e. user tries to connect with the system either manually (using ping, traceroute, netcat commands) or automatically through tools like nmap, port scanner, masscan etc. Active reconnaissance can be more accurate & provides updated information, however it creates noise (network traffic) & also leaves fingerprint (logs) at the target systems.

Passive Reconnaissance
---------------------
In passive recon there is no direct engagement with the target & this methodology depends on third party services & is also based on previous recon/info gathering results of other researchers or service providers. The advantage of it is that there are no footprints & it takes less time.

Reconnaissance Tools & Techniques
--------------------------------
Few of the useful recon tools & techniques with example (sample target www.example.com) are explained here. These approaches are carried out by attackers & penetration testers to evaluate the security posture of organization.

> Identifying Ip Addresses And Other Details

Identifying IP addresses, hosting location & available sub-domains (passive) through https://community.riskiq.com
As shown in Fig-1, IP address registered for an organization or against a domain can be fetched.
Further navigating to the subdomains tab, all the existing subdomains will be shown.
![Fig-1 – Identification of IP addresses assets](https://i.ibb.co/bXdmKyP/data-center-fig1.jpg)


Similar to this other commonly used online tools are 
https://censys.io 
https://dnsdumpster.com 
https://bgp.he.net & 
https://www.shodan.io
