# supershopper0 application prototype
# Kurt Bruck
# Contact: kbruck12@gmail.com
# CS 4420 - Database Systems I 
# December 1, 2016

A [Sails](http://sailsjs.org) application that utilizes a MySQL database withh MAMP and PHPMyAdmin. Sails was used because its felxibility in connecting databases of any type together and running queries translated into the appropriate database's syntax.
All dependencies should be available with in application folder. If unable to run, make sure Node package manager [NPM] (https://nodejs.org/en/download/) is downloaded and accessible and Sails package is installed with command(npm install sails -g) or installed within application folder (npm sails install).

Main function
------------
This app is intended to allow users to select a particular store and see the informaiton about their items available including their name, price, and location within that store. 
Please note that this application is still in development as many more features will be added. If interested in seeing the further development, please contact via the email above.

App configuration
-----------------
The application is configured as an MVC framework that uses embedded javascript and Angular.js to view data. 


IMPORTANT FILES
---------------
MAMP Database --> Please be sure to have MAMP running with PHPMyAdmin as server
- /db/Bruck_CS4420_DB.mssql
--Import this file to your MAMP server by creating a new database called "SuperShopper" with the utf8_general_ci COLLATION then IMPORT with the utf-8 CHARACTER SET, SQL Format, and COMPATIBILITY MODE set to MYSQL

**IMPORTANT: If any connection issues occur, view /config/connections.js file and make sure the port, user, password, and database match the configuration of your MAMP server and database.  **

To Run
-------
From Command line/terminal, change directory to the application file. Then enter command 'Sails lift' to launch application. To view, use Google Chrome web browser with [URL](http://localhost:1337)


Model Structures (./api/models)
----------------
Please notice that models are named differently that the tables they are connected to within the database. The connected tables are defined in the top of each model.js file

Controllers (./api/controllers)
-----------
StoreController contains the functions utilized for this prototype

Views (./views/layout)
------
Defines the scripts which the view are able to use, particularly Angular.js

Main View (./views/store/index)
-------
Contains the angular code used to access the data and call controller functions including seeing all stores, their item catalog, sorting the catalog, and searching for items. 

