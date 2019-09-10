---
id: tag-structure
title: Tag Structure
---

The Tag Structure module is the heart of CORE's metadata management. This is where you define the metadata (aka tag) structures that will determine how your Files are categorized.

---
## Overview
5th Kind’s CORE does not use traditional folder structures for organizing, categorizing, and controlling access to Files.  Instead, those tasks are based solely on how Files are tagged. The Tag Structure module is where system Administrators define how users will categorize files on upload.  As an Admin, you’ll create the hierarchy of your metadata, the content of Tag Fields, and the details about them.
![](/5khelpdocs/img/admin/tag-structure-overview-1.png)   


---
## The Anatomy of the Tag Structure Module
In this section, you will learn the different parts of the Tag Structure Module.
### Tag Structure Module Components

In CORE, to access the Tag Structure Module, you must be an Admin level user.

1.  ![](/5khelpdocs/img/admin/Image_02.png) Go to the Admin Module in the Left Navigation Bar.      
2. ![](/5khelpdocs/img/admin/Image_03.png) Select the Sub-Module Tag Structure. 

In Tag Structure, there are two primary work areas: 
* On the left is the Left Tag Types Panel. 
* On the right is where Tags are created, edited, and defined. 

![](/5khelpdocs/img/admin/tag-structure-tag-values-overview-2.png) 


**Left Tag Types Panel**

The Left Tag Types Panel contains your list of Domains, the button that creates Domains, and the list of Tag Groups and their respective Tag Fields associated with the Domains. 

![](/5khelpdocs/img/admin/LeftTagTypesPanel.png) 


Each Tag Group is identified by the tag icon and a bold title name. 

![](/5khelpdocs/img/admin/tag_group.png) 


**Tags Area**

To the right of the Left Tag Types Panel, is the Tags Area where Fields and Values are defined. There are essentially two tabs or sections to this part of the module:  

* The Tag Fields section 
* The Tag Values section

![](/5khelpdocs/img/admin/tags_area.png) 


In the Tag Fields section, is the Tag Hierarchy or Tag Tree, the Tag Field Domain Options, and to their right, the Descriptive Tags section. Descriptive Tags are a type of Tag Group often defined as metadata about metadata.  We’ll detail that more below. 

![](/5khelpdocs/img/admin/TagStructure.png) 


In the Tag Values section, you can manage values for a selected Tag Field. There’s the Domain dropdown to select the Domain that you will use for that Tag Field, the Tag Value Boxes where Tag Values for that Tag Field are listed. The Tag Value Input Field is found below the boxes. Here users can add, edit, and delete Tag Values.

![](/5khelpdocs/img/admin/TagValues.png) 


In the case of Descriptive tags, data and status color associations can also be added here just below the Tag Value Input. 

![](/5khelpdocs/img/admin/tag_descrriptions.png) 


---
## Domains

### What is a Domain
In CORE, a Domain is essentially a top-level category that lets you decide what metadata fields will apply to what type of content. Said a different way, it’s a type of workflow that defines the structure in which files are organized.
 
When a User uploads Files, they select a Domain. That Domain has a specifically organized tag structure called a taxonomy, as well as other associated tags that help make the files searchable.  When the files are uploaded, the user tags them according to the structure defined by the Domain. 

<div class="mytestdiv">
    <div class="leftdiv"><img src="/img/admin/Admin_User.png" width="100px"></div>
    <div class="rightdiv"><img src="/img/admin/end_user.png" width="100px"></div>
</div>


|  Admin User’s View    |  End User’s View When Uploading Files  |
|---|---|
|  ![](/5khelpdocs/img/admin/Admin_User.png) | ![](/5khelpdocs/img/admin/end_user.png)|

Domains allow Files for different project types to be categorized into different groups. These groups are defined by their tags, also known as metadata.  For example, television shows need an organizational structure that includes Season and Episode, while feature films do not.  Because their organizational needs are different, these two media formats are represented in separate Domains.

![](/5khelpdocs/img/admin/domains.png)

<i class="far fa-lightbulb"></i> **CORE Tip: A Domain is Not a project.**

Multiple projects using the same workflow or organizational structure can fall under the same Domain. 
Selecting the Domain dictates the required Tag Fields--the metadata fields a user sees when tagging a file.
A Domain also dictates structure, the order of visible tags associated with an Asset group, and what the user sees in the Browser panel.

### Ways a Domain Can Be Used and Why

