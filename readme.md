# Food Delivery App

Developing Food delivery app using react as a part of my react learnings.

Structure of the app:
 

 * HEADER
    * Logo
    * NavItems
        * Home 
        * About
        * Cart
 * Body
   * Search
   * RestaurantContainer
   * RestroCard
* Footer
   * CopyRight
   * Links
   * Address
   * Contact

## Episode 4: Exploring the world

* Monolith Architecture vs Microservice Architecture
  * In Monolith Arch, we have big projects, has codes of of API, UI code, Database code, sms. Code is written in same service.
  * In Microservice arch, we have diff service for diff jobs know as *Separation of concers* & *Single Responsibility Principle*. Like, Back end can be written in Java & Front end can be written in JavaScript.

* Two approaches on fetching data from BE
  * *Loads -> API -> Render*
  * *Loads -> Render -> API -> Render*
  * In react, we use second approach as it gives better ux experience.

* useEffect Hook
  * This hook is used when we have to fetch something after rendering the component.
  * This is how it this hook helps in fetching the data

* Fetch()
   * This is the superpower given by JS Engine.
   * Fetch will return a promise.
   * We can use async await to fetch the data.

* Shimmer UI
   * It is the scenerio when the *UI loads -> Render -> makes an API Call -> Render*
   * Shimmer UI comes in play for the first rendering. This is generally done for better ux experience.
   * It is the dummy page that users see. I have coded this in *ShimmerCard.js*. 

* Search funtionality
  * On clicking of button, we have to filter out the restaurants according to the given value.
  * We also have to bind the input box to *local state variable* in order to be able to type under it.
  * Problems I encountered while creating this functionality:
     * After filtering out the expected restaurants from the list of restaurants. The main state variable got updated which in return broke the code if I am going to search for another restaurants.
     * For this I introduce a copy for stateVarible, including this I wasn't updating my main listofRestaurants.
     * Another problem I faced was, while clicking on backspace I wasn't able to clear all of the input box. For this, if there are any words present in input box, it will search normally. But, if not it will first *setSearchRestaurants(e.target.value="")*, sets the input value as "" and the *setFilterRestaurants(listOfRestaurants)* which will render the whole list.
 
 ## Finding the path

 #### We'll be creating url for different page in our app

 * Some important points to note for useEfffect() hook: 
   * If useEffect has no dependency array, *it will be called on every render*
   * If useEffect has dependency but it's empty, *it will be called only the first time*
   * If useEffect has dependency but it's not empty, *it will be called whenever the dependency changes*

* Creating routes in react application
  * For this, install "npm i react-router-dom"
  * For creating routes, we've to create routing configurations
    * import {createBrowserRouter} from react-router-dom : takes list of paths
    * To render it onto the page we use *Router Provider*, this will actually provides the routing configurations to our app.
  * We can also develope Error component.

  * Creating Children routes:
    * We have to use component known as *Outlet* 
     * It should be used in parent route elements to render their child routes elements

* Linking the url:
  * We dont't want to use anchor tag as it reloads the whole page, as React is known as Single Page Application, to justify this React provide us with *Link*.
  * It only renders the children component if that's what we want to be rendered.
   > Link to="/contact"> Contact 

* Two types of routing:
  * Clent Side Rendering
  * Server Side Rendering

* Restaurant menu.js
  * We want to render this component on a specific route. For this we will create one more route in App.js
  * this path should be dynamic as we'll be loading diff types of menu
    :resId means this part of the url is dynamic. So, our routes will be unique whenever we have our restaurants.

* Cool info about Link Tag :
  * Link ia a component which is given to us by React-router-dom. Behind the scenes, *Link is using anchor tag*
  * Link is a wrapper over anchor tag.
  * When we define *Link*. It takes a notice that this tag is a link and it shouldn't reloads the whole page.