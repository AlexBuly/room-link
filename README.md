# RoomLink
The home page will just include standard info about the site. There will be a link to the sign up form and a link to an about page. There is also a container that shows the steps involved in the process of finding a match for a roommate. 


The when uses fill out the sign up form, it will create an account and store this info into the mongoDB database. Once the account is created, users then fill out a survey for their preferences that will be used for matching. State variables will be created using the useState hook. 

The user then has to log in. The sign up info is retrieved from the database. When logged in, the sign up button will be removed from the header and the log in button will change to log out. 

When the user is logged in, they can manage and update their profile in a component called Profile. This is info such as interests, major, residence hall, profile pic, etc. There also be a chat component for users to communicate once matched. 

The main component of a user's account is the dashboard. The page that will show up once users log in is called Feed. Feed includes a list of users looking for a roommate. The user can click and view a profile. To keep it simple, by default the page will load a list of all users. A user can sort based profiles based on preferences. 

Additional compontents will include a like button and the ability to friend others. 