In this section you’ll learn how Domains can be used for Permission-ing and DAM organization.

**Domains can be used for Permissioning**

For example, a company that has TV, Film and Online content might have a unique Domain for each. 
Certain users would have access to one Domain based on their position at the company, but wouldn’t have access to any content in another Domain.

So think of Domains as having far reaching permission capabilities as well as a unique tagging structure.

**Domains can be used for Digital Asset Management Organization**

Every industry is different, and while Domains are helpful in reflecting and complementing workflows, they’re also useful for organizing the DAM itself.  Domains can be organized by industry, client type, or company departments.
For instance, a company that has different divisions, such as Home Electronics, Personal Electronics, Phones, and Media Solutions, might have a domain for each. Or, let’s say a company’s clients’ industries vary from Automotive to Shoes to Dog Food and Accessories.  The company would create a Domain for each industry respectively.

![](/5khelpdocs/img/admin/tag_types.png)

Domains are an organizing tool that enable companies to organize their materials according to their own organization.

<i class="far fa-lightbulb"></i> **CORE Tip: Domains are Permanent**

When creating your Domain name, make sure it is approved for use and spelled correctly. Once a Domain is created, it cannot be edited or deleted.

### How to Create a New Domain

To create a Domain
1. Go to the Left Tag Types Panel  
2. Select the + button next to the Domain dropdown menu
3. Enter the name of your Domain
4. Save 

![](/5khelpdocs/img/admin/Create_domain.png)


You’ve now completed the first step in building a taxonomy.

### How to Filter Tag Groups and Tag Trees by Domain

Filtering by your desired Domain shows only the metadata fields that apply to it.  When creating new Domains, Groups, and Fields, check your work by filtering to the updated Domain.
1. Go to the Domain dropdown field at the top of the Left Tag Types Panel.
2. You can find your Domain listed alphabetically in the Dropdown list.
3. Select it.
4. The Left Tag Types Panel will filter to show only the Tag Groups and Tag Fields associated with that Domain.  
5. Then select a Tag Field in the Left Tag Types Panel, the corresponding Tag Tree or Tag Hierarchy will appear in the main area on the right.  When filtered by Domain, the Tag Tree will reflect the same Tag Fields and hierarchy that is listed in the filtered Tag Group.

![](/5khelpdocs/img/admin/Filter_tag_groups.png)

No Tag Groups are associated with a new Domain. They must be added or connected.  So when you filter by a new Domain, there will be no Tag Groups shown in the Tag Groups list except for File Info. 

![](/5khelpdocs/img/admin/tag_types3.png)

To see all fields again, set Domain to All. For new Domains, you now can build out your taxonomy by adding existing or new Tag Groups and Tag Fields to it.

<i class="far fa-lightbulb"></i> **CORE Tip: Domain Visibility is Determined by User Permissions**

If you as a user can see only one Domain in your list when uploading files, that means you have permission to just that one Domain.  What you see as a user is dependent on the permissions you have been granted by your CORE system administrator.

---

## Tag Groups

### What is a Tag Group

A Tag Group is a set of metadata fields that are grouped together. They are often determined by a common set of values, such as subject matter or use, and their names typically define the set of characteristics that make up a Tag Group, i.e. Structure, Status, Game, etc. 

![](/5khelpdocs/img/admin/tag_groups.png)

A Tag Group can contain a simple list of tags or have tags with a hierarchical relationship to each other.  
A hierarchical relationship is based on levels - Tag Fields that are level(s) above another—and subordination—Tag Fields that are level(s) below another.  In this relationship, the superordinate Tag Field represents a class or a group type, in which the subordinate Tag Fields are its members or parts.
For the tag groups with a hierarchy structure, when users chose one Tag Field at a certain level, the below level Tag Fields’ tag values will adjust to show different values.  These Tag Values are defined by Parent Tag Values in the Domains Options setting. 

![](/5khelpdocs/img/admin/Nested_Listed_tags.png)

Tag Groups are customizable to contain as few or as many Tag Fields that are relevant to that group and domain.  To filter the Tag Groups you see, select a Domain for your desired view. 

![](/5khelpdocs/img/admin/Tag_types_Filtered_Tags_groups.png)

### Types of Tag Groups

In CORE, there are four different types of Tag Groups:

1. Structural
2. Associated
3. Inherited
4. Descriptive

