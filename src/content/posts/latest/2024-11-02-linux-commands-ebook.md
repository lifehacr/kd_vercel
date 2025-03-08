---
layout: post
title: Linux commands Open-source eBook
description: If you are looking for a comprehensive guide for beginners, check out this article
tags: study
image: /images/linux-cmds.png
author: jaslin
featured: true
date: 2024-11-02 +0530
---

# Linux commands Open-source article

This is an open-source eBook with 101 Linux commands that everyone should know. Whether you are a DevOps/SysOps engineer, developer, or just a Linux enthusiast, you will most likely have to use the terminal at some point in your career.

## Introduction to Linux eBook

If you are looking for a comprehensive guide for beginners, check out this article.

# Content <!-- omit in toc -->

- [Basics](#basics)
  - [File Hierarchy Standard (FHS)](#file-hierarchy-standard-fhs)
  - [Commands](#commands)
- [Disk and File System Management](#disk-and-file-system-management)
  - [General Disk Manipulation (non-LVM)](#general-disk-manipulation-non-lvm)
  - [Globs (Wildcards)](#globs-wildcards)
  - [Regex](#regex)
  - [Stream redirection](#stream-redirection)
- [Text Readers & Editors](#text-readers--editors)
  - [Less](#less)
  - [VI](#vi)
- [User and Group Management](#user-and-group-management)
- [File System Permissions](#file-system-permissions)
- [SSH](#ssh)
- [Cronjobs](#cronjobs)
- [Package Management](#package-management)
  - [RPM](#rpm)
  - [YUM](#yum)
- [📃 List of commands by category:](#-list-of-commands-by-category)
    - [Directory Navigation](#directory-navigation)
    - [File Commands](#file-commands)
    - [File and Directory Manipulation](#file-and-directory-manipulation)
    - [Package archive and compression tools](#package-archive-and-compression-tools)
    - [System commands](#system-commands)
    - [Networking Commands](#networking-commands)
    - [Package Management](#package-management-1)
    - [User Information commands](#user-information-commands)
    - [Session commands](#session-commands)
    - [Getting Help](#getting-help)
    - [Applications](#applications)
- [📃 List of commands by chapter:](#-list-of-commands-by-chapter)

---

# Basics

## File Hierarchy Standard (FHS)

| Path     | Content                             |
| -------- | ----------------------------------- |
| `/bin`   | Binaries (User)                     |
| `/boot`  | Static boot loader files            |
| `/etc`   | Host specific configs               |
| `/lib`   | Shared libraries and kernel modules |
| `/sbin`  | Binaries (System/root)              |
| `/var`   | Varying files (e.g. Logs)           |
| `/usr`   | 3rd party software                  |
| `/proc`  | Pseudo file system                  |
| `/sys`   | Pseudo file system                  |
| `/mnt`   | Mountpoint for internal drives      |
| `/media` | Mountpoint for external drives      |
| `/home`  | User homes                          |
| `/run`   | PID files of running processes      |

---

## Commands

**File System Commands**

| Command | Options            | Description                                       |
| ------- | ---------------- | ------------------------------------------------- |
| [`cd`](/doc/content/002-the-cd-command.md)    | `-`              | Navigate to last dir                              |
|         | `~`              | Navigate to home                                  |
|         | `~username`      | Navigate to home of specified user                |
| [`pwd`](/doc/content/006-the-pwd-command.md)   |                  | Print working dir                                 |
| [`ls`](/doc/content/001-the-ls-command.md)    |                  | Print dir content                                 |
|         | `-l`             | Format as list                                    |
|         | `-a`             | Show hidden items (`-A` without `.` and `..`)     |
|         | `-r`             | Invert order                                      |
|         | `-R`             | Recurse                                           |
|         | `-S`             | Sort by size                                      |
|         | `-t`             | Sort by date modified                             |
| [`mkdir`](/doc/content/014-the-mkdir-command.md) | `-p`             | Create dir with parents                           |
| [`cp`](/doc/content/031-the-cp-command.md)    | `-r`             | Copy dir                                          |
| [`rmdir`](/doc/content/103-the-rmdir-command.md) | `-p`             | Remove dir and empty parents                      |
| [`rm`](/doc/content/040-the-rm-command.md)    | `-rf`            | Remove dir recursively, `-f` without confirmation |
| [`mv`](/doc/content/032-the-mv-command.md)    |                  | Move recursively                                  |
| [`find`](/doc/content/102-the-find-command.md)  | `-iname pattern` | Search dir/file case-insensitive                  |
|         | `-mmin n`        | Last modified n minutes ago                       |
|         | `-mtime n`       | Last modified n days ago                          |
|         | `-regex pattern` | Path matches pattern                              |
|         | `-size n[kMG]`   | By file size (`-n` less than; `+n` greater than)  |
|         | `! searchparams` | Invert search                                     |

---

**File Manipulation**

| Command | Options                                      | Description                                |
| ------- | ------------------------------------------ | ------------------------------------------ |
| [`cat`](/doc/content/003-the-cat-tac-command.md)   | `file`                                     | Print content                              |
| [`tac`](/doc/content/003-the-cat-tac-command.md)   | `file`                                     | Print content inverted                     |
| [`sort`](/doc/content/059-the-sort-command.md)  | `file`                                     | Print sorted                               |
|         | `file -r -u`                               | Print sorted descending without dublicates |
| [`head`](/doc/content/004-the-head-command.md)  | `-n10 file`                            | Print lines 5-10                           |
| [`tail`](/doc/content/005-the-tail-command.md)  | `-f file`                                  | Print new lines automatically              |
| [`cut`](/doc/content/098-the-cut-command.md)   | `-f -4,7-10,12,15- file`                   | Print selected fields (tab delimited)      |
|         | `-c -4,7-10,12,15- file`                   | Print selected characters positions        |
|         | `-f 2,4 -d, --output-delimiter=$'\t' file` | Change delimiter (but use tab for output)  |
| [`uniq`](/doc/content/074-the-uniq-command.md)  | `file`                                     | Hide consecutive identical lines           |
|         | `file -c`                                  | Show consecutive identical line count      |
|         | `file -u`                                  | Hide consecutive identical lines           |
| `file`  | `file`                                     | Get file type                              |
| `wc`    | `file`                                     | Count Lines, Words, Chars (Bytes)          |

---

**Archiving**

| Command          | Options                          | Description                                              |
| ---------------- | -------------------------------- | -------------------------------------------------------- |
| [`tar`](/doc/content/063-the-tar-command.md)            | `cfv archiv.tar file1 file2`     | Create archive / add or overwrite content  |
|                  | `tfv archiv.tar`                 | Show content                                             |
|                  | `xf archiv.tar [-C ~/extracted]` | Extract (and decompress) archive (to ~ / extracted)      |
|                  | `cfvj archiv.tar.bz2 file`       | Create bzip2 compressed archive                          |
|                  | `cfvz archiv.tar.gz file`        | Create gzip compressed archive                           |
|                  | `cfa archiv.tar.[komp] file`     | create compressed archive (auto type based on name)      |
| [`bzip2`](/doc/content/069-the-bzip2-command.md) | `file1 file2`                    | Dateien (einzeln) komprimieren                           |
|                  | `-d file1 file2`                 | Compress files (one at a time)                           |
| [`gzip`](/doc/content/015-the-gzip-command.md) | `file1 file2`                    | Dateien (einzeln) komprimieren                           |
|                  | `-d file1 file2`                 | Decompress files                                   |

---

# Disk and File System Management

## General Disk Manipulation (non-LVM)

Creating physical partitions is **not required**! You can create PVs directly!

| Command        | Options                     | Description                          |
| ---------------|---------------------------- | ------------------------------------ |
| `fdisk`        |  `-l`                       | List physical disks and partitions   |
|         	 |  `/dev/sdb`<br>`n`          | Create new partition                 |
|        	 |  `/dev/sdb`<br>`t`<br>`8e`  | Change partition type to *Linux LVM* |
| `mkfs.xfs`     |  `/dev/myVG/myVol`          | Format LV with XFS                   |
| `mkfs.ext4`    |  `-f /dev/myVG/myVol`       | Format LV with EXT4 (overwrite)      |
| `blkid`        |  `/dev/myVG/myVol`          | Show UUID and formatting of volume   |
| `mount`        |                             | Show current mounted file systems    |
| 		 |  `-t ext4 /dev/myVG/myVol /mountpoint` | Mount LV to /mountpoint    |
| 		 |  `-a`                       | Mount as configured in /etc/fstab    |
| `umount`       |                             | Unmount a file system
|       	 |  `/dev/myVG/myVol`          | Unmount LV from /mountpoint          |
|        	 |  `/mountpoint`              | Unmount LV from /mountpoint          |
| [`df`](/doc/content/010-the-df-command.md)|                -    | Show disk usage                      |
| `xfs_growfs`   | `/dev/myVG/myVol`           | Resize xfs filesystem                |
| `resize2fs`    | ` /dev/myVG/myVol`          | Resize ext3/4 filesystem             |

---

**Other**

| Command     | Options         | Description                                |
| ----------- | --------------- | ------------------------------------------ |
| `<command>` | `--help`        | Help of current command (not standardized) |
|             | `-h`            |                                            |
|             | `-?`            |                                            |
| [`man`](/doc/content/024-the-man-command.md)       | `<command>`     | Manual page of command                     |
|             | `-k keyword`    | Search command by keyword (oder `apropos`) |
| `alias`     |                 | Show aliases                               |
|             | `name='befehl'` | Create alias                               |

---

## Globs (Wildcards)

The dot `.` in front of hidden items is ignored by glob patterns!

| Character | Description             |
| --------- | ----------------------- |
| `?`       | Any single character    |
| `*`       | Any characters          |
| `[ac-e]`  | 1 character in enum     |
| `[!ac-e]` | 1 character not in enum |

## Regex

Bash itself does not know regex. Use programs like `grep`, `sed`, `awk`.

**Control characters**

| Character      | Description             |
| -------------- | ----------------------- |
| `.`            | Any single character    |
| `[ac-e]`       | 1 character in enum     |
| `[^ac-e]`      | 1 character not in enum |
| `^`            | Start of string         |
| `$`            | End of string           |
| `\d`           | Digit                   |
| `\D`           | Not a digit             |
| `\s`           | Whitespace              |
| `\S`           | Not a Whitespace        |
| `\<`           | Start of word           |
| `\>`           | End of word             |
| `pattern?`     | Quantifier 0 or 1       |
| `pattern*`     | Quantifier 0..n         |
| `pattern+`     | Quantifier 1..n         |
| `pattern{x}`   | Quantifier exactly x    |
| `pattern{x,}`  | Quantifier x..n         |
| `pattern{x,y}` | Quantifier x..y         |
| `pattern{,y}`  | Quantifier 0..y         |

**Grep**

| Command | Options             | Description    |
| ------- | ----------------- | -------------- |
| [`grep`](/doc/content/107-the-grep-command.md)  | `pattern file`    | Extended Regex |
|         | `-E pattern file` | Extended Regex |
|         | `-v pattern file` | Invert match   |
|         | `-w pattern file` | Word match     |
|         | `-i pattern file` | Ignore case    |

## Stream redirection

- `>` overwrite
- `>>` append

| Character             | Description                     |
| --------------------- | ------------------------------- |
| `> file` or `1> file` | STDOUT to file                  |
| `< file`              | Datei to STDIN                  |
| `2> file`             | STDERR to file                  |
| `2>&1`                | STDERR to same target as STDOUT |
| `> file 2>&1`         | STDOUT and STDERR to file       |

# Text Readers & Editors

## Less

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `q`                 | Quit                            |
| `R`                 | Refresh content                 |
| `F`                 | Auto scroll                     |
| `g number`          | Go to line                      |
| `m lowercaseLetter` | Mark line                       |
| `' lowercaseLetter` | Go to mark                      |
| `/pattern`          | Search forward                  |
| `?pattern`          | Search backward                 |
| `n`                 | Next search result              |
| `N`                 | Last search result              |
| `ESC u`             | Remove highlighting from search |

## VI

[`VI/VIM`](/doc/content/100-the-vim-command.md)
**Editing**

To leave editing mode press `ESC`.

| Command   | Description           |
| --------- | --------------------- |
| `i`       | insert before cursor  |
| `a`       | insert after cursor   |
| `A`       | insert at end of line |
| `o`       | new line below        |
| `O`       | new line above        |
| `u`       | undo                  |
| `.`       | repeat last command   |
| `yy`      | copy line             |
| `5yy`     | copy 5 lines          |
| `p`       | paste below           |
| `P`       | paste above           |
| `x`       | delete character      |
| `5x`      | delete 5 characters   |
| `dd`      | delete line           |
| `5dd`     | delete 5 lines        |
| `:10,20d` | delete lines 10-20    |
| `d0`      | delete to line begin  |
| `d$`      | delete to line end    |

**Navigation**

Navigate as usual with `arrow keys`, `home`, `end`, `pg up`, `pg dn`.

| Command | Description            |
| ------- | ---------------------- |
| `5G`    | go to line 5           |
| `H`     | go to top of screen    |
| `M`     | go to middle of screen |
| `L`     | go to end of screen    |
| `5w`    | move over 7 words      |
| `5b`    | move back 5 words      |

**Other**

| Command     | Description                  |
| ----------- | ---------------------------- |
| `/foo`      | search forward               |
| `?foo`      | search backwards             |
| `n`         | repeat search                |
| `:w`        | save                         |
| `:q`        | close                        |
| `:wq`       | save and close               |
| `:q!`       | close without saving         |
| `:!command` | run bash command             |
| `:r foo`    | read file foo into this file |

# User and Group Management

**UID**

| UID   | Type           |
| ----- | -------------- |
| <1000 | system account |
| >1000 | user account   |

**User Database**

User info without passwords is stored in `/etc/passwd`.

| username | PW  | UID  | GID  |  GECOS    | HOME        | SHELL     |
| -------- | --- | ---- | ---- | --------- | ----------- | --------- |
| hfict    | x   | 1000 | 1000 |           | /home/hfict | /bin/bash |

**Group Database**

Group info with secondary group members are stored in `/etc/group`.
Primary group members are identified by GID in user database.

| groupname | PW  | GID | Users       |
| --------- | --- | --- | ----------- |
| wheel     | x   | 10  | hfict,user2 |

**Password Database**

Hashed user passwords are stored in `/etc/shadow`.
Password encryption is configured in `/etc/login.defs`.

| username | PW     | Last PW change | Minimum | Maximum | Warn | Inactive | Expire |
| -------- | ------ | -------------- | ------- | ------- | ---- | -------- | ------ |
| hfict    | [hash] | 17803          | 0       | 99999   | 7    |          |        |

PW:

- `[hash]` Encrypted test password
- `! [hash]` Account locked
- `!!` or `*` Account locked, no password set

**Commands**

| Command    | Param 					      | Description 					        |
| ---------- | ---------------------------------------------- | ------------------------------------------------------- |
| `id` 	     | `username` 				      | Show a user's ID and groups 				|
| [`who`](/doc/content/017-the-who-command.md)      | 						      | Show logged in users 					|
| [`last`](/doc/content/048-the-last-command.md)     | 						      | Show last logins 					|
| `lastb`    | 						      | Show last failed logins 				|
| [`sudo`](/doc/content/051-the-sudo-command.md)     | `-u user command` 			      | Execute command with user rights (default is root) 	|
|            | `-i` or` su -` 				      | Shell with root rights 					|
| [`su`](/doc/content/044-the-su-command.md)       | 						      | Shell as root (non-login shell) 			|
|            | `-` 					      | Shell as root (login shell) 				|
| 	     | `- user` 				      | Shell as user 						|
| [`useradd`](/doc/content/080-the-useradd-command.md)  | `-u 2101 -g primarygroup -c comment username`  | Create user (without `-g`, new group will be created)   |
| [`usermod`](/doc/content/082-the-usermod-command.md)  | `-G group1, group2` 			      | Define (overwrite) secondary groups 			|
| 	     | `-ag group, group2` 			      | Add secondary groups 					|
|            | `-l username` 				      | Change username 					|
| 	     | `-L` 					      | Lock Account 						|
| 	     | `-U` 					      | Unlock Account 						|
| 	     | `-s shellpath`  				      | Change shell 						|
| [`userdel`](/doc/content/081-the-userdel-command.md)  | `-r username` 				      | Delete user including home and mail spool 		|
| [`passwd`](/doc/content/025-the-passwd-command.md)   | `username` 				      | Change password (interactive) 				|
| `groupadd` | `groupname` 				      | Create group (optionally set GID with `-g`) 		|
| `groupdel` | `groupname` 			              | Delete group 						|

# File System Permissions

Permissions can be set on:

- User (owner)
- Group (owner)
- Others

Only root can change *User*. *User* can change *Group*.

Basic permissions (Add binary flags to combine):

| Char | Binary Flag | Permission |
| ---- | ----------- | ---------- |
| r    | 4           | read       |
| w    | 2           | write      |
| x    | 1           | execute    |

Advanced permissions (place in front of basic permissions: `chmod 1777 shared`).:

| Char  | Binary Flag | Name       | Description                                                                |
| ----- | ----------- | ---------- | -------------------------------------------------------------------------- |
| t / T | 1           | Sticky Bit | *Others* can't delete content (only applicable for directories)            |
| s / S | 2           | SGID-Bit   | File: run with permissions of *Group*<br>Dir: New elements inherit *Group* |
| s / S | 4           | SUID-Bit   | File is run with permissions of *User* (only applicable for files)         |

Advanced permissions replace the **x** when using `ls -l`. Lower case if **x** is set, upper case if **x** is not set.

*Read* permission on a directory only allows to see the directory itself but not it's contents. Use *execute* permission to show contents.

**Commands**

| Command   | Options                    | Description                                      |
| --------- | ------------------------ | ------------------------------------------------- |
| [`chmod`](/doc/content/106-the-chmod-command.md)   | `-R [uog] dirname`       | Set permissions recursively using binary flags    |
|           | `+[suog] filename`       | Add permissions using binary flags                |
|           | `-[suog] filename`       | Remove permissions using binary flags             |
|           | `u+x filename`           | Add *execute* permission for *User*               |
|           | `g+wx filename`          | Add *write* and *execute* permissions for *Group* |
|           | `o-r filename`           | Remove *read* permission for *Others*             |
| [`chown`](/doc/content/101-the-chown-command.md)   | `-R user:group filename` | Change owner (*User* & *Group*) recursively       |
|           | `user filename`          | Change owner (*User*)                             |
|           | `:group filename`        | Change owner (*Group*)                            |
| `chgroup` | `group filename`         | Change owner (*Group*)                            |

# SSH

[`SSH`](/doc/content/089-the-ssh-command.md)
Configuration is done in `/etc/ssh/sshd_config`.

Reload SSH service with `systemctl reload sshd` to apply changes!

DenyUsers, AllowUsers, DenyGroups, AllowGroups override each other and are applied in the order listed above.

| Config            | Option             | Description                                   |
| ----------------- | ------------------ | --------------------------------------------- |
| `PermitRootLogin` | `no`               | Deny root to login via SSH                    |
|                   | `yes`              | Allow root to login via SSH                   |
|                   | `without-password` | Allow only with private/public key auth       |
| `AllowUsers`      | `user1 user2`      | Allow only user1 and user2                    |
| `DenyUsers`       | `user1 user2`      | Allow all users but user1 and user2           |
| `AllowGroups`     | `group1 group2`    | Allow only users from specified groups        |
| `DenyGroups`      | `group1 group2`    | Allow all users but those in specified groups |

# Cronjobs

**[`Crontab`](/doc/content/091-the-crontab-command.md)**

Cronjobs are configured in crontab files. Do not edit these files directly. Use `crontab -e` instead. This runs all required actions to activate a cronjob after saving the edited crontab. The locations are as follows:

- `/var/spool/cron/username` user specific
- `/etc/crontab` system wide crontab

The format of the files is (user specific crontabs **do not** have the column *user-name*):

```
Example of job definition:
.---------------- minute (0 - 59 | */5 [every 5 minutes])
|  .------------- hour (0 - 23)
|  |  .---------- day of month (1 - 31)
|  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
|  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
|  |  |  |  |
*  *  *  *  * user-name  command to be executed
```

| Command                          | Description                   |
| -------------------------------- | ----------------------------- |
| `rpm -q cronie`                  | Check if package is installed |
| `systemctl status crond.service` | Check if service is running   |
| `crontab -l`                     | List current users crontab    |
| `crontab -e`                     | Edit current users crontab    |
| `crontab -e -u username`         | Edit specific users crontab   |
| `crontab -r`                     | Remove current users crontab  |

**Script folders**

Scripts in one of the following directories will be executed at the interval specified by the directory's name:

- `/etc/cron.hourly`
- `/etc/cron.daily`
- `/etc/cron.weekly`
- `/etc/cron.monthly`

**Allow / Deny usage**

Add user names one per line to the following files:

- `/etc/cron.allow` Whitelist
- `/etc/cron.deny` Blacklist

If none of the files exists, all users are allowed.

**Logs and Results**

Execution of cronjobs is logged in `/var/log/cron`.
Results are sent to the users mail `/var/spool/mail/username`.

# Package Management

## RPM

[`RPM`](/doc/content/075-the-rpm-command.md)

| Command                  | Description                               |
| ------------------------ | ----------------------------------------- |
| `rpm -i rpmfile\|rpmurl`  | Install package                           |
| `rpm -e packagename`     | Uninstall package                         |
| `rpm -q packagename`     | Check if package is installed             |
| `rpm -ql packagename`    | List files in a package                   |
| `rpm -qa`                | List all installed packages               |
| `rpm -qf /path/to/file`  | Get package that installed the file       |
| `rpm -qf $(which <exe>)` | Get package that installed the executable |
| `rpm -V packagename`     | Validate installed package                |

## YUM

[`YUM`](/doc/content/053-the-yum-command.md) is configured in `/etc/yum.conf`

Repos are configured in `/etc/yum.repos.d/`

Log is in `/var/log/yum.log`

| Command                               | Description                               |
| ------------------------------------- | ----------------------------------------- |
| `yum install packagename [-y]`        | Install package (`-y` no confirm message) |
| `yum remove packagename`              | Uninstall package                         |
| `yum update`                          | Update all installed packages             |
| `yum update packagename`              | Update specific package                   |
| `yum update pattern*`                 | Update packages using wildcard            |
| `yum info packagename`                | Get detailed info about package           |
| `yum list packagename`                | List installed and available packages     |
| `yum search searchstring`             | search for a package (name & summary)     |
| `yum search all searchstring`         | search for a package (all infos)          |
| `yum deplist packagename`             | List dependencies of a package            |
| `yum reinstall packagename`           | Reinstall (corrupted) package             |
| `yumdownloader --resolve packagename` | Download rpm package with dependencies    |

---

# 📃 List of commands by category:

If you want to contribute, feel free to pick up a topic marked as `TODO` and submit a pull request 🙌

Feel free to add new topics in case that you don't find one that you like from the current list.

---
### Directory Navigation

- [cd](/doc/content/002-the-cd-command.md) - change working directory
- [ls](/doc/content/001-the-ls-command.md) - list directory contents
- [dir](/doc/content/057-the-dir-command.md) - directory listing, columnar format
- [pwd](/doc/content/006-the-pwd-command.md) - return working directory name
- [tree](/doc/content/095-the-tree-command.md) - list subdirectories in a tree structure


### File Commands

- [cat/tac](/doc/content/003-the-cat-tac-command.md) - concatenate and print files
- [diff/sdiff](/doc/content/062-the-diff-sdiff-command.md) - compare files line by line
- [find](/doc/content/102-the-find-command.md) - search for files
- [grep](/doc/content/107-the-grep-command.md) - file pattern matcher
- [head](/doc/content/004-the-head-command.md) - display the first lines of a file
- [locate](/doc/content/049-the-locate-command.md) - find files and directories
- [stat](/doc/content/079-the-stat-command.md) - display file status
- [tail](/doc/content/005-the-tail-command.md) - display the last lines of a file
- [uniq](/doc/content/074-the-uniq-command.md) -  report or filter out repeated lines in a file

### File and Directory Manipulation

- [awk](/doc/content/090-the-awk-command.md) - pattern-directed scanning and processing language
- [chmod](/doc/content/106-the-chmod-command.md) - change permissions
- [chown](/doc/content/101-the-chown-command.md) - change file owner and group
- [cp](/doc/content/031-the-cp-command.md) - copy files and directories
- [cut](/doc/content/098-the-cut-command.md) - remove sections from files
- [mkdir](/doc/content/014-the-mkdir-command.md) - make a new directory
- [mv](/doc/content/032-the-mv-command.md) - move files and directories
- [nano](/doc/content/039-the-nano-command.md) - text editor
- [rm](/doc/content/040-the-rm-command.md) - delete files and directories
- [rmdir](/doc/content/103-the-rmdir-command.md) - remove directory
- [paste](/doc/content/060-the-paste-command.md) - merge corresponding or subsequent lines of file
- [rsync](/doc/content/086-the-rsync-command.md) - remote copy files
- [scp](/doc/content/076-the-scp-command.md) - secure copy
- [basename](/doc/content/111-the-basename-command.md) - strips directory information and suffixes from file path
- [sed](/doc/content/099-the-sed-command.md) - text transformation tool
- [sort](/doc/content/059-the-sort-command.md) - arrange or merge lines of files
- [split](/doc/content/078-the-split-command.md) - split a file into pieces
- [touch](/doc/content/007-the-touch-command.md) - change file access and modification times
- [vim](/doc/content/100-the-vim-command.md) - text editor

### Package archive and compression tools

- [bzip2](/doc/content/069-the-bzip2-command.md) - block-sorting file compressor
- [gzip](/doc/content/015-the-gzip-command.md) - compression tool
- [gunzip](/doc/content/064-the-gunzip-command.md) - decompression tool
- [tar](/doc/content/063-the-tar-command.md) - create, extract and manipulate archives
- [zip](/doc/content/054-the-zip-command.md) - package and compress files
- [unzip](/doc/content/055-the-unzip-command.md) - list, test, extract compressed ZIP files

### System commands

- [crontab](/doc/content/091-the-crontab-command.md) - maintain individual tables used to drive the cron daemon
- [df](/doc/content/010-the-df-command.md) - display free disk space
- [du](/doc/content/084-the-du-command.md) - display disk usage statistics
- [free](/doc/content/018-the-free-command.md) - show memory usage information
- [hostname](/doc/content/038-the-hostname-command.md) - set or print name of current host system
- [hostnamectl](/doc/content/065-the-hostnamectl-command.md) - change hostname settings
- [ionice](/doc/content/083-the-ionice-command.md) - get/set I/O process priority
- [iostat](/doc/content/050-the-iostat-command.md) - I/O statistics
- [kill](/doc/content/034-the-kill-command.md) - terminate or signal a process by id
- [killall](/doc/content/035-the-killall-command.md) - kill processes by name
- [lsblk](/doc/content/104-the-lsblk-command.md) - display block and loop devices
- [lsof](/doc/content/068-the-lsof-command.md) - list open files
- [mpstat](/doc/content/072-the-mpstat-command.md) - CPU statistics
- [ncdu](/doc/content/073-the-ncdu-command.md) - curses-based disk usage
- [ps](/doc/content/033-the-ps-command.md) - display process status
- [pstree](/doc/content/094-the-pstree-command.md) - show processes in tree format
- [reboot](/doc/content/058-the-reboot-command.md) - restart the system
- [service](/doc/content/070-the-service-command.md) - run an init script
- [shutdown](/doc/content/056-the-shutdown-command.md) - close down the system at a specific time
- [top/htop](/doc/content/019-the-top-htop-command.md) - display process information
- [uname](/doc/content/013-the-uname-command.md) - prints operating system details
- [useradd](/doc/content/080-the-useradd-command.md) - add/update user accounts
- [userdel](/doc/content/081-the-userdel-command.md) - delete user account
- [usermod](/doc/content/082-the-usermod-command.md) - modify user properties
- [vmstat](/doc/content/071-the-vmstat-command.md) - virtual memory statistics
- [whereis](/doc/content/096-the-whereis-command.md) - locate programs

### Networking Commands

- [dig](/doc/content/087-the-dig-command.md) - DNS lookup utility
- [ifconfig](/doc/content/041-the-ifconfig-command.md) - configure network interface parameters
- [ip](/doc/content/042-the-ip-command.md) - perform network administration tasks
- [iptable](/doc/content/066-the-iptable-command.md) - configure IPv4 network firewall
- [lscpu](/doc/content/030-the-lscpu-command.md) - display CPU architecture information
- [netstat](/doc/content/067-the-netstat-command.md) - show network status
- [ping](/doc/content/085-the-ping-command.md) - check network connectivity
- [whois](/doc/content/088-the-whois-command.md) - information about Internet domain names and network numbers


### Package Management

- [apt](/doc/content/052-the-apt-command.md) - Debian package management
- [rpm](/doc/content/075-the-rpm-command.md) - RPM package manager (RedHat)
- [yum](/doc/content/053-the-yum-command.md) - package manager for RedHat Linux

### User Information commands
For user modification, see useradd, userdel, usermod under System commands

- [groups](/doc/content/023-the-groups-command.md) - show group memberships
- [finger](/doc/content/022-the-finger-command.md) - shows information about users
- [last](/doc/content/048-the-last-command.md) - displays most recent user logins
- [passwd](/doc/content/025-the-passwd-command.md) - modify a user's password
- [w](/doc/content/026-the-w-command.md) - display who is logged in and what they are doing
- [who](/doc/content/017-the-who-command.md) - display who is logged in
- [whoami](/doc/content/027-the-whoami-command.md) - display effective user id

### Session commands

- [clear](/doc/content/043-the-clear-command.md) - clear terminal screen
- [env](/doc/content/036-the-env-command.md) - display environment variables, or set variables for command execution
- [exit](/doc/content/061-the-exit-command.md) - close the active session/shell
- [printenv](/doc/content/037-the-printenv-command.md) - print specified environment variables
- [history](/doc/content/028-the-history-command.md) - display the command history
- [login](/doc/content/029-the-login-command.md) - login and initiate a user session
- [nohup](/doc/content/093-the-nohup-command.md) - invoke a utility immune to hangups
- [sleep](/doc/content/077-the-sleep-command.md) - suspend execution for a time interval
- [ssh](/doc/content/089-the-ssh-command.md) - secure shell login
- [su](/doc/content/044-the-su-command.md) - substitute user identity
- [sudo](/doc/content/051-the-sudo-command.md) - execute a command as another user
- [screen](/doc/content/108-the-screen-command.md) - start a screen session

### Getting Help

- [man](/doc/content/024-the-man-command.md) - format and display online manual pages
- [help](/doc/content/011-the-help-command.md) - displays help about basic commands not covered by 'man'
- [whatis](/doc/content/016-the-whatis-command.md) - display one-line command descriptions

### Applications

- [bc](/doc/content/009-the-bc-command.md) - basic calculator
- [cal](/doc/content/008-the-cal-command.md) - displays a calendar
- [cmatrix](/doc/content/105-the-cmatrix-command.md) - enter the Matrix
- [curl](/doc/content/046-the-curl-command.md) - transfer data to or from a server
- [echo](/doc/content/021-the-echo-command.md) - display interpreted arguments
- [factor](/doc/content/012-the-factor-command.md) - prints prime factors of numbers
- [printf](/doc/content/097-the-printf-command.md) - format output
- [sl](/doc/content/020-the-sl-command.md) - runs a steam locomotive across your terminal
- [wget](/doc/content/045-the-wget-command.md) - non-interactive web file download
- [xargs](/doc/content/092-the-xargs-command.md) - construct argument lists and execute utility
- [yes](/doc/content/047-the-yes-command.md) - print continous output stream
- [banner](/doc/content/112-the-banner-command.md) - Writes ASCII character strings in large letters to standard output.
- [aplay](/doc/content/125-the-aplay-command.md) - aplay is a command-line to play audio files.
- [spd-say](/doc/content/126-the-spd-say-command.md) - plays the given text as the sound from the command line.

---
# 📃 List of commands by chapter:

If you want to contribute, feel free to pick up a topic, update it with `New Examples | [Options]`and submit a pull request 🙌

Feel free to add new topics in case that you don't find one that you like from the current list.

- [001-the-ls-command.md](/doc/content/001-the-ls-command.md)
- [002-the-cd-command.md](/doc/content/002-the-cd-command.md)
- [003-the-cat-tac-command.md](/doc/content/003-the-cat-tac-command.md)
- [004-the-head-command.md](/doc/content/004-the-head-command.md)
- [005-the-tail-command.md](/doc/content/005-the-tail-command.md)
- [006-the-pwd-command.md](/doc/content/006-the-pwd-command.md)
- [007-the-touch-command.md](/doc/content/007-the-touch-command.md)
- [008-the-cal-command.md](/doc/content/008-the-cal-command.md)
- [009-the-bc-command.md](/doc/content/009-the-bc-command.md)
- [010-the-df-command.md](/doc/content/010-the-df-command.md)
- [011-the-help-command.md](/doc/content/011-the-help-command.md)
- [012-the-factor-command.md](/doc/content/012-the-factor-command.md)
- [013-the-uname-command.md](/doc/content/013-the-uname-command.md)
- [014-the-mkdir-command.md](/doc/content/014-the-mkdir-command.md)
- [015-the-gzip-command.md](/doc/content/015-the-gzip-command.md)
- [016-the-whatis-command.md](/doc/content/016-the-whatis-command.md)
- [017-the-who-command.md](/doc/content/017-the-who-command.md)
- [018-the-free-command.md](/doc/content/018-the-free-command.md)
- [019-the-top-htop-command.md](/doc/content/019-the-top-htop-command.md)
- [020-the-sl-command.md](/doc/content/020-the-sl-command.md)
- [021-the-echo-command.md](/doc/content/021-the-echo-command.md)
- [022-the-finger-command.md](/doc/content/022-the-finger-command.md)
- [023-the-groups-command.md](/doc/content/023-the-groups-command.md)
- [024-the-man-command.md](/doc/content/024-the-man-command.md)
- [025-the-passwd-command.md](/doc/content/025-the-passwd-command.md)
- [026-the-w-command.md](/doc/content/026-the-w-command.md)
- [027-the-whoami-command.md](/doc/content/027-the-whoami-command.md)
- [028-the-history-command.md](/doc/content/028-the-history-command.md)
- [029-the-login-command.md](/doc/content/029-the-login-command.md)
- [030-the-lscpu-command.md](/doc/content/030-the-lscpu-command.md)
- [031-the-cp-command.md](/doc/content/031-the-cp-command.md)
- [032-the-mv-command.md](/doc/content/032-the-mv-command.md)
- [033-the-ps-command.md](/doc/content/033-the-ps-command.md)
- [034-the-kill-command.md](/doc/content/034-the-kill-command.md)
- [035-the-killall-command.md](/doc/content/035-the-killall-command.md)
- [036-the-env-command.md](/doc/content/036-the-env-command.md)
- [037-the-printenv-command.md](/doc/content/037-the-printenv-command.md)
- [038-the-hostname-command.md](/doc/content/038-the-hostname-command.md)
- [039-the-nano-command.md](/doc/content/039-the-nano-command.md)
- [040-the-rm-command.md](/doc/content/040-the-rm-command.md)
- [041-the-ifconfig-command.md](/doc/content/041-the-ifconfig-command.md)
- [042-the-ip-command.md](/doc/content/042-the-ip-command.md)
- [043-the-clear-command.md](/doc/content/043-the-clear-command.md)
- [044-the-su-command.md](/doc/content/044-the-su-command.md)
- [045-the-wget-command.md](/doc/content/045-the-wget-command.md)
- [046-the-curl-command.md](/doc/content/046-the-curl-command.md)
- [047-the-yes-command.md](/doc/content/047-the-yes-command.md)
- [048-the-last-command.md](/doc/content/048-the-last-command.md)
- [049-the-locate-command.md](/doc/content/049-the-locate-command.md)
- [050-the-iostat-command.md](/doc/content/050-the-iostat-command.md)
- [051-the-sudo-command.md](/doc/content/051-the-sudo-command.md)
- [052-the-apt-command.md](/doc/content/052-the-apt-command.md)
- [053-the-yum-command.md](/doc/content/053-the-yum-command.md)
- [054-the-zip-command.md](/doc/content/054-the-zip-command.md)
- [055-the-unzip-command.md](/doc/content/055-the-unzip-command.md)
- [056-the-shutdown-command.md](/doc/content/056-the-shutdown-command.md)
- [057-the-dir-command.md](/doc/content/057-the-dir-command.md)
- [058-the-reboot-command.md](/doc/content/058-the-reboot-command.md)
- [059-the-sort-command.md](/doc/content/059-the-sort-command.md)
- [060-the-paste-command.md](/doc/content/060-the-paste-command.md)
- [061-the-exit-command.md](/doc/content/061-the-exit-command.md)
- [062-the-diff-sdiff-command.md](/doc/content/062-the-diff-sdiff-command.md)
- [063-the-tar-command.md](/doc/content/063-the-tar-command.md)
- [064-the-gunzip-command.md](/doc/content/064-the-gunzip-command.md)
- [065-the-hostnamectl-command.md](/doc/content/065-the-hostnamectl-command.md)
- [066-the-iptable-command.md](/doc/content/066-the-iptable-command.md)
- [067-the-netstat-command.md](/doc/content/067-the-netstat-command.md)
- [068-the-lsof-command.md](/doc/content/068-the-lsof-command.md)
- [069-the-bzip2-command.md](/doc/content/069-the-bzip2-command.md)
- [070-the-service-command.md](/doc/content/070-the-service-command.md)
- [071-the-vmstat-command.md](/doc/content/071-the-vmstat-command.md)
- [072-the-mpstat-command.md](/doc/content/072-the-mpstat-command.md)
- [073-the-ncdu-command.md](/doc/content/073-the-ncdu-command.md)
- [074-the-uniq-command.md](/doc/content/074-the-uniq-command.md)
- [075-the-rpm-command.md](/doc/content/075-the-rpm-command.md)
- [076-the-scp-command.md](/doc/content/076-the-scp-command.md)
- [077-the-sleep-command.md](/doc/content/077-the-sleep-command.md)
- [078-the-split-command.md](/doc/content/078-the-split-command.md)
- [079-the-stat-command.md](/doc/content/079-the-stat-command.md)
- [080-the-useradd-command.md](/doc/content/080-the-useradd-command.md)
- [081-the-userdel-command.md](/doc/content/081-the-userdel-command.md)
- [082-the-usermod-command.md](/doc/content/082-the-usermod-command.md)
- [083-the-ionice-command.md](/doc/content/083-the-ionice-command.md)
- [084-the-du-command.md](/doc/content/084-the-du-command.md)
- [085-the-ping-command.md](/doc/content/085-the-ping-command.md)
- [086-the-rsync-command.md](/doc/content/086-the-rsync-command.md)
- [087-the-dig-command.md](/doc/content/087-the-dig-command.md)
- [088-the-whois-command.md](/doc/content/088-the-whois-command.md)
- [089-the-ssh-command.md](/doc/content/089-the-ssh-command.md)
- [090-the-awk-command.md](/doc/content/090-the-awk-command.md)
- [091-the-crontab-command.md](/doc/content/091-the-crontab-command.md)
- [092-the-xargs-command.md](/doc/content/092-the-xargs-command.md)
- [093-the-nohup-command.md](/doc/content/093-the-nohup-command.md)
- [094-the-pstree-command.md](/doc/content/094-the-pstree-command.md)
- [095-the-tree-command.md](/doc/content/095-the-tree-command.md)
- [096-the-whereis-command.md](/doc/content/096-the-whereis-command.md)
- [097-the-printf-command.md](/doc/content/097-the-printf-command.md)
- [098-the-cut-command.md](/doc/content/098-the-cut-command.md)
- [099-the-sed-command.md](/doc/content/099-the-sed-command.md)
- [100-the-vim-command.md](/doc/content/100-the-vim-command.md)
- [101-the-chown-command.md](/doc/content/101-the-chown-command.md)
- [102-the-find-command.md](/doc/content/102-the-find-command.md)
- [103-the-rmdir-command.md](/doc/content/103-the-rmdir-command.md)
- [104-the-lsblk-command.md](/doc/content/104-the-lsblk-command.md)
- [105-the-cmatrix-command.md](/doc/content/105-the-cmatrix-command.md)
- [106-the-chmod-command.md](/doc/content/106-the-chmod-command.md)
- [107-the-grep-command.md](/doc/content/107-the-grep-command.md)
- [108-the-screen-command.md](/doc/content/108-the-screen-command.md)
- [109-the-nc-command.md](/doc/content/109-the-nc-command.md)
- [110-the-make-command.md](/doc/content/110-the-make-command.md)
- [111-the-basename-command.md](/doc/content/111-the-basename-command.md)
- [112-the-banner-command.md](/doc/content/112-the-banner-command.md)
- [113-the-alias-command.md](/doc/content/113-the-alias-command.md)
- [114-the-which-command.md](/doc/content/114-the-which-command.md)
- [115-the-date-command.md](/doc/content/115-the-date-command.md)
- [116-the-mount-command.md](/doc/content/116-the-mount-command.md)
- [117-the-nice-command.md](/doc/content/117-the-nice-command.md)
- [118-the-wc-command.md](/doc/content/118-the-wc-command.md)
- [119-the-tr-command.md](/doc/content/119-the-tr-command.md)
- [120-the-fdisk-command.md](/doc/content/120-the-fdisk-command.md)
- [121-the-wait-command.md](/doc/content/121-the-wait-command.md)
- [122-the-zcat-command.md](/doc/content/122-the-zcat-command.md)
- [123-the-fold-command.md](/doc/content/123-the-fold-command.md)
- [124-the-quota-command.md](/doc/content/124-the-quota-command.md)
- [125-the-aplay-command.md](/doc/content/125-the-aplay-command.md)
- [126-the-spd-say-command.md](/doc/content/126-the-spd-say-command.md)
- [127-the-xeyes-command.md](/doc/content/127-the-xeyes-command.md)
- [128-the-parted-command.md](/doc/content/128-the-parted-command.md)
- [129-the-nl-command.md](/doc/content/129-the-nl-command.md)
- [130-the-pidof-command.md](/doc/content/130-the-pidof-command.md)
- [131-the-shuf-command.md](/doc/content/131-the-shuf-command.md)
- [132-the-less-command.md](/doc/content/132-the-less-command.md)
- [133-the-nslookup-command.md](/doc/content/133-the-nslookup-command.md)
- [134-the-cmp-command.md](/doc/content/134-the-cmp-command.md)
- [135-the-expr-command.md](/doc/content/135-the-expr-command.md)

