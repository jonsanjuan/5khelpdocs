---
id: user-roles
title: User Roles
---

User Roles control what permissions and abilities Users in 5th Kind are allowed.  Each User is assigned to one Role.

---

![](/img/users/user_roles_overview_1.png)
To manage User Roles, navigate to the <strong>Users</strong> view, then click <strong>User Roles</strong>.
To create a new User Role, click <i class="fa fa-plus" aria-hidden="true"></i> <strong>New User Role</strong>

---

![](/img/users/user_role_role_3.png)
Fill out the name of the User Role.  It's best to give each Role a clear descriptive name, so that it's clear what it's meant to be used for.
## Admin Settings
### Domain Purpose
Domain Purpose is essentially a project category, controlling which tag structures will be available to the user.  This field controls which Domain Purposes will be available to the User when categorizing files, as well as to what Structures can be browsed in File Search.
### Package Share Types
Which types of Packages the User will be able to send.
#### Standard
Standard Packages will open in Asset View mode when the recipient clicks on it, allowing them to browse its contents.
#### Dailies
Dailies Packages will open in File Viewer mode when the recipient clicks on it, and automatially begin playing the first item.
### User Access Level
The primary determinant of what permissions the User has in the system.  In 5th Kind, a permission is the ability to view, download, or edit files, or to perform actions within the system.  Choose between the following:
#### Standard User
Standard user with no permissions or abilities in the system.  A Standard User can log in to 5th Kind and view packages that are shared with them.  Any additional permissions must be explicitly granted.
#### Admin
User with full permissions and all abilities in 5th Kind.  Can view, modify, and download any file in the system, regardless of other permissions.

### Authentication Type
If you have Active Directory integration enabled, this will allow you to configure Single Sign On.
### Redirect on Login
Select which module the User will see when they first log in.  Chose between Dashboard, Package Inbox, or File Search.
### MFA (Multi-Factor Authentication) Type
If you would like to require Google Authenticator for Multi-Factor Authentication, enable that here.  If this is enabled, the User must install the Google Authenticator app on their phone.
### Save Access Level
Control whether the User can download files from the system.  This setting controls a User's download settings for Files they search for in the system, as well as those sent to them in Packages set to Recipient Settings.  If Files are shared with a user in a Package set to Downloadable or View Only, however, then that setting will override the setting here.
#### None:
The User cannot download any Files from the system unless they are shared in a package set to Downloadable.
Proxy
The User can download the proxy of any File that they can view from the File Search page.  They can also download the proxy of any File that was shared with them in a Package set to Recipient Settings.
#### Source and Proxy
The User can download the source of any File that they can view from the File Search page, or that was shared with them in a Package set to Recipient Settings.  They can also download the proxy if they choose, and may download them without a watermark.

### Dashboard Type
Controls how the Dashboard module will function.
#### Package
The Dashboard displays a list of Productions contained in Packages that have been shared with you.  In this mode, a Production will not appear on the Dashboard until someone has sent you a Package containing at least one File from it.
#### Production
The Dashboard displays a list of Productions you've been assigned to.

---

## Granular Permissions
These settings enable additional abilities for Standard Users.  Note that Admin Users always have all of these permissions.
### Admin
#### Role Manager
Create new User Roles, and edit Roles that the User has been given access to through the <a href="#role-restrictions">Role Restrictions field</a>.  A user can never create another Role with higher permissions than they themselves have.
#### Upload Manager
View and categorize uploads made by other Users.
#### Queue Manager
View and re-prioritize jobs in the Processing Queues
#### Download Manager
View list of downloads made by other Users.
#### View Private Conversations
View all Comments on files that you have access to, even if they are marked Private.
#### Change Watermark
Ability to change the watermark when downloading files.  With this enabled, Users can change the watermark style, and also the User's name on the watermark.
### User
#### Disable Licence Agreement
If your system has a License Agreement that Users must agree to before logging in, checking this setting will allow a User to bypass it.
#### Create Users
Create User accounts for others.  With this permission, you can also edit Users you've created, as well as those which you're granted Edit access to through your User Access Rules.  The Roles which are available to assign are those granted through the <a href="#role-restrictions">Role Restrictions field</a>.
#### Upload Assets
Gives Users the ability to upload files into 5th Kind.
#### Print
Gives Users the option in the interface to print images and documents.
### Package
#### Share Source
When sharing a package, allows a User to share Source Files as Downloadable, even if they themselves do not have permission to download Source Files.
#### Package Reports
View and download Package Reports
#### Inbox Nav Enabled
Enables Navigation interface on Package Inbox, with views for Drafts, Sent, Deleted, and Archived Packages.  Useful for Users who send many Packages
### Device
Select which device(s) the User may log in from.  Choose from Desktop, Mobile, TV, or any combination of the above.

---

![](/img/users/user-role-restrictions-1.png)
## Role Restrictions
This field appears if the Role has either Role Manager or Create Users permissions.
If the User has the Role Manager permission, the Roles selected here will be available for them to view and modify in the User Roles section.  If the User has the Create Users permission, the Roles selected here will be available for them to assign to other Users.
## Productions
Select which Productions the User has access to.  Productions selected here will be available in the User's dashboard and top selector dropdown, and will be available to them when categorizing Files (if they are able to do so).  Additionally, if the User has the Role Manager permission, the Productions selected here must be part of any File Access Rules they create (see below).
## Watermarks
Set the style of watermarks that users in this role will receive by default when viewing or downloading files.  You can set different watermark styles for images, pdfs, and videos. This setting may be overridden if the User has the Change Watermark permission, or if someone sends them a Package with a custom watermark.  Additionally, this setting may be overridden globally in certain cases by the Production Watermarks Admin section.
![](/img/users/user_role_role_2.png)

