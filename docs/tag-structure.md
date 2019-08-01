---
id: tag-structure
title: Tag Structure
---

The Tag Structure module is the heart of 5th Kind's metadata management.  This is where you define the metadata structures that will determine how your Files are categorized.

---
## Overview
5th Kind does not use the traditional folder structures that you might be used to for organizing, categorizing, and controlling access to Files.  Instead, those tasks are based solely on how Files are categorized.  The Tag Structure module is where you define your categorization schema- the metadata fields and details about them.
![](/img/admin/tag-structure-overview-1.png)

---
## Domain Purpose
In 5th Kind, Domain Purose is essentially a top-level category that lets you decide what metadata fields will apply to what type of content.  For instance, if you are making both movies and TV shows, you would likely need to categorize media based on the name of the production it's for, but TV shows have episodes whereas movies do not.  With Domain Purposes, you can make sure that a "Production Name" field would apply to both movie and TV show assets, but that an "Episode" field would only apply to TV show assets.
### Creating a New Domain Purpose
![](/img/admin/tag-structure-new-domain-purpose-1.png)
With any metadata field selected, click the <i class="fas fa-plus"></i> next to any Domain Purpose name in the Field Options section.  Enter the name of your new Domain Purpose, then click Save.

---
## Tag Groups
A Tag Group is a set of metadata fields that are grouped together, and which can have a hierarchical relationship.
### Adding a Tag Group
To add a new Tag Group, click the New Tag Group button, then enter the Group name and click Save.
![](/img/admin/tag-structure-new-tag-group-1.png)
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
