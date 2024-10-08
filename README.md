# school-management-api

Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system should allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

Requirements:

Database Setup:
Description: Create a schools table in MySQL with the following fields:
id (Primary Key)
name (VARCHAR)
address (VARCHAR)
latitude (FLOAT)
longitude (FLOAT)

API Development:

Add School API:

Endpoint: /addSchool
Method: POST
Payload: Includes name, address, latitude, and longitude.
Functionality: Validates the input data and adds a new school to the schools table.
Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).

List Schools API:

Endpoint: /listSchools
Method: GET
Parameters: User's latitude and longitude.
Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.

Hosting and Testing:

Hosting: Deploy the APIs on a suitable hosting service.

Postman Collection:

Create a Postman collection for both APIs.
Include example requests and document expected responses.
Share the collection with stakeholders for testing purposes.
