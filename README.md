# WDI 34 Project 3 - Event Bundle
## A MEAN Stack App
###### by Arabella Dear, Bianca Jemsten and James Newell

The goal of project 3 was to build a full MEAN stack app in a team. We chose to build an app that allows the user to search for an event they're going to by using [Skiddle's Event API](https://github.com/Skiddle/web-api/wiki/Events-API), and by fetching the coordinates of the event we generated a list of restaurants and bars, within a chosen radius, using [Google Places API](https://developers.google.com/places/web-service/intro). The user can then add other users to the event and calculate the travel time from their current position using the [City Mapper API](https://citymapper.com/api).

Technologies used in the project were AngularJS, JavaScript, SCSS, HTML, Node.js, MongoDB, Express.js and Webpack.

Our app is deployed on [Heroku](https://event-bundle.herokuapp.com/).


<p align="center"><img src="https://i.imgur.com/achGguo.gif" width="700"></p>

***

#### The planning process
###### Wireframes
<p align="center"><img src="https://i.imgur.com/4FNokmo.png" width="700"></p>

We used [Draw.io](https://www.draw.io/) to plan out the interface of our app. It helped us to envision how the user flow would be as well as to make sure all memebers of our team were on the same level as to how certain features would look and work.

###### Task planning
<p align="center"><img src="https://i.imgur.com/SjEDjRD.png" width="700"></p>

Before the project started we planned out every task that had to be done and put them into [Trello Cards](https://trello.com/biancajemsten/boards). We used the color labels to indicate if it was a font end or backend task(blue vs. red) and if it was a task crucial for MVP or an add-on (green vs. yellow). Initially everything was in the backlog. Then as we started building the app we moved cards to the other categories which were Doing (frontend), Doing (backend), To do, Bugs, and Done.

#### The App

##### Displaying a Bundle
<p align="center"><img src="https://imgur.com/m0bFpCD.png" width="700"></p>

We had a page that would display a bundle and depending on whether the current user had created this bundle, certain elements were visible. As seen in the image, the chosen event, restaurant and bar are shown with information about each one. The delete button was only visible if the current user was the creator.

<p align="center"><img src="https://imgur.com/D0VnmbN.png" width="700"></p>

On the same page we added a few more features including a travel time calculator, google maps and an attendee adder.

<p align="center"><img src="https://imgur.com/GJCXDFB.gif" width="700"></p>

The user is able to search for their current location, using Google Autocomplete. They then decide whether they would like to go to the bar or restaurant first. Clicking the 'Get Travel Time' button then calculates the driving time from their entered location to either the bar's or restaurant's location depending which is selected. If a bundle consists of only one, a restaurant or a bar. The location will automatically be chosen and the radio buttons will not show.


##### Creating a new bundle

<p align="center"><img src="https://i.imgur.com/n1SoVo2.gif" width="700"></p>

**Searching for the event**. The user types the event he or she is going to into the search bar, which can take both single and multi-word searches. The *Find my Event* button is disabled until the user has indicated both a search word and the preferred radius of restaurants and bars around the event. The button triggered a GET request to the Skiddle API sending the user's search word and returning up to 40 results.

**Searching for the restaurant**. After finding the correct event, the user clicks *Pick Event* which saves the event details, and sends a GET request to the Google Places API with the indicated radius and the coordinates of the picked event as queries. This returns a list of restaurants. It also takes the place_id of each response from Google Places and sends a second nested request to Google Place Details. This allows the user to view things such as the opening times and the url of the place.

**Searching for the bar**. At this point, the user can choose if they want to pick one of the restaurants or click *skip restaurants* to view the bars instead. The first option stores the data of the picked restaurant but both options call on the function shown below.

```
$scope.findBars = function(){
  $http({
    method: 'GET',
    url: 'api/findPlaces',
    params: {
      lat: pickedEvent.location.lat,
      lng: pickedEvent.location.lng,
      radius: $scope.radius,
      type: 'bar'
    }
  })
    .then(res => {
      $scope.bars = res.data.results;
      res.data.results.forEach(item => {
        $http({
          method: 'GET',
          url: '/api/findDetails',
          params: { place_id: item.place_id}
        })
          .then(res => {
            item.details= res.data.result;
          });
      });
    });
};
```

**Done**.
The initial search bar has now been replaced with a submit button which the user can click when they are happy with their bundle. It sends a POST request with all the data of the bundle and redirects of the showpage of that bundle.






#### Challenges
**Picking bars and restaurants**

The nested http requests and the large data that comes back from the requests cause the picking process to need some additional waiting time. If the user picks the restaurant or bar too fast there's a risk not all information about it is saved into the variables yet. This is obviously a problem that should be prevented by potentially disabling the pick button before all the data is there.

**CityMapper API**

The Citymapper API is very limited and only returns the travel time for driving. We would have liked to provide the travel time for more modes of transport and also potentially directions. Learning from this, if we were to do this again we would try to use Google Direction API as this may give more data that we can work with and ultimately give the user a better.

#### Feature Wish List
**Mobile responsiveness**

The application would be perfect for anyone to use on the go especially with our use of Citymapper API with it's travel time calculator. So this is a high priority for us to add to the functionality across the whole app.

**Editing Bundles**

Currently, a user can only delete their event and then create a new one if they want to make changes to it. With some extra time we would like to add an edit feature as well.

Given the complexities of retrieving the correct information and then having to repopulate the choices onto the page we initially knew that an edit page would prove problematic. The user experience is key to us and our app so adding a Bundle Edit page is something we are looking into doing.

**Directives**

With the goal of making the code more readable and DRY, we created a couple of directives while we were refactoring. Unfortunately, we did not have enough time to implement them successfully. The directives work visually but as of right now the functionalities of the buttons will not work when the directives are used. We do not believe there is much work to add to make it work so directives are of high priority for us to add. 

**Notifications**

As of now a user can add other users to the event from the database and their names will show up on the show page of that bundle. However, the users who get invited do not receive a notication. In the future we would like to add this via push notifications or some other type of notification showing up on their profile.

**Comments**

Another feature we did not get around to is comments. It would be nice to give users the option to comment on the event they are all going to.
