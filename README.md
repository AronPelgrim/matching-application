# Music Matching
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fixed-bugs.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/certified-elijah-wood.svg)](https://forthebadge.com)

Welcome to my repository! Here you can find my feauture, created for a matching application named **music matching**. The concept is that the user can add a list of his favorite songs to the profile of this matching application. The user is linked to a music genre, based on this list of songs. Because of this, the user can match with people who have the same taste in music. Ofcourse it's possible that the user's taste in music changes over time. Therefore, the user can change and update the list.

![Knipsel](https://user-images.githubusercontent.com/74137185/113874606-460c8600-97b6-11eb-8fe5-4c065dde8080.JPG)
![Knipsel3](https://user-images.githubusercontent.com/74137185/113874605-4573ef80-97b6-11eb-8bf0-95058a232239.JPG)
![Knipsel2](https://user-images.githubusercontent.com/74137185/113874607-460c8600-97b6-11eb-9060-ba65b92467c0.JPG)

## Table of Contents

-   [Installation guide](#installation-guide)
-   [MongoDB account](#mongodb-account)
-   [Start server](#start-server)
-   [Any issues?](#any-issues)
-   [License](#license)

## Installation guide
For this project, we're going to use NodeJS, NPM and MongoDB. Please follow the instructions below.

1. Clone this repository to your machine.
``` 
$ git clone https://github.com/AronPelgrim/matching-application.git 
```

2. Locate to the right directory.
``` 
$ cd matching-application
```

3. Install the necessary packages.
``` 
$ npm install
```

## MongoDB account
MongoDB provides a clear [tutorial](https://docs.mongodb.com/guides/server/drivers/) on how to connect your MongoDB to a Node js application.

Okay, let's now fill in your data in the .env file.
``` 
DB_CONNECTION=mongodb+srv:/Username:Password@ClusterName.h6oao.mongodb.net/CollectionName?retryWrites=true&w=majority
``` 

In the structure below, you can find the database visualisation.
``` 
Cluster: Cluster0  
Database: MusicMatch 
Collection: nummers 
``` 
| ``` Name ```  | ``` Type ```  |
| ------------- |:-------------:| 
| _id           | ObjectID      |
| title         | String        |
| artist        | String        |
| genre         | String        |

## Start server
With this command you can start the server. 
 ``` 
$ npm start 
 ```
Let's check it out! the server runs on localhost:3000.

## Any issues?
You can reach me on [this](mailto:aron.pelgrim@hva.nl) email.

 ## License
[MIT](https://github.com/AronPelgrim/matching-application/blob/master/LICENSE)
 
