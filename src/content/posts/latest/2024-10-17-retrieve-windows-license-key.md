---
layout: post
title: Retrieve Windows License key using CMD
description: If you're looking for your Windows 10 product key, you can find it by entering a quick command in the Command Prompt.
tags: [featured]
author: jaslin
image: /images/cmd-win-license.webp
featured: true
---
If you're looking for your Windows 10 product key, you can find it by entering a quick command in the Command Prompt. Here's a neat little trick for finding the product key using a Windows Registry method.

Method:

1. Enter "cmd" in the search box on the taskbar and open Command Prompt.
2. Enter the command **```wmic path SoftwareLicensingService get OA3xOriginalProductKey```** and press Enter.

The text displayed in the format of "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" is the product key.
