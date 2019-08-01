---
id: suspicious-activity
title: Suspicious Activity
---

The 5th Kind system constantly monitors all activity for suspicious behavior, and logs anything it finds.  The Suspicious Activity page allows Admins the ability to see all requests made to the system which have been flagged as suspicious.
![](/img/admin/suspicious-activity/suspicious-activity-overview-1.png)

##  Filters
Use these filters to view an activity report based on a date range, specific User, or specific security issue.
![](/img/admin/suspicious-activity/suspicious-activity-filters-1.png)

### Date Range
Add a Start and End Date to the Date Range to filter the report by inputs within that range.

### User
Use this dropdown to view only inputs from a specific User.  You can type in this field to search for names.  Click the <i class="fa fa-times" aria-hidden="true"></i> button to clear it.

### Security Issue
Use this dropdown to view only inputs of a specific Security Issue type.  You can type in this field to search for Issue types.  Click the <i class="fa fa-times" aria-hidden="true"></i> button to clear it.

---

## Report
View the results of the report here.
![](/img/admin/suspicious-activity/suspicious-activity-report-1.png)

### userInput
This field shows the request made by the User.  Click the <i class="fa fa-caret-right" aria-hidden="true"></i> icon to expand this and view the full request, as well as the Filter Match from the system, which is the portion of the request that was flagged as a security issue.

### userId
The internal ID # of the User who made the request.

### idsId
The internal ID # of the issue found by 5th Kind's Intrusion Detection System.

### idsDescription
The description of the issue found by 5th Kind's Intrusion Detection System.

### tags
The category or categories of the issue.

### impact
The severity of the issue, on a scale from 1-5.

### message
The message from the Intrusion Detection System regarding the issue found.

### type
The type of issue found.

### user
The Username of the User who made the request.

### eventTime
The time the request was made.