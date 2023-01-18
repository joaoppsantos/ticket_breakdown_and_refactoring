# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

&nbsp;

Upon each ticket development, there should be a test on development environment to make sure everything works as expected.

&nbsp;

### Ticket 1: Add new field to the Agent table for "custom id"

> #### Time estimation: 1/2 hours

- Add a new column in agent table named "custom_id" (varchar(200) data type).
- Update the migration script for the database.

&nbsp;

### Ticket 2: Facilities should be able to input "custom ids" for each Agent they work with

> #### Time estimation: 2/3 hours

- Create new page for Facilities to be able to input "custom id" for each Agent.
- Check if "custom id" input isn't empty.
- Update the Agent model with the "custom id" input by the Facility.

&nbsp;

### Ticket 3: generateReport function uses the "custom ids" in the Facilities rather than the internal database ids upon generating reports

> #### Time estimation: 1 hour

- Make generateReport function use the "custom ids" instead of the internal database ids upon generating reports.

&nbsp;

### Ticket 4: User interface should display "custom ids"

> #### Time estimation: 1 hour

- Update the UI to display the "custom ids" instead of displaying internal database ids when showing reports.

&nbsp;

Upon the completion of all the tickets, we are ready to deploy to production.
