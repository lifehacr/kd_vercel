---
layout: post
title: SDN-Based MCQs
description: These questions cover advanced topics in SDN, including its architecture, key protocols, practical applications, and associated technologies. Each answer provides context to help clarify complex aspects of SDN technology.
image: /images/sdn.webp
author: jaslin
date: 2024-11-05 +0530
featured: true
tag: study
---

# SDN-Based Multiple Choice Questions

---

### 1. Which protocols are commonly used as a **Southbound API** to manage the forwarding tables of SDN-enabled network devices?
   - **A. BGP**
   - **B. OpenFlow**
   - **C. REST API**
   - **D. SNMP**

   **Answer:** B. OpenFlow  
   **Explanation:** OpenFlow is one of the primary Southbound APIs for SDN. It enables the SDN controller to communicate with network devices, like switches, and update their forwarding tables. REST APIs are generally used as Northbound APIs, while BGP and SNMP are traditional network protocols not specifically designed for SDN Southbound communication.

---

### 2. In an SDN architecture, what is the main role of the **SDN Controller**?
   - **A. Forward packets based on static rules**
   - **B. Serve as an interface for hardware management only**
   - **C. Separate the data plane and the control plane**
   - **D. Act as a central point for programming and controlling the network**

   **Answer:** D. Act as a central point for programming and controlling the network  
   **Explanation:** The SDN controller serves as the “brain” of the network, where it centrally manages network policies and controls traffic flows across the network by programming the forwarding rules. It communicates with devices using Southbound APIs, separating control from the data plane.

---

### 3. Which of the following terms best describes the process of **dividing an SDN network into multiple isolated virtual networks**?
   - **A. Network Tunneling**
   - **B. Intent-Based Networking**
   - **C. Network Slicing**
   - **D. Quality of Service (QoS)**

   **Answer:** C. Network Slicing  
   **Explanation:** Network slicing allows an SDN network to be divided into several virtual networks, each isolated and configured to meet different requirements. It is commonly used in environments like cloud data centers or 5G networks to cater to different application needs on the same physical infrastructure.

---

### 4. In SDN, which component is primarily responsible for **path computation and traffic engineering**?
   - **A. Northbound API**
   - **B. SDN Controller**
   - **C. OpenFlow Protocol**
   - **D. Data Plane**

   **Answer:** B. SDN Controller  
   **Explanation:** The SDN controller is responsible for calculating optimal paths for data flows and for traffic engineering across the network. It uses the network’s current state and policies to make routing decisions and then instructs network devices accordingly.

---

### 5. Which of the following scenarios would be a common **use case for Network Function Virtualization (NFV)** in an SDN environment?
   - **A. Configuring a centralized firewall policy across all network devices**
   - **B. Isolating specific traffic types using flow tables**
   - **C. Virtualizing load balancers, firewalls, and intrusion detection systems on general-purpose servers**
   - **D. Using a controller to route packets through multiple VLANs**

   **Answer:** C. Virtualizing load balancers, firewalls, and intrusion detection systems on general-purpose servers  
   **Explanation:** NFV virtualizes network functions, like load balancing or firewalling, which can then run on standard servers instead of dedicated hardware appliances. This complements SDN by enabling more flexible and cost-effective deployment of network services.

---

### 6. **Which protocol would an SDN controller most likely use to communicate with a device’s operating system to manage its configuration and state?**
   - **A. VXLAN**
   - **B. NETCONF**
   - **C. GRE**
   - **D. ICMP**

   **Answer:** B. NETCONF  
   **Explanation:** NETCONF (Network Configuration Protocol) is a protocol used for installing, modifying, and deleting configurations on network devices. It is often used in SDN environments for configuring devices via an SDN controller.

---

### 7. What does **Intent-Based Networking (IBN)** focus on in an SDN context?
   - **A. Direct control of flow tables in switches**
   - **B. Creating tunnels for secure communication**
   - **C. Defining high-level business policies to automatically configure the network**
   - **D. Providing network telemetry and statistics collection**

   **Answer:** C. Defining high-level business policies to automatically configure the network  
   **Explanation:** Intent-Based Networking allows administrators to specify desired business outcomes (intents) instead of configuring specific network details. The SDN system then translates these high-level intents into specific configurations, automating network operations.

---

### 8. Which of the following is **not** a key characteristic of SDN?
   - **A. Centralized control over network traffic**
   - **B. Separation of control and data planes**
   - **C. Dependency on proprietary hardware for scalability**
   - **D. Programmability for application-driven policy enforcement**

   **Answer:** C. Dependency on proprietary hardware for scalability  
   **Explanation:** One of the core principles of SDN is to decouple the control plane from the underlying hardware, allowing the network to run on commodity hardware rather than proprietary solutions. This makes the network more flexible, cost-effective, and scalable.

---

### 9. Which of the following tunneling protocols is commonly used in SDN-based **overlay networks** to create logical network segments over a shared physical infrastructure?
   - **A. MPLS**
   - **B. BGP**
   - **C. VXLAN**
   - **D. SNMP**

   **Answer:** C. VXLAN  
   **Explanation:** VXLAN (Virtual Extensible LAN) is widely used for creating overlay networks in SDN, especially in data center environments. It enables the segmentation of traffic over shared physical infrastructure, creating isolated logical networks for different applications or tenants.

---

### 10. In an SDN network, how would a **flow entry** be defined in a switch’s flow table?
   - **A. By directly editing the forwarding table on the data plane**
   - **B. By sending configuration changes through the Southbound API**
   - **C. Through static routes programmed by network engineers**
   - **D. Using only IP-based parameters without consideration of MAC addresses**

   **Answer:** B. By sending configuration changes through the Southbound API  
   **Explanation:** Flow entries in SDN are typically created or modified by the SDN controller via the Southbound API, such as OpenFlow. These flow entries dictate how packets should be processed based on specific matching criteria, which can include both IP and MAC addresses.

---

