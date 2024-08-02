# Food Delivery App

Developing Food delivery app using react as a part of my react learnings.

## Exploring the world

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

## Class Based Components



## Custom Hooks

* Makes the code more readble.
* Easy to detect the bug, while running different test cases for different components.

* Making *online/offline* feature
  * For making this feature, we'll need Event Listener that will track that we're online/ offline.
  * This superpower is given to us by window object and the browser.
  * We can use custom hooks and useEffect for this. I have written the code for this in *useOnlineStatus.js*. 
  * Used this custom hook in several spaces.

## Optimising our App

* Real world projects have 1000's of component that impacts on the performance. Parcel is a bundler which makes one js file. It is not good for the optimization of our app.
* So, we divide our components in various bundles to reduce the size of the file and to increase the performance.
* The process in which we make smaller bundles of these files is known as *Lazy Loading*
  * Other name for this process are:
    * Dynamic Bundling
    * Code splitting
    * Dynamic Import
    * On demand loading

* Lazy Loading: 
> It means that when we load our page, the code won't be loaded for the other bundle. We won't be loading everything at once, bull we'll be loading for what is required also known as On demand loading.

> Handling the state between Rendering and Loading is know as Suspense.
* Suspense is a component comes from a React library. React gives you suspense and you can wrap your component in suspense. Give it a placeholder kind of like a fallback to what should React render when the code is not available.

## Tailwind CSS

Added tailwind css in react for its ease of use. Also, added condition in the retro box to remove any unnecessary texts from cuisines.

## Higher Order Component

HOC is a function that takes a component and returns a component. 
HOC takes component as an input and it enhances the component and returns it back. Acts as an enhancer.

Added *PROMOTED* label using HOC. (Had to remove it because Swiggy API removed the promoted structure from its API)

## Acordion Feature

Developed Acordion feature for Menu Items Category. Added two new components named ResItemCategory & ResItemList. 
* ResItemCategory is for Acordion Header, from here we call Acordion body which is ResItemList. 
* I used state variable to control hide & unhide feature of Acordion. 
* Used *Swiggy's API* for the data as usual.

## Controlled vs Uncontrolled Components

When a parent controls the state of child component then it is known as Controlled Component.

* To advance the feature of Acordion, I wanted to keep the state of only one child to be true and rest of them should be false. 
* So, I *lifted the state up* and given the power to its parent. 
* By controlling the state of the child, I was able to add build this feature in which on click it should show the body and collapse others.

## Context API

React has one way data flow structure, which means that data will be flown through the parent then child and then their child. This is known as *Props Drilling*. 
This is okay in small case application but becomes a problem in a large scale applications. To solve this issue we have *Context API*

Context API is like a global state which everyone can access. Context API has two main components *Context.Provider* and *Context.Consumer*.

I have used Context API in the application to change the username as we type on the input box.

## REDUX

Including Redux in our store.

Installation of RTK:
 - Install @reactjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector