Aditya Dev
Assistant Director(Systems), Project Insight  

> *Hello Friends*  
> *In the previous article we saw about the technical classification of Cyber Attacks. This is the next article in the series which focuses on Firewalls and their various types.*
> *Firewalls are expected to be part of the security of every computer system and network.*
> *In its basic functionality, a firewall monitors the incoming and/or outgoing traffic and based on a predefined set of security rules, it accepts, rejects or drops that* 
> *specific traffic.*

Introduction to Firewalls
=========================
What is a Firewall ?
------------------
A firewall is a security device that monitors network traffic acting as a fence between internal network and the outside world or the Internet by filtering incoming and outgoing traffic based on a set of established rules. Firewalls filter packets based on parameters as packet size, source IP address, protocol, destination port etc. to block malicious traffic requests and data packets while allowing legitimate traffic through. Setting up a firewall is the simplest way of adding a security layer between a system and malicious attacks.

![](https://i.ibb.co/v1SQwFj/image.png "Source: https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2018/07/Basic-Firewall-Network-Example-1.png")

How does a Firewall work ?
------------------------
Data to be transmitted is broken up into manageable data packets. Each data packet consists of a header (control information about the sender and the receiver) and payload (the actual data). Before the packet can enter the internal network through the defined port, it must pass through the firewall. This transfer depends on the information it carries and how it corresponds to the predefined rules. For example, firewall can have a rule that excludes traffic coming from a specified IP address. If it receives data packets with that IP address in the header, the firewall denies access. Similarly, a firewall can deny access to anyone except the defined trusted sources.

Types of Firewall
------------------
> According to the structure and method of delivery, there are three types of firewalls:

**Software Firewalls** are installed on a local device/host rather than a separate piece of hardware (or a cloud server). Not every device on a network may be compatible with a single software firewall, which may mean to use several different software firewalls to cover every asset. Hence, maintaining individual software firewalls on different devices can be difficult and time-consuming. It has to utilize resources (some of the system’s RAM and CPU) to work.  
The benefit is that it is highly useful for creating defense in depth by isolating individual network endpoints from one another. They can distinguish between programs while filtering incoming and outgoing traffic and can deny access to one program while allowing access to another.  

**Hardware Firewalls** are security devices that represent a separate piece of hardware placed between an internal and external network (the Internet). They intercept data packets and traffic requests before they are connected to the network's servers. They are used at perimeter security by making sure malicious traffic from outside the network is intercepted before the network endpoints are exposed to risk.  
A hardware firewall has its own resources and doesn’t consume any CPU or RAM from the host devices. Medium and large organizations utilize hardware firewalls as it is more practical than installing individual software on each device.  
The major weakness is that it is often easy for insider attacks to bypass them.  

**A Cloud Firewall or Firewall-as-a-Service (FaaS)** is a cloud solution for network protection. Like other cloud solutions, it is maintained and run on the Internet by third-party vendors.  
Cloud firewalls are often used as proxy servers. They are independent of physical resources, which allows scaling the firewall capacity according to the traffic load.

> According to the mode of operation, there are five types of firewalls:

**Packet-filtering firewall** inspects the data packets for information such as the destination and source IP address, packet type, port number and other surface-level information without opening up the packet to inspect its contents. Depending on the access control list (rules defining wanted /unwanted traffic), the packets are passed on or dropped.  
Such firewall is a fast solution that doesn’t require a lot of resources. Although it inspects header information, it doesn’t check the data (payload) itself. Since malware can also be found in this section, this firewall is not strongly secure. It also does not track packets, so it has no information about the preceding packets. Therefore, if thousands of packets came from same IP address in a short period of time (DoS attack), a host would not notice that this pattern is unusual. Such firewalls are quite susceptible to either a ping flood or SYN flood. They also do not offer any user authentication and are relatively easy to bypass.  

The **Stateful Packet Inspection (SPI) firewall** is an improvement on basic packet filtering. It denies or permits access not only on the basis of examination of the current packet, but also on data derived from previous packets in the conversation. It keeps track of the state of a connection by monitoring the TCP 3-way handshake and entire connection-from start to end.  
The firewall is aware of the context in which a specific packet was sent which makes these firewalls far less susceptible to ping floods and SYN floods and spoofing. As they inspect actual data transmitted across multiple packets instead of just the headers, they also require more system resource.  

An **application gateway or proxy firewall** operates at the application layer to filter incoming traffic. Rather than looking at the protocol and port the packet is using, an application gateway examines the client application and the server-side application to which it is trying to connect. It then determines if that particular client application’s traffic is permitted through the firewall. Application gateways enable the administrator to allow access only to certain specified types of applications, such as web browsers or FTP clients.  
When a client program (such as a web browser) establishes a connection to a destination service (such as a web server), it connects to an application gateway, or proxy. The client then negotiates with the proxy server and proxy establishes the connection with the destination behind the firewall and acts on behalf of the client, hiding and protecting individual computers on the network behind the firewall. Once a connection is established, the application gateway makes all decisions about which packets to forward.  
This sort of firewall allows for individual user authentication, which makes them quite effective at blocking unwanted traffic. These firewalls use a lot of system resources as the authentication process uses more memory and CPU time than simple packet filtering.
Application gateways are susceptible to various flooding attacks (SYN flood, ping flood, etc.)  

**Circuit-level gateways** work at the session layer of the OSI model, observing TCP (Transmission Control Protocol) connections and sessions. Their primary function is to ensure that the established connections are safe.  
With circuit level gateways, user is authenticated and granted access before the connection to the router is established. This means that each individual, either by username or IP address, must be verified before any further communication can take place.  
Once this verification takes place and the connection between the source and destination is established, the firewall simply passes bytes between the systems. A virtual “circuit” exists between the internal client and the proxy server. Internet requests go through this circuit to the proxy server, and the proxy server delivers those requests to the Internet after changing the IP address. External users only see the IP address of the proxy server. Responses received by the proxy server are sent back through the circuit to the client. It is this virtual circuit that makes the circuit level gateway secure.  
While extremely resource-efficient, these firewalls do not check the packet itself. So, if a packet held malware, but had the right TCP handshake, it would pass right through. This is why circuit-level gateways are not self-sufficient enough for protection.  

The **Next-Generation Firewall (NGFW)** is a security device that combines a number of functions of other firewalls. Unlike traditional firewalls, the next-gen firewall inspects the entire transaction of data, including the TCP handshakes, surface-level, deep packet inspection and may also host intrusion prevention systems (IPSs) that work to automatically stop attacks against the network. Using NGFW is adequate protection from malware attacks, external threats, and intrusion.

Conclusion
---------
One protection layer, no matter how robust, will never be enough to protect the network. For better protection, networks should have multiple layers of firewalls, e.g. a hardware or cloud firewall at the perimeter of network and individual software firewalls on each of the network assets.  
Having additional firewall helps to make network tougher to crack by creating additional defense-in-depth that isolates different assets - making it hard for attackers to reach the sensitive information. Choosing and setting up firewalls will depend on the capabilities of network, relevant compliance requirements and the available resources to manage these firewalls.


