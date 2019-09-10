---
id: manage-users
title: Manage Users
---

Use this section to view and modify User accounts in the system.
![](/img/users/user_manage_users_overview_1.png)

<span class="important">Note:</span> The User accounts you have access to view and modify will depend on the permissions granted to you. If you feel you need to see additional User accounts, or need the ability to modify User accounts, please contact your system Administrator.
## Manage User Elements
![](/img/users/user_manage_users_overview_2.png)
1. **User Browse** - Search and filter users
2. **Add User(s) Buttons** - Add a single user or group of users
3. **User Profile** - Profile details of a selected User
## User Browse
This section shows all available User accounts, and lets you search and filter within them.
![](/img/users/user_browse_1.png)
### 1. Search
Type a User's name to search by it, and click the <i class="fa fa-search" aria-hidden="true"></i> or press Enter to search.  To clear a search, delete the name and search again.
### 2. Add Filter
Click the +Filter button filter User’s accounts by their Company, Department, User Access Role the user belongs to, Device Type user has access to and User’s current Status in the system (active, locked or expired). You can apply multiple filters when searching for users.
![](/img/users/user_browse_add_filter_1.png)

Select a parameter to filter by.
![](/img/users/user_browse_filters_1.png)
#### Filter
Select a value to filter by.  You can add multiple filters at once.  Click the (  <i class="fa fa-minus" aria-hidden="true"></i>-) to remove a Filter.
#### Expand/Collapse Filters
Click to hide the filters.  Click again to show them.
#### Clear Filters
Remove all Filters to go back to the full list of Users.
### 3. Select All
Check this to select all currently loaded User Accounts. Once you select all (or check individual boxes next to users) you can Activate, Deactivate or Delete Users in bulk.
### 4. Users
Click on any User to view their profile. This box contains the User’s Name, an avatar if uploaded, the company, department, position and User Access Role that the user belongs to.  In the top right are the number of Access Overrides for the user outside of their role. It also displays if the User is Active in the system and is set up for Email notifications. 
![](/img/users/User-box.png)

---

