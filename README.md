<a name="readme-top"></a>

# Aqar Backend Challenge
Git repository for the Aqar Backend Challenge

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
       <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the Project</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#assumptions">Assumptions</a></li>
  </ol>
</details>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Node.js](https://github.com/nodejs/node),
* [GraphQL](https://github.com/graphql/graphql-spec) as a query language,
* [Sequelize](https://github.com/sequelize/sequelize) for Object Relational Mapping,
* [MySQL](https://github.com/mysql) database as a datasource,
* [Apollo Server Express](https://github.com/apollographql/apollo-server) as a GraphQL server,
* [Google Maps API](https://developers.google.com/maps) for fetching apartment addresses,
* [Jest](https://github.com/facebook/jest) for code testing,
* [Sequelize-Auto](https://github.com/sequelize/sequelize-auto) to automatically generate the Sequelize models from the database metadata

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* Docker and Docker Compose (Docker Compose v1.29): v1.29 is required for latest docker-compose.yml syntax.
* Node v18.0+ : This is only required if running locally.

### Running the project:

#### To run the project using Docker Compose:
1. Clone the repo
   ```sh
   git clone https://github.com/mallulu/aqar_backend_challenge.git
   ```
2. Run docker-compose:
   ```sh
   docker-compose up
   ```
3. The Docker instance should now be running:
  * Docker compose will create 2 images (one for MYSQL and one for the NodeJS app)
  * The images have all their dependices containerized with them including the DB and all the dummy data
  * To verify the app is running you should get 2 messages on the console:
   ```sh
    Server running on port 8080
    You can use GraphQL on localhost:8080/graphql
   ```
  > NOTE: docker-compose is set up such that the app container does not run untill the MYSQL container is running and READY for connections, however sometimes the wait does not happen and you'll see some "PROTOCOL_CONNECTION_ERROR" messages. Simply give it a couple of seconds to run and the two previously mentioned messages will appear.
4. If you would like to inspect the Docker database, connect to it at port 3307:
   ```sh
   mysql -P 3307 -u root --password=123456
   ```
   
<hr>

### Use deployed service
You can also access a deployed version of the service which is hosted on DigitalOcean here:

[Deployed service](https://www.mallulu.dev/graphql)

<hr>

#### To run the project locally:
1. Clone the repo
   ```sh
   git clone https://github.com/mallulu/aqar_backend_challenge.git
   ```
2. Navigate to the newly created local repository folder
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a new MySQL Database/Schema using your desired name:
   ```sh
   mysql> CREATE DATABASE <desired database name>
   ```
5. Import the SQL file to the newly created database:
   ```sh
   mysql -u <your username> -p <name of create database> < sample_data/sample.sql
6. Edit the .env file to include the following variables under "Local environment variables":
   ```env
   # Local environment variables
   DB_NAME=<desired database/schema name>
   DB_USER=<name of mysql user>
   DB_PASSWORD=<password of user>
   DB_HOST=<host name the mysql instance is running on>
   DB_PORT=<port the mysql instance is using>
   ```
7. Run the following command:
   ```sh
   npm start
   ```
   > NOTE: The service will run locally on port 3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TESTING -->
## Testing
To test the service, you must have the database running locally with all the provided dummy data. To run the test suite, execute the following command:
```sh
npm test
```

The test suite covers the GraphQL resolvers and the Google Maps API service for fetching an apartment's street address.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ASSUMPTIONS -->
## Assumptions
The following assumptions were made about the project:
* For the availability calendars (availabilityCalendars), it was assumed that the availability would be denoted as a range of two dates, fromDate and toDate. It was also assumed that one apartment could have many availability calendars.
* When fetching the apartments that are available between two dates (fetchAvailableApartments), it is assumed that the request would take two dates, fromDate and toDate, and return all the apartments that have availability calendar entrees that span or exceed the given dates.
* When fetching the availability of an apartment (isApartmentAvailable), in addition to supplying the mandatory apartmentId, a given date value may also be submitted. If no date value is submitted, a default value of the current date is passed instead. The query returns true if the date value is between the fromDate and toDate values of any given availability calendar entry of the provided apartmentId, and false others.
* In addition to the previous query, a fetchApartmentAvailabilityTimes query was created that takes an apartmentId and an optional date (also current date by default) that returns all the availability calendars whose fromDate and toDate values the given date falls between.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

