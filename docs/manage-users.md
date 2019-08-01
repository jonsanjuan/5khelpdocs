---
id: manage-users
title: Manage Users
---

Use this section to view and modify User accounts in the system.
![](/img/users/user_manage_users_overview_1.png)

<span class="important">Important:</span> The User accounts you have access to view and modify will depend on the permissions granted to you.  If you feel you need to see additional User accounts, or need the ability to modify User accounts, please contact your Administrator.
![](/img/users/user_manage_users_overview_2.png)
## User Browse
This section shows all available User accounts, and lets you search and filter within them.
![](/img/users/user_browse_1.png)
### Search
Type a User's name to search by it, and click the <i class="fa fa-search" aria-hidden="true"></i> or press Enter to search.  To clear a search, delete the name and search again.
### Add Filter
Click the +Filter button filter User accounts.
![](/img/users/user_browse_add_filter_1.png)
Select a parameter to filter by.
![](/img/users/user_browse_filters_1.png)
#### Filter
Select a value to filter by.  You can add multiple filters at once.
Click the <i class="fa fa-times" aria-hidden="true"></i> to remove a Filter.
#### Expand/Collapse Filters
Click to hide the filters.  Click again to show them.
#### Clear Filters
Remove all Filters.
### Select All
Check this to select all currently loaded User Accounts.
### Users
Click on any User to view their profile.

---

## User Profile
View or edit a User's profile.
![](/img/users/user_profile_1.png)
### User Profile
This is where a User's account is set up.
#### First Name
The User's First Name
#### Last Name
The User's Last Name
#### Username
The User's account name.  This is what a user uses to log in, and must be unique.
#### Email
The email address linked to the account.  This is where notification emails from the system will be sent, including welcome emails for a new account, password reset notifications, and notifications of received packages
#### Reset Password
Click this to reset the User's password, forcing them to create a new password the next time they try to log in.
#### Reset Google MFA App
Reset the User's Google Multi-Factor Authentication password.  The User will need to scan the QR code in order to log in again.
#### Company
The company the User works for.  This field is used for filtering when searching for Users.  If the User's company does not exist in the list, click the <i class="fa fa-plus" aria-hidden="true"></i> button, then enter the company and click the Save button.
#### Department
The department the User works for.  This field is used for filtering when searching for Users.  If the User's department does not exist in the list, click the <i class="fa fa-plus" aria-hidden="true"></i> button, then enter the department and click the Save button.
#### Position
The position the User works for.  This field is used for filtering when searching for Users.  If the User's position does not exist in the list, click the <i class="fa fa-plus" aria-hidden="true"></i> button, then enter the position and click the Save button.
#### Role
What User Role the user has in the system.  User Roles determine what permissions a User has within the system, and which files, if any, they are allowed to access.  User Roles must be created before they can be applied.  If you do not know which Role to apply to a User, contact your Administrator.
#### Language
Which language the User reads.  The system will be displayed in this language to the User.
#### Phone Number
The User's phone number.
#### PDF Password
PDFs can be sent to a User with password protection.  Set the password that will be able to unlock any of these PDFs here.
#### Mobile Phone Number
The User's mobile phone number.
#### SSO ID
If your organization uses Single Sign-On, enter the User's SSO ID here.
#### Requested By
If a User's account has been requested by another User, you can enter the Requesting User here.

---

### Status
Whether the User's account is Active or not is displayed here, along with their most recent login date.
### User Name
This displays the User's name, as well as their Company and Department.
### Emulate User
Click this to view 5th Kind as selected User.  You will see exactly what the user would see in the 5th Kind interface.  <span class="important">This feature is only available to Admins.</span>
### Save
Click this to save changes to the profile.  You may be asked to re-enter your password.
### Close
Close the Profile without saving.

---

### Profile Image
Set an image for your profile.
![](/img/users/user-edit-profile-1.png)
#### Upload Image
Click Browse to select an image, or drag an image onto this area to upload it.
#### Edit Image
![](/img/users/user-edit-profile-2.png)
Once an image is uploaded, click and drag the <i class="fa fa-arrows" aria-hidden="true"></i> to position your image.  Click and drag the corners to shrink or enlarge the area being used.
#### Preview
A preview of your Profile Image will appear here.
#### Save
Click to save changes to your Profile Image.
#### Delete
Click to remove your profile image.

---

## Activity
![](/img/users/user-profile-activity.png)
View activity of the User.  Every action the User has taken is logged in the system, and displayed here.

---

## Access
In some cases, you may wish to alter a User's Permissions, but not those of anyone else in their User Role.  Rather than create a unique User Role just for them, you can use this tab to override Permissions in their Role, which will apply just to them.
![](/img/users/user-profile-access-overview-1.png)

Note that you can never change another User's Permissions to give greater access than what you already have.  [See User Roles topic for more information.](user-roles.md)  

### Multi-select Fields
![](/img/users/user-profile-access-multi-select-1.png)
The options selected in the User's Role will be highlighted with a red border.  You can select other options to change them.

### Dropdown Fields
![](/img/users/user-profile-access-dropdown-1.png)
The options available in these fields will be those you have permission to assign.  If the option selected is different from that of the User's Role, the name of the field will be highlighted in blue, to indicate that you have made a change.

### Checkbox Fields
![](/img/users/user-profile-access-checkbox-1.png)
You can change any fields in this section that you have permission to access.  If you change the default, the name of the field will be highlighted in blue.
If you do not have permission to change a field, it will be grayed out.   

---


## Adding Users via CSV
To batch import Users, you can use the Import from CSV option.  This feature allows you to create a CSV file containing the important details of multiple Users at once, and add them simultaneously.

### Creating a CSV
<span class="important">The CSV file you upload must contain the correct field names, and must be encoded as comma-delimited.</span>
![](/img/users/add-user-template-2.png)
<a href="../../files/users/add-user-template.csv" download>Click here to download the CSV template.</a>
#### <strong>Fields</strong>
Fill out the fields below for each user you would like to add.  <span class="important">*Indicates mandatory field</span>
* <span class="important">*</span><strong>username</strong> - The User's name in the system.  This must be unique.
* <span class="important">*</span><strong>firstName</strong> - The User's first name.
* <span class="important">*</span><strong>lastName</strong> - The User's last name.
* <span class="important">*</span><strong>email</strong> - The User's email address.
* <span class="important">*</span><strong>company</strong> - The company the User works for.
* <span class="important">*</span><strong>department</strong> - The department the User works in.
* <span class="important">*</span><strong>position</strong> - The User's position in their company.
* <strong>startdate</strong> - The date when the User's account will become enabled in the system.  If this is filled out, the User's account will be locked until the date.  If it's left blank, it will have no effect, and the User's account will be enabled immediately.
* <strong>enddate</strong> - The date when the User's account will become locked in the system.  If this is filled out, the User's account will automatically be locked after the date.  If it's left blank, it will have no effect, and the User's account will be enabled indefinitely.
* <span class="important">*</span><strong>role</strong> - The User's Role in the system.  [See User Roles topic for more information.](user-roles.md)  <span class="important">This must match the name of an existing role EXACTLY, and is case-sensitive.</span>

### Importing
Click the <span class="buttonstyle">Import from CSV button</span> and select the CSV file from your file system.
![](/img/users/add-user-template-1.png)