## User Profile 
When you select a User in User Browse, the person’s User Profile will open on the right side.  Here you can view it, or edit it, if you have the proper permissions. 
![](/img/users/user_profile_1.png)
### Profile Tab 
This is where a User's account is set up when adding a New User for the first time or when Editing an existing user.
1.  **First Name** - The User's First Name
2.   **Last  Name** - The User's Last Name
3.   **Username** - The User's account name.  This is what a user uses to log in, and must be unique.
4.   **User Role** - What User Role the user is assigned to in CORE. User Roles determine what permissions a User has within the system, and which files, if any, they are allowed to access. User Roles must be created before they can be applied. If you do not know which Role to apply to a User, contact your system Administrator.
5.   **Email** - The email address linked to the account.  This is where notification emails from the system will be sent, including welcome emails for a new account, password reset notifications, and notifications of received packages, ingest notifications etc.
6.   **cc. Email Addresses** - cc.email addresses. This option is included so that another user can receive a CC of notifications that are sent to the main email addres associated with the account.  Most often used by assistants.
7.   **Language**  -  Currently English is the only language available.  Future enhancements will allow the system to be displayed in other languages to the User.  <span class="important">Note:</span> Changing the language of the entire system requires additional Administrative adjustments.
8.   **Timezone**  -If the timezone is set to Auto, it is set to your browser timezone. Admins can adjust user’s timezone if necessary.  Timezone is set to UTC time.  You can find your UTC timezone [here](https://en.wikipedia.org/wiki/List_of_time_zone_abbreviations).
9.   **Company**  - The Company the User works for. This field is used for filtering when searching for Users. If the User's Company does not exist in the list, type it into the space at the top of the list of companies and click Add New Value.
10.  **Department**  - The Department the User works in. This field is used for filtering when searching for Users. If the User's Department does not exist in the list, type it into the space at the top of the list of departments and click Add New Value.
 11. **Position** - The Position or title of the User within the company. This field is used for filtering when searching for Users. If the User's position does not exist in the list, type it into the space at the top of the list of departments and click Add New Value.
12.  **Phone Number** - The User's phone number
13.  **PDF Password** - PDFs can be sent to a User with password protection. Set the password that will be able to unlock any of these PDFs here.
14.   **Mobile Phone Number** - The User's mobile phone number.
15.   **SSO ID** - If your organization uses Single Sign-On, enter the User's SSO ID here.
16.  **Requested By** - If a User's account has been requested by another User, you can enter the Requesting User here.

---

## Profile - Activation
Below the main profile is the Activation section, which contains settings related to the account itself.. 
![](/img/users/Activation-1.png)
OFF for these settings means that the settings themselves are not turned ON.
 
 1. **Expiration** - When ON, administrators can set a date for a user’s account to expire, which will deactivate the account.  Accounts can be turned back on as needed. Especially good for contractors or temporary employees.
2. **Disable Notifications** - Activating this turns off all email notifications.
    * **Ready to Download** - When ON, a user will not receive notifications that their package is ready to download
    * **Ready to Stream Forensic Video** - Stops notification emails for forensically watermarked videos that are ready to stream
3.  **Force password reset on next login** - User must reset their password the next time he, she, or they log in
4. **Lock Account** - Locks out the user of the account. Typically used when someone is terminated.
5. **Is Sensitive** - Marks the user’s account as “Sensitive” which means other users cannot see them except for Administrators. Used notably for celebrities, well-known executives, etc.

--- 

## Add New User
 
 To add an individual user, 
1. Select +New User button.
2. Enter at minimum the required fields which have  <span style="color:red">red test*</span>
    - <span style="color:red">First Name</span>
    - <span style="color:red">Last Name</span>
    - <span style="color:red">Username</span>
    - <span style="color:red">User Role</span> (Learn how to create [User Roles ](/docs/user-roles))
    - <span style="color:red">Company</span>
    - <span style="color:red">Department</span>    
    - <span style="color:red">Position</span>    
3. Scroll to Activation, and turn on any requirements needed for the user.
4. Go back to the top, hit Save. Or Cancel if needed.
5. Page will refresh to an Existing User Profile
6. If  your user needs additional access not provided by their user role or another role in the system, and the rules are unique such that another user won’t need them via a new User Role, then go to Rules Override and make any needed changes. (Learn about overriding rules, or learn about creating [User Roles ](/docs/user-roles))
7. Save before leaving any tab where changes are made, i.e. Access Override, View Access Override, Edit Access Override, etc.
8. When changes are complete hit Save again as a safety measure.

If you want to enter more than one new user at a time, you can upload them via CSV.  Go to  [Adding Users via CSV ](/docs/manage-users.html#adding-users-via-csv). 

---

## Existing User Profiles

### Status
Whether the User's account is Active or not is displayed here, along with their most recent login date.
### User’s Full Name
This displays the User's Full Name (First and Last)as well as their Company and Department.
### Profile Image
Set an image for your profile.  Select the blank avatar and the Profile Image Editor will open.
![](/img/users/user-edit-profile-1.png)
#### Upload Image
Click Browse to select an image, or drag an image onto this area to upload it.
#### Edit Image
Once an image is uploaded, click and drag the <i class="fa fa-arrows" aria-hidden="true"></i> to position your image.  Click and drag the corners to shrink or enlarge the area being used.

![](/img/users/user-edit-profile-2.png)

-  <span class="linkStyle">**Preview**</span> -  A preview of your Profile Image will appear here.
- <span class="linkStyle">**Save**</span> - Click to save changes to your Profile Image.
- <span class="linkStyle">**Delete**</span> - Click to remove your profile image.

Once you’ve saved your image, the Profile Image Editor will close and your new avatar will appear. Your user profile does not need to be saved again in order to save the image. 

### Save 
Click this to save changes to the profile.  You may be asked to re-enter your password

### Cancel / Close
The  <span style="color:red">**X**</span>. Close the Profile without saving.

### Profile Admin Tools

Impersonate, Delete, Reset Password, and reset Multi-Factor Authentication by using these tools. These options are available to Admins only.
![](/img/users/Profile_Tools.png)

-  <span class="linkStyle">**Impersonate User**</span> -  Click this to view as selected CORE User. You will see exactly what the user would see in the CORE interface.  
-  <span class="linkStyle">**Delete**</span>  - Delete User
-  <span class="linkStyle">**Reset Password**</span> -  Click this to reset the User's password, forcing them to create a new password the next time they try to log in. Close the Profile without saving.
-  <span class="linkStyle">**Reset Google MFA App**</span> - Reset the User's Google Multi-Factor Authentication code.  The User will receive a new QR barcode from their Google Authenticator app and will need to scan the new QR code in order to log in again. <span class="important">Note:</span> Users who get a new Mobile device will need their Google MFA app Reset.

---

## Activity Tab
View activity of the User.  Most actions taken by a User are logged in the system and displayed here.  The actions can be filtered by the pull down on the right or limited by the date range.
![](/img/users/Activity-1.png)

---

## Rules Overide Tab
In some cases, you may wish to alter a User's Permissions, but not those of anyone else in their User Role. Rather than create a unique User Role just for them, you can override permissions in their role, which will apply just to them

### Access Override
Access Overrides are general permissions overrides, such as edits to Administrative Settings, Device modifications, how users can send and receive packages, or what Productions they can navigate.

![](/img/users/user-profile-override-overview-1.png)

#### Dropdown Override Example - MFA Type
In the example shown above, the MFA type  (highlighted in blue) has been changed to  [Google Multi-factor authentication ](/docs/mfa-login), overriding the User’s original login settings, which were None. 

#### Multi-Select Example - Allow Download With Watermark
When an edit is made to the Multi-Select fields, red dotted lines show up around the item that has been added as an override.
 
<span class="important">Note:</span> You cannot change another User's Permissions to give greater access than what you already have.  This means if you are an Asset Manager with limited Administrative overrides, you can’t give yourself or anyone else full Administrator capabilities.  [See User Roles topic for more information.](user-roles.md)  


### Multi-Select Fields
In these boxes, you can multi-select fields to override the user’s original access to these fields granted in their User Role.
![](/img/users/user-profile-access-multi-select-5.png)
Available Multi-select field options for Overrides:
- **Domain -** Select which Domains will be available to the user when categorizing files
- **Package share types  -**  Choosing Standard and/or Dailies options 
- **Package share download options -** Choosing Recipient settings, view only and/or allowing download with or without watermarks
- **Production -**  Select which Productions will be available for User


### Dropdown Fields
The Override options available in these fields will be those you have permission to assign. If the option selected is different from that of the User's Role, the name of the field will be highlighted in blue, to indicate that you have made a change and overridden that user’s User Role.
![](/img/users/user-profile-access-dropdown-1.png)

Available Dropdown Fields for Overrides: 
- **User Access Level -**  The primary determinant of what permissions and abilities the User has in the system 
    - <span class="important">Important:</span>  All users are Standard Users with additional permissions added from there. The Admin choice is only able to be chosen by other Admins.  Admins do not need additional permissions added as overrides as they have access to all domains, productions and assets in the system.  Exception to this rule is Mobile Download which must be enabled as an option for any user level.
- **Authentication Type -**  - If your organization uses Single Sign On, select it here 
- **Redirect on Login -** Select which view the User will see when they first log in either their Inbox or if File Search is an option for the user they can be directed to either.
- **MFA Type -**  If you would like to Override the setting in the User’s role regarding Google Authenticator for Multi-Factor Authentication you can adjust it here.
- **Save Access Level -** <span class="important">Important:</span> *Controls whether the User can download files from the system.*  Proxy, which are duplicate files of the original source that are lower in resolution and smaller in file size. Or Source and Proxy where the original source file and proxy are both available.
- **Player Type -**  Player type in asset viewer.  It can be Flash or HTML5 video. Default is set to Flash.
![](/img/users/Watermark_Example_1.png)
- **Image Watermark -** Toggle between standard or no watermark. Custom watermarks are available upon request to CORE from the system Administrator.
- **PDF Watermark -** Toggle between standard or no watermark. Custom watermarks are available upon request to CORE from the system Administrator.
- **Video Watermark -** Toggle between standard or no watermark. Custom watermarks are available upon request to CORE from the system Administrator.

### Checkbox Fields
You can change any fields in this section that you have permission to access.  If you change the default, the name of the field will be highlighted in blue.
If you do not have permission to change a field, it will be grayed out.   
![](/img/users/user-profile-access-checkbox-1.png)

Available Checkbox Fields
- **Admin -** 
    - **Role Manager -** Create new Roles, and modify existing Roles. A user can never create another account or Role with higher permission that they themselves have
    - **Upload Manager -**  View and categorize uploads made by other Users 
    - **Queue Manager -**  View and re-prioritize jobs in the Processing Queues.  (not yet available)
    - **Download Manager -** View and download items assigned to other users
    - **View Private Conversations -** View all Comments on files that you have access to, even if they are marked private
    - **Change Watermark -** Ability to change the watermark when downloading ffiles.  With this enabled, Users can change the watermark style, and also the Username on the watermark. 
- **User -** 
    - **Disable License Agreement** - Users are required to agree a License agreement when logging in but clicking this box can disable this option for a user.
    - **Create Users -** Allows user to see the + New User button in the Manage User area. User will be able to add new Users for the same permission level or below that they are in the system. Additional User Access Rules are necessary to limit the user further.
     - **Upload Assets -** Allows users to upload assets into the system. Additional Edit Access Rules are necessary to limit the user further.
     - **Print -** Allows users to print assets in the system that are printable like PDFs.
- **Package -** 
    - **Package Manager -** Packages shared with a Standard User who has this additional permission do not have any restrictions that a sender may have put on the package. The exception to this rule is expiration dates or views allowed for the package. 
    - **Package Reports -** Allows user to run reports on package access, views, downloads etc. 
    - **Mobile Downloads -** Allows users who are sent a package, with download with or without watermark permissions, to store packages/files offline on their mobile device for viewing with no wifi access.
- **Device -** 
    - **All -** Allows user to access CORE from Desktop browser, iOS app or AppleTV app.
    - **Desktop -** Allows user to access CORE from Desktop only.
    - **TV -** Allows user to access CORE from the AppleTV app only.
    
### View Access Rules
View Access Rules control what Files a User can view, and optionally, what additional information about them they can view.
<span class="important">Important:</span> If you make overrides to the View Access Rules in this section you will be overriding the Rules set up for the user in their assigned User Role. 

For steps on how to edit ‘View Access Rules’ see:  [View Access Rules](/docs/user-roles.html#view-access-rules)  
![](/img/users/View-Access-Rules.png)

### Edit Access Rules
Edit Access Rules control what Files a User can edit. Files matching an Edit Access Rule will be both viewable and editable by Users assigned to the Role. <span class="important">Important:</span> If you make overrides to the Edit Access Rules in this section you will be overriding the Rules set up for the user in their assigned User Role.

For steps on how to edit ‘Edit Access Rules’ see:  [Edit Access Rules](/docs/user-roles.html#edit-access-rules)  

![](/img/users/Edit-Access.png)
### User Access Rules 
User Access Rules control which other Users in the system a User will be able to see and/or modify. They allow you to make it so that a User may only see others in their own department, for instance. <span class="important">Important:</span>If you make overrides to the User Access Rules in this section you will be overriding the Rules set up for the user in their assigned User Role.  

For steps on how to edit ‘User Access Rules’ see: [User Access Rules](/docs/user-roles.html#user-access-rules)  

![](/img/users/User-Access.png)

---
 ## Audit Login
Audit and monitor detailed user sessions with this tool 
![](/img/users/Audit-Login.png)

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
* <span class="important">*</span><strong>role</strong> - The User's Role in the system.  [See User Roles topic for more information.](user-roles.md)  <span class="important">This must match the name of an existing role EXACTLY, and is case-sensitive.</span>

### Importing from CSV
Click the <span class="buttonstyle">Import from CSV button</span> and select the CSV file from your file system.
![](/img/users/add-user-template-1.png)
