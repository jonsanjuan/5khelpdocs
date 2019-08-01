---
id: user-lists
title: User Lists
---

User Lists are customizable groups of Users that you can use to streamline the process of sharing Packages and downloading multiple watermarked Files.

---

To access User Lists, click on Users in the Left Nav, then click User Lists at the top of the screen.
![](/img/users/user-list-overview-1.png)
### New User List
Click the New User List button to create a new User List.

---

## View User Lists
The list of User Lists in the system that you have access to are displayed on the left side of the screen.  Click a List to view and edit it.
![](/img/users/user-list-list-1.png)
### Search
Type the name of a User List to find User Lists with that name.
### Select
Check a User List to select it.  Once one or more lists have been selected, a button labeled Delete User Lists appears.  Click Delete User Lists to remove the list from the system.
### Icons
These icons let you see the settings of a list at a glance.  Icons indicate whether a User List is for Watermarking, Distribution, and whether it's private or public.

---

## Edit User List
Once you've clicked on a User List, you can view its details, and edit it if it belongs to you.
![](/img/users/user-list-edit-1.png)
### List Name
Enter the name of the User List.  It's recommended to name it something descriptive, so that it's easier to identify later.
### Usage

<strong>Distribution: </strong>If this is checked, the list will be available when sending a Package or a Comment, allowing you to quickly address Files or Comments to multiple people at once.

<strong>Watermark: </strong>If this is checked, the list will be available when downloading a File with a User's watermark (assuming you have the Permissions required to do so.  This allows you to quickly and easily download multiple versions of watermarked Files.

### Access

<strong>Private: </strong>The list is only available to you and to Users you explicitly share it with.

<strong>Public: </strong>The list is available to all Users across the system.  Only Admins are able to create Public lists.

### Members
The Users who are included in the list.  Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a User from the User List.
### Add Users
Click the Add Users button to add more Users to the User List.
![](/img/users/user-list-add-users-1.png)
You'll be shown a list of Users in the system who are available to be added.  Click the <i class="fa fa-plus" aria-hidden="true"></i> icon next to a User's name to add them to the list.  Click the <i class="fa fa-times" aria-hidden="true"></i> to remove an added User from the list.  Click Save List to save your changes, or Cancel to cancel them.

<span class="important">Important:</span> Only Users you have Permission to access will be available to you in this list.  If you believe you need access to additional Users, please contact your 5th Kind Administrator.
### Remove User
Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a User from the User List.  To remove multiple Users at once, check the boxes next to their names, then click Delete.
### Shared
This is the list of Users you've shared your User List with.  When you share a User List with another User, you allow them to use it as well.  Users who have a User List shared with them may not modify it.
![](/img/users/user-list-shared-1.png)
### Add Users
Click the Add Users button to share the User List with other Users.
![](/img/users/user-list-add-users-1.png)
You'll be shown a list of Users in the system who are available to be added.  Click the <i class="fa fa-plus" aria-hidden="true"></i> icon next to a User's name to share your list with them.  Click the <i class="fa fa-times" aria-hidden="true"></i> to remove an added User from the list.  Click Save List to save your changes, or Cancel to cancel them.

<span class="important">Important:</span> Only Users you have Permission to access will be available to you in this list.  If you believe you need access to additional Users, please contact your 5th Kind Administrator.
### Remove User
Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a User from the User List.  To remove multiple Users at once, check the boxes next to their names, then click Delete.
### Delete User List
Click the red Delete button to delete the User List from the system.

---

## Creating a User List from a CSV
You can make a new User List and add people to it automatically by uploading a CSV.  
![](/img/users/user-list-csv-overview-1.png)
Simply create a CSV File containing each username or email address that you want in your User List.  The file should be formatted like this:

| username   | email |
| ------------- | :-------------: |
| {username1}      | |
|      | {email_address2} | 
| {username3} | {email_address3} | 
| etc... |  |

<a href="../../files/users/userlist-template.csv" download>Click here to download the CSV template.</a>

The first row must contain the word "username" in the first column, and "email" in the second column.
In subsequent columns, add either a Username, an email address, or both.
<span class="important">The CSV file you upload must contain the correct field names, and must be encoded as comma-delimited.</span>


**Username** -  If you enter a Username, it must match an existing Username already in the system.  If you enter an email address, you may leave this blank.

**Email** - If you enter an email address, it will find any Users with that email address, and add them to the list.  Entering a Username as well will cause the email address to be ignored.

![](/img/users/user-list-csv-upload-1.png)
Click the "Import from CSV" button in the upper-right corner, then click "Choose CSV file" to select the file from your computer.  

You'll then see a report showing how many Users were added to your new User List.  You may then find the User List in the left hand side of the screen, and rename it and modify it as you wish.