Continue Lab 6 based on Lab 5 to implement the features below for RESTful Application:
Add a login feature which username and password. If logged in successfully, return JWT, otherwise, error message.
For all CRUD operations on Books, they have to be authenticated. If call APIs withou JTW, return 401 unauthorized. With incorrect JWT, return 403 Forbidden. Only with correct, return JSON data
Use Postman test all APIs
You can also download the server and client project to continue. Make sure you change all products APIs to books.
Client: add login/logout features. And make sure only logged in users can CRUD books.