# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby? 

  Your answer:
  Ruby is an object orientated language. In other words, everything is an object even variables and data types like string, number, float they are all objects. A hash is used on those Ruby objects to inherit some properties of the object and class in Ruby. During my time as a developer, I have done some projects involving Ruby and also solved some Ruby programming challenges. Being able to manipulate objects in Ruby is important in order to solve problems and create objects that work with each other within your program. A hash is a special code that the computer uses to check and see if the item being entered has integrity in other words it's the same item as previously and it hasn't changed in any way. 

  Researched answer:
  My answer was partially correct. I left out a key aspect of it being a data structure which contains a set of objects called keys. The hash refers to both the key and its value. Another name for a hash is associative array. It's called that because it's job is to associate value with each of the keys. It doesn't work like an array because it uses the object not an integer like an array does. You can create a hash using class method and the keyword new. Syntax is restaurant = Hash.new this creates an empty hash because it doesn't have any keyword associated with it. Hashes can be altered by adding or deleting a key value/pair in a hash. The key can also be changed.



2. What is a gem?

  Your answer:
  Gems are utilized in Ruby programming language. Ruby is an object-oriented language. Javascript has libraries and gems are similar to that. Ruby on rails is a back-end framework for Ruby that utilizes gems in its programming. Gems are code that sets up various things in the background to help a program run without having to code all that separately. During my time as a programmer I have utilized gems and worked with Ruby on rails which is a popular back end framework for Ruby. These gems make it possible for the developer to work in different areas that are set up using the gems.

  Researched answer:
  Every gem has a name, version and platform. Gems are smart and will only work on the correct platform or OS(operating system). Gems contain code, documentation, and gemspec. As mentioned in my answer a library is the code for the gem, the test or spec has the tests and the Rakefile automates the tests and generates code.The gemspec has all the information files,platform, version number even the author's email and name is included. Gems can be installed using the command gem install and the name of the gem. 



3. What is Ruby on Rails?

  Your answer:
  Ruby on rails is an impressive back-end framework for Ruby that allows you to be able to manipulate and install a database into your Ruby programming while eliminating the need to learn SQL in order to query that database. As someone who spent several years learning databases and how to do complex queries using SQL I can appreciate the simple to use and work with interface that Ruby on rails provides a developer. It is so much easier to work with databases as objects and not have to worry about the sometimes complex syntax of complicated queries in SQL. Ruby on rails sets up the whole environment including the database schema for you. It is made for SQL lite but allows for different versions of SQL including Postgre SQL to be used with it. It allows all the CRUD actions to be preformed. Creating new columns, adding new object properties, reading existing objects, updating existing properties and deleting can all be done within the Ruby on rails framework. One disadvantage of this framework is that it doesn't allow for much customization since most of that is already installed for you a developer must work within and abide by the specific installed files.

  Researched answer: My answer centered on the database aspects of Ruby on Rails but it actually contains so much more than just that. It has controllers which allow the application to process incoming parameters, set caching headers and render HTML templates. To do this it uses a routing domain language. It allows you to index, show, create, edit , update and destroy. It's beginner friendly because you don't have to know how to set up all those HTML or routing interfaces Ruby on rails does it for you. A single class can have multiple related concerns. The power of Rails is its integration. In other words it helps all the working pieces of a web application work together from the front-end to the back-end. You don't have to be an expert in order to call an API you just have to know the basics and Ruby on Rails takes care of the heavy lifting for you. 



4. What is a relational database? Are there other kinds of databases?

  Your answer:
Relational databases are quite useful in organizing and sorting data. It also allows you to be able to ask questions or create a query to research what data is present and how each piece of the data relates to each other. This is a key difference between relational databases and non-relational databases. An RDB has inter-connectivity with each of the tables located within the database. This is achieved using a primary key. Each primary key is aligned with a foreign key on another table. For example you have a table which has all your students, another table has all the instructors how do you find out which instructor has which student? With a relational database this is easy each student is assigned a unique ID number which is the primary key, the instructor is then assigned the student so now the student table has both pieces of information. It's easy to then formulate a query that looks up which student is assigned which teacher in your data. Yes the other type is non-relational databases like Mongo DB. they do not rely on primary keys for their organization. There is no relationship between any of the databases. No tables, rows primary or foreign keys. 
  Researched answer: All relational databases have a schema while non-relational databases do not. Changes are faster on a non-relational database. Non-relational are also called NoSQL because SQL is used to query relational databases. Users of NoSQL don't have many tools to access or manipulate the data. Data manipulation and tools are available for relational databases. RDBMS can be harder to scale and have performance issues with large amounts of data. NoSQL is easier to scale and can handle large amounts of data. Joining tables is easy in RDBMS and cannot occur in NoSQL. Availability is dependent on the server, the data is consistent for the user in an RDBMS. In the NoSQL consistency is less. NoSQL works better with real time data analytics because reports are  not done in the database. while RDBMS can be used for analysis and queries easily. Documents can be stored in NoSQL database and partitions made but not in an RDBMS database.



5. Your answer:

What are primary keys? Why are they important?
Primary keys are so important to a database. Databases can have thousands of entries in them and without a primary key to connect and differentiate each item it would be impossible to keep items separate. Databases are made up of rows and columns that form a table and different tables link to each other in different ways. The computer uses the primary key to ensure it has the correct item. As a developer I have to always make sure that my primary key is unique to each item and it can never be reassigned to another item. Once a primary key is used even if that item is subsequently deleted the primary key can't be re-used or re-assigned. In my time as a developer I have used some databases and learned SQL for preforming database queries. Without a primary key a database would not have any reference integrity in other words, you wouldn't know whether or not  a particular item was unique or what exactly its relationship was with other items in the database. In SQL you use PRIMARY KEY().

  

  Researched answer:
Its a column that lives within a relational database table which has a unique representation of every record in that table. This makes it easy to search records and their relationships between tables. Every primary key is either a surrogate key or natural key.If it occurs in the table its natural if it doesn't then it can be created and it should be unique. A primary key in one table becomes a foreign key when placed in another table. Primary keys cannot have a null value. Each table can only have one primary key but it can have multiple fields. This kind of primary key is called composite.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representation State Transfer. It's a way to map an HTTP route and also the associated CRUD functions.
All API's need to be able to preform CRUD actions. These routes can be used for all projects. Index -  displays an item list and used with GET, New used with GET and can make a new form. Create used with POST and can make a new item. Show used with GET and can edit an item. Edit used with GET and can change an item. Update used with GET and can update an item and redirect. Destroy used with DELETE can delete an item and redirect.

2. JSON:JavaScript Object Notation used to send data from a server to a web page.Uses the same syntax as javascript objects but without any key words. JSON names require double quotes.It has a built in function JSON.parse() which converts the string into a JavaScript object. 

3. ERB: Embedded Ruby lets you generate text from a template. They combine plain text and Ruby code. Can be used for generating web pages but also for RSS feeds, XML documents and other structured text files. It has a library that can be called within your Ruby app and Rake tasks. It accepts a string as a template in your code or can also be stored remotely in files or databases. It's part of the Ruby library in rails it's called Erubis.

4. Params: a keyword that can used in various computer languages to pass data from caller into the function. multiple parameters can be used inside the function declaration. 

5. API: Application programming interface. It's a set of rules for how computers can communicate with each other. The application that sends the request is the client and the application sending response is the server. They can send messages using XML but it isn't very flexible. RPC uses a procedure which is completed by the client that is called to the server and the server sends output back to the client. Websocket uses JSON to pass the data and allows 2 way communication with the app client and the server(providing the information).   
  