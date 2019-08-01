---
id: configure-emails
title: Configure Emails
---

This page allows you to customize the welcome email that is sent when a User is invited to 5th Kind for the first time.  You can modify it or replace it entirely.  

![](/img/admin/configure-emails/configure-emails-overview-1.png)

The welcome email must be written in HTML.  Click <span class="buttonstyle">Save changes</span> to save your custom email.

To reset to the default email message, click the "Reset message" button. 

## Template Variables
You can include a number of variables in the email that will be customized for each User, such as their Username.  Enter the variables inside curly braces, as shown in the default message.

### Variables
 * **{{ firstName }}** - The User's first name
 * **{{ lastName }}** - The User's last name
 * **{{ username }}** - The User's Username
 * **{{ web }}** - The URL of your system
 * **{{ oneTimeToken }}** - A system variable needed for the User to verify their account upon first login
 * **{{ oneTimePin }}** - A system variable needed for the User to verify their account upon first login
 * **{{ companyLogo }}** - Your company's logo
 * **{{ companyName }}** - Your company's name
 * **{{ url }}** - The URL of your system
 