---

## File Access Rules
File Access Rules govern what files a User can see, whether they can interact with them, and if so, how.  File Access Rules are split into two sections: View Access Rules, and Edit Access Rules.


Each Rule is a set of metadata filters.  Once Metadata Fields have been configured, and values have been added to them, any value can be used to control access.
Each User Role can have as many File Access Rules as needed.  Files will become available to the assigned Users if they match any of the Rules.

### View Access Rules
View Access Rules control what Files a User can view, and optionally, what additional information about them they can view.

Files matching a View Access Rule will be viewable by the Users assigned to the Role.  Additionally, by checking the File Permissions boxes, permission can be granted to view additional info for matching files:

* **View History:**  View the history panel of matching Files.  [See here for information about the History Panel](viewer-history-panel.md)  
* **View Access:**  View who has access to matching Files.  [See here for information about the Access Panel](viewer-access-panel.md)
* **Email on Ingest:**  Users assigned to the role will receive an email notification whenever Files matching the Rule are ingested into 5th Kind.

### Edit Access Rules
Edit Access Rules control what Files a User can edit.  Files matching an Edit Access Rule will be both viewable and editable by Users assigned to the Role.


### Creating Access Rules
![](/img/users/file-access-rules-1.png)
After a User Role has been created, you can add File Access Rules.  With a User Role selected, choose the either the View Access Rules tab or the Edit Access Rules tab, and click "+ Add Rule."
![](/img/users/asset-access-rules-2.png)
Enter the name of the Rule, and click Save.
![](/img/users/file-access-rules-3.png)
Choose the Domain Purpose from the dropdown.
![](/img/users/file-access-rules-4.png)

---

## Setting File Access Rules
![](/img/users/asset-access-rules-5.png)
### Metadata Fields
The fields shown here will match those in the Tag Structure for the selected Domain Purpose.  Click on a field to add a conditional using it.
### Conditionals
Each Conditional is simply a filter.  You can add as many conditionals to a Rule as you'd like.  All Conditionals in a rule are ANDed together.  Files will match the Rule and become available for their set of permissions if they satisfy all of the conditionals.  For each Field, choose at least one Value to match. 
### Field Name
The field you are using to filter values.
### Condition
Select either "Is" or "Is Not."
### Value
The Value that a File must have in order to match.  You can add multiple Values to each conditional.  Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a Value.
### Add Value
Click to select existing Values from a dropdown, and add them to the Conditional.
### Remove Conditional
Remove the entire Conditional.
### File Permissions
These checkboxes determine what permissions Users have on Files that match the Rule
#### View File
User can search or filter for any File in the system matching the Rule, and can view them.
#### View History
User can view the history of matching Files.
#### Edit File
User can edit the categorization of matching Files.
#### View Access
User can view which other Users have access to a File.
#### Email on Ingest
User will receive an email when a new File is ingested and categorized with matching values.

---

## Example
![](/img/users/asset-access-rules-6.png)
In this example, this User Role has one View Access Rule, called "Rule 1."  This rule allows assigned users to view any File for which Production is categorized as "Iron Man," AND Creative Status is categorized as "Approved."  A File must match both conditions in order to be viewable.  If another Rule was added, assigned users would have permissions for Files matching EITHER rule.

---


## User Access Rules
User Access Rules control which other Users in the system a User will be able to see and/or modify.  They allow you to make it so that a User may only see others in their own department, for instance.
### Adding a User Access Rule
![](/img/users/user-access-rules-1.png)
After a User Role has been created, you can add Asset Access Rules.  With a User Role selected, choose the User Access Rules tab and click "+ Add Rule."
![](/img/users/user-access-rules-2.png)
Enter the name of the Rule, and click Save.
![](/img/users/user-access-rules-3.png)
With the Rule added, you can now set permissions for it.

---

![](/img/users/user-access-rules-4.png)
### Permissions
These boxes determine what a User can do with Users who match the Rule.
#### View Users
The User can view the profiles of Users matching this Rule.
#### Edit Users
The User can edit the profiles of Users matching this Rule.  Note that this does not allow the User to re-assign the Role of these other Users.
### User Associations
Click a User Association to add it to the list of Conditionals.  An Association is an attribute on a User's Profile, such as Company or Department.
### Conditionals
![](/img/users/user-access-rules-5.png)
Each Conditional is simply a filter.  You can add as many conditionals to a Rule as you'd like.  All Conditionals in a rule are ANDed together.  Users will match the Rule if they satisfy all of the conditionals.  For each Association Name, choose at least one Value to match. 
#### Association Name
The User attribute you are using to filter values.
#### Condition
Select either "Is" or "Is Not."
#### Value
The Value that a User must have in order to match.  You can add multiple Values to each conditional.  Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a Value.
#### Add Value
Click to select existing Values from a dropdown, and add them to the Conditional.
#### Remove Conditional
Remove the entire Conditional.