|  Structural   |    |
|---|---|
| The Structural Tag Group is the type that defines the tag structure for all asset groups and files. It’s the core categorization method for CORE. | ![](/5khelpdocs/img/admin/Tag_Structual.png)|
|  **Associated**  |    |
| Associated Tag Groups are Tag Groups providing additional data around files. They are defined by a common set of values.  Examples of Associated Tag Groups are Production, Status, and Project Info. | ![](/5khelpdocs/img/admin/Tag_Associated.png)|
|  **Inherited**  |    |
| Inherited Tag Groups automatically import metadata when a file is uploaded, because it is data inherited from the files themselves. Examples of Inherited Tag Groups are File Info and Camera. | ![](/5khelpdocs/img/admin/Tags_Inherited.png)|
|  **Descriptive**  |    |
| The Descriptive Tag Groups are often described as metadata about metadata. They are a second layer related to existing data found in Tag Fields by providing additional information and color status options. Descriptive Tags can literally be about anything. This section can be used to build out entire databases around a specific Tag Field. 

For instance, if you had a field named "Car Manufacturer," you could add associated fields such as “Number of Dealerships,” "Address," and "Phone Number" to it. Or, if it were a movie, you could associate “Genre” and “Director” with the Tag Field “Production.” Or if you had a “Brand Website” Tag Field you could associate whether or not it was “A/B Tested.”

![](/5khelpdocs/img/admin/Tag_Descriptive.png)

### Tag Groups Order

When you first arrive in the Tag Structure Module, the default view in the Left Tag Types Panel is a complete list of All Tag Groups and Tags.  

- The Structural Tag Group is always listed at the top
- Followed by Associated Tags
- At the very bottom, is File Info, the Inherited Tag Group.  

It’s currently not possible to change the order of the Tag Groups. When a new Tag Group is added, it appears at the bottom of the list above the File Info Tag Group.

### How to Create a Tag Group

To create a new Tag Group, click the  New Tag Group button at the top of the Left Tag Types Panel.

![](/5khelpdocs/img/admin/create_tag_group.png)

Then enter the Group name and click Save.

![](/5khelpdocs/img/admin/add_new_Taggroup.png)

### How to Edit the Name of a Tag Group

Tag Group Names cannot be edited or deleted at this time.  

<i class="far fa-lightbulb"></i> **CORE Tip: Define Your Tag Groups Before Creating Them**

When creating your Tag Group names, make sure they are approved for use and spelled correctly. Once a Tag Group is created, it cannot be edited or deleted.

### How to Edit the Contents of a Tag Group

File Info is the default Tag Group for all metadata automatically imported from your files. File Info cannot be changed or added to by a user.  All other Tag Groups, however, can be edited.

To edit the contents of an existing Tag Group, users can do any of the following:
1. Select an existing Tag Field and delete it.
2. Select an existing Tag Field and modify it by:
    - Changing its name
    - Changing its Field Type
    - Changing its Domain Options
    - Changing its Tag Values
    - Changing its order within the Tag Group by Drag and Drop 
    - Add a new Tag Field by selecting the Tag Group’s name

For more detailed instructions about how to perform these actions, please read through the remainder of the Tag Structure chapter.

---

## Tag Fields

### What is a Tag Field

Tag Fields are the Fields a User will choose from when uploading and tagging assets. They are used to organize files and are the main categories for your project, such as Production Name, Department or Asset Type.

| Administrator View of Structure Tag Group’s Tag Fields in Tag Tree   |  User View of Tag Fields in Asset Viewer During Upload  |
|---|---|
| ![](/5khelpdocs/img/admin/Admin_view.png) | ![](/5khelpdocs/img/admin/User_view.png)|

The fields also appear in File Search Filters and in the Asset Details Panel of the Asset Viewer.

**File Search - Filter Tab - Structural Tag Fields**

![](/5khelpdocs/img/admin/File_search.png)

**Asset Viewer - Asset Details - Tag Fields**

![](/5khelpdocs/img/admin/Asset_Viewer.png)

### Elements of the Tag Field Section

**Tag Field Section Overview**

1. Tag Fields Tab
2. Tag Tree
3. Tag Field Domain Options
4. Descriptive Tags Section

![](/5khelpdocs/img/admin/Elements_of_Tag_Field_Section.png)

**Elements of the Tag Tree**

The Tag Tree is where Admins can create and edit a Tag Field.

![](/5khelpdocs/img/admin/Elements_tag_tree.png)

