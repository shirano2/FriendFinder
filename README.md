# FriendFinder

This app is simple. 

This app makes you find a friend who is the best match of you. 

Before that, you have to answer 10 question of survey.

I hope you can find a good friend !!


## Site
https://friend-finder-60463.herokuapp.com/


### Technologies Used

* HTML5
* CSS3
* jQuery
* Javascript
* Node.js
* express


### Survey Page 

You have to answer 10 questions to find your best matched friend

#### Logic

Convert each user's answers into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. 
Add up the differences to calculate the totalDifference.
```
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
```

The closest match will be the user with the least amount of difference.

#### I love Redvelvet. How about you?

### Creator
This is made by Minseok Choi (https://github.com/shirano2)
