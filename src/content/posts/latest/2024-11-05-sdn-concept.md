---
layout: post
title: SDN technical terms and concepts
description: Here’s a deeper look at some key technical terms and concepts in Software-Defined Networking (SDN)
image: /images/sdn.webp
author: jaslin
date: 2024-11-05 +0530
featured: true
tag: study
---

### 1. **Control Plane and Data Plane**
   - **Control Plane**: This is the part of the network that makes decisions about where traffic is sent. In SDN, the control plane is centralized in the SDN controller, which manages network behaviour programmatically.
   - **Data Plane**: Also known as the forwarding plane, it’s responsible for the actual transmission of data packets based on the decisions made by the control plane. In SDN, switches in the data plane are "dumb" devices that follow the controller’s instructions.

### 2. **SDN Controller**
   - A central software application that orchestrates, manages, and optimizes network resources.
   - Examples of SDN controllers include **OpenDaylight**, **ONOS (Open Network Operating System)**, and **Ryu**.
   - The controller communicates with the network devices (switches, routers) using **Southbound APIs** and with applications using **Northbound APIs**.

### 3. **Southbound APIs**
   - These APIs are used to communicate between the SDN controller and network devices.
   - **OpenFlow** is the most common Southbound API. It’s a protocol that allows the SDN controller to set forwarding tables in network devices, defining how packets should be routed.
   - Other protocols include **NETCONF**, **BGP-LS** (Border Gateway Protocol Link State), and **OVSDB** (Open vSwitch Database Management Protocol).

### 4. **Northbound APIs**
   - Northbound APIs are the communication interfaces between the SDN controller and the applications or services running on top of the network.
   - These APIs enable application developers to program network policies and behaviours. This can include tasks like bandwidth allocation, security rules, or quality of service (QoS) settings.
   - Common formats include **REST APIs** and **gRPC**.

### 5. **OpenFlow Protocol**
   - OpenFlow is one of the first and most widely used protocols for SDN. It allows the controller to directly access and modify the forwarding tables of network devices.
   - OpenFlow defines “flow entries” as rules, actions, and counters. These flow entries help direct traffic based on specific parameters, like IP addresses or MAC addresses.
   - Devices that are “OpenFlow-enabled” can be controlled by an SDN controller, which can dynamically change the device’s flow tables to meet network policies.

### 6. **Network Function Virtualization (NFV)**
   - NFV is a complementary technology to SDN. While SDN separates the control and data planes, NFV virtualizes network functions, like firewalls or load balancers, allowing them to run as software on standard servers.
   - NFV works alongside SDN to create agile, programmable networks. SDN manages how the network is controlled, while NFV virtualizes the services running over it.

### 7. **Flow Tables and Flow Rules**
   - **Flow Table**: In SDN, switches maintain flow tables, which are like routing tables that specify how incoming packets should be processed. The SDN controller populates these tables with flow rules.
   - **Flow Rules**: Each rule in the flow table specifies how packets matching certain criteria (like source or destination IP addresses) should be handled—whether they should be forwarded, dropped, or modified.

### 8. **Overlay Networks and Tunneling**
   - Overlay networks are virtual networks built on top of the physical network infrastructure. They allow SDN to abstract away the underlying network topology and create logical segments or “virtual” networks.
   - **Tunneling Protocols** such as **VXLAN** (Virtual Extensible LAN), **GRE** (Generic Routing Encapsulation), and **MPLS** (Multiprotocol Label Switching) are often used in SDN to create these virtual networks, especially in data centres.

### 9. **Traffic Engineering and Path Computation**
   - **Traffic Engineering**: This is the process of optimizing the flow of network traffic to achieve efficient resource utilization. SDN controllers perform traffic engineering by dynamically adjusting flow paths.
   - **Path Computation Element (PCE)**: Some SDN architectures use a specialized function called PCE to calculate the optimal path for data to travel through the network. It considers factors like bandwidth requirements, latency, and traffic load.

### 10. **Quality of Service (QoS) in SDN**
   - QoS refers to the prioritization of certain types of network traffic to ensure consistent performance for critical applications.
   - In SDN, QoS policies can be programmed into the controller, which then applies these policies to the relevant flow rules. This allows network administrators to dynamically adjust traffic priorities.

### 11. **Intent-Based Networking (IBN)**
   - IBN is an emerging concept where network administrators define high-level business intents (like "give priority to video traffic"). The SDN controller then translates these intents into technical policies and configurations.
   - With IBN, administrators don’t have to specify low-level details but rather focus on the desired outcome, and the SDN system automatically manages the underlying configurations.

### 12. **Network Slicing**
   - Network slicing allows an SDN-based network to be divided into multiple virtual networks, each with its own policies and resources.
   - It’s useful for multi-tenant environments (like cloud data centres) and supports use cases like IoT, where devices with different requirements (e.g., latency or bandwidth) operate on the same physical infrastructure.

### 13. **Zero-Touch Provisioning (ZTP)**
   - ZTP is a method that automates the configuration and deployment of network devices with minimal human intervention.
   - With SDN, ZTP can provision new switches or routers, update configurations, or roll out patches based on predefined templates and policies. This makes network expansion or maintenance faster and reduces errors.

### 14. **Telemetry and Monitoring**
   - In SDN, telemetry is the real-time collection of network data, such as traffic patterns, link utilization, and device status. Monitoring tools continuously track network health.
   - With SDN’s programmability, telemetry data can trigger automated responses, like rerouting traffic in case of congestion or raising alerts if certain thresholds are exceeded.

SDN’s architecture enables deep programmability and control over the network, leading to adaptable, scalable, and efficient networks in ways that weren’t possible with traditional, hardware-centric networking approaches.