1. **Field Name** - A text input field where you can add or edit the name of a Tag Field.
2. **Field Type** - A dropdown list where you can select the method a user will use to enter the value of a Tag Field. Entry types include the following:

| Administrator View of Structure Tag Group’s Tag Fields in Tag Tree   |  User View of Tag Fields in Asset Viewer During Upload  |
|---|---|
|   a. Hidden - The field will not appear in the interface, but you can access this field through the API.
b. Input - A Text field. You can enter any type of text into this field.
c. Dropdown - A field where you can select from a pre-specified list of values. Depending on the settings, a User may also be able to add their own values.
d. Dropdown Multiselect - A field where you can select one or more value from a pre-specified list of values. Depending on the settings, a User may also be able to add their own values.
 | ![](/5khelpdocs/img/admin/User_view.png)|


e. Radio {: .gitlab-purple} - A field where you must select one circular button option from a list of values.
f. Checkbox - A field where you can check one or more values from a list of values.
g. Date - A field where you can enter a date. When editing the field, you'll be able to use a date-picker widget to help you.
h. Text Area - A large input area field where you can enter long text notes and messages. 
i. STATUS - A field where you can create different status values and attribute a different color to each of them, which will then appear on a File’s thumbnail when a status value is entered.








---
---
---
Users are often given access to CORE based on a Domain.   
### Filter by Domain Purpose
To see only the metadata fields that apply to a particular Domain Purpose, select the Domain Purpose from the Domain Purposes dropdown.  To see all fields again, set Domain Purposes to All.
![](/img/admin/tag-structure-tag-group-domain-purpose.png)
### Selecting a Metadata Field
Click on any metadata field in a Tag Group to view and edit it.

---
## Tags Info
This section lets you create and modify the metadata fields you will use to categorize your Files, and also lets you create hierarchical relationships between them.
![](/img/admin/tag-structure-tag-info-1.png)
### Tags Information
![](/img/admin/tag-structure-tag-info-fields-1.png)
### Field Name
Enter the name of the field.  This can be changed at any time.
### Field Type
The Field Type lets you select the type of data that will be stored in a field.
![](/img/admin/tag-structure-field-types-1.png)
#### Hidden
The field will not appear in the interface, but you can access this field through the API.
#### Input
A Text field.  You can enter any type of text into this field.
#### Dropdown
A field where you can select from a pre-specified list of values.  Depending on the settings, a User may also be able to add their own values.
#### Dropdown Multiselect
A field where you can select one or more value from a pre-specified list of values.  Depending on the settings, a User may also be able to add their own values.
#### Radio
A field where you must select one option from a pre-specified list of values.
#### Checkbox
A field where you can select one or more value from a pre-specified list of values.
#### Date
A field where you can enter a date.  When editing the field, you'll be able to use a date-picker widget to help you.
#### Text Area
A field where you can enter a large amount of text.  When editing the field, you'll be presented with a large input area to write your text.
#### FILE
A field where you can upload a File.
#### Status

#### COLOR

### Adding a Field
After clicking on the Tag Group name, you will see a space for a new field.  Enter the name of the field, and select the field type.  This will add it to the system.  To add a child field to an existing field, click the <i class="fa fa-plus" aria-hidden="true"></i> button next to it.  You'll be prompted to enter the field name and select its type.
### Re-ordering Fields
To change the order of a field, click and drag the <i class="fa fa-arrows-v" aria-hidden="true"></i> handle next to it, then drop it in the desired position.
### Editing a Field
To edit a field, click on it in the Tag Group panel, or click the <i class="fa fa-pencil-alt" aria-hidden="true"></i> next to it.
### Deleting a Field
To delete a field, click the <i class="fa fa-trash" aria-hidden="true"></i> icon next to it.  Note that you cannot delete a field that is currently being used to categorize Files.  You must first re-categorize any Files using the field before deleting it.
### Field Options
These settings control how the metadata field will behave.
![](/img/admin/tag-structure-field-options-1.png)
#### Structural
Structural metadata determines the categorization in 5th Kind.  Files that share the same Structural Metadata are grouped together, and browsable in a virtual directory structure, similar to what you may be used to on your desktop.  Setting a field to Structural means that it will be used in the core categorization.
#### Restrict values to domain purpose
If set to True, the values entered under any Domain Purpose will only be available under that Domain Purpose.  If set to False, any values entered for this field will be available under any Domain Purpose.
#### Restrict values by parent values
If the field is nested under a parent field, setting this option to True will mean that any value you enter will only be available under the corresponding parent value.  For instance, imagine you had a field named "Car Manufacturer," and a nested field underneath named "Car Model."  If you have a File with "Car Manufacturer" set to "Honda," and enter the value "Civic" for "Car Model," the value "Civic" will only be available for Files with "Car Manufacturer" set to "Honda" if this option is enabled.  If it is disabled, "Civic" would be available under any "Car Manufacturer.
### Domain Purpose Options
A Domain Purpose is essentially a project type.  Project Types share the same sets of metadata fields, and the same rules.  Adding a Domain Purpose to a field makes the field available for that Domain Purpose.  Each field must appear under at least one Domain Purpose.
#### Required
If this is selected, the field will become required when a File is set to the selected Domain Purpose, and a File will not be able to be submitted without setting a value for the field.
#### Locked
If this is selected, only values that are pre-populated can be used, and Users are not able to add new values when submitting or categorizing Files.
#### Add Domain Purpose
Click the <i class="fa fa-plus" aria-hidden="true"></i> button to add a Domain Purpose to the field.  The field will now be available underneath this Domain Purpose.
#### Remove Domain Purpose
Click the <i class="fa fa-minus" aria-hidden="true"></i> icon to remove the Domain Purpose from the field.  The field will no longer be available underneath the Domain Purpose.

