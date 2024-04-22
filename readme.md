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
 
 