---
## Descriptive Tags
Descriptive Tags allow you to add metadata to your metadata.  For instance, if you had a field named "Car Manufacturer," you could add fields such as "Address" and "Phone Number" to it.  These fields are searchable within the interface, so that you can see them at a glance when viewing files, and you can also search by them.
![](/img/admin/tag-structure-descriptive-tags-1.png)
### Adding a Descriptive Tag Field
To add a Descriptive Tag field to an existing metadata field, just click the <i class="fa fa-plus" aria-hidden="true"></i> icon in the Descriptive Tag section.  Enter a name for the field, and select the type.
### Editing a Descriptive Tag Field
You can change a field's name and type at any time.  Just click in the name box to edit it, or click the Type dropdown to change the type.
### Deleting a Descriptive Tag Field
To delete a Descriptive Tag Field, click the <i class="fa fa-trash" aria-hidden="true"></i> icon next to it.

<i class="far fa-lightbulb"></i>

---
## Tag Values
This section lets you manage values for a selected metadata field.  With a field selected, either in the Tag Group or Tag Structure view, click this tab to add values to a metadata field, and see what values are already in use.
![](/img/admin/tag-structure-tag-values-overview-1.png)
### Selecting Domain Purpose
Field values are filtered by Domain Purpose.  Select a Domain Purpose from the dropdown to view values that have been entered for it.
![](/img/admin/tag-structure-tag-values-domain-purpose-1.png)
### Viewing existing values
Select a metadata field from the Tag Info tab or from the Tag Group side panel.  Values that have already been entered will be viewable in a box underneath the field name, along with the number of Files that have been categorized with them.
![](/img/admin/tag-structure-tag-values-view-1.png)
### Viewing Values for Nested Fields
If a field is nested, its values may be dependent on its parent values.  Therefore, to view its values, you must first select a value from its parent field.  Clicking on a nested field will display all of its parent fields as well.  Click on a value from the parent field to view all values that are nested under it in the nested field.
![](/img/admin/tag-structure-tag-values-nested-values-1.png)
### Adding Values
To add a value to a field, just click the <i class="fa fa-plus" aria-hidden="true"></i> icon above it.  You'll be prompted to enter the new value.  Click Save when done.
### Editing Values
After you have selected a value, you can modify it if you'd like.  In the "Editing [value]" section, just type your changes to the value, and click Save.  Your changes will instantly be applied to any File that is categorized with this value.
![](/img/admin/tag-structure-tag-values-edit-1.png)
### Deleting Values
To delete a value, click the <i class="fa fa-times" aria-hidden="true"></i> icon that's displayed when mousing over it, or select it and then click the Delete button in the "Editing [value]" section.  Note that you can only delete a value that is not applied to any Files.  If you'd like to delete a value that is used to categorize Files, you must first re-categorize those Files with a different value.
### Descriptive Tag Values
When you select a metadata field value, you can view and edit the descriptive metadata for it.
![](/img/admin/tag-structure-tag-values-descriptive-values-1.png)
#### Editing Descriptive Tag Values
To add or edit any value, just enter your new value in the field, then click Save when you're done.

