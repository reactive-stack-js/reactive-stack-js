![reactive-stack-js](https://avatars0.githubusercontent.com/u/72337471?s=75)

# Reactive Stack JS

![codacy](https://img.shields.io/codacy/grade/e0146e29a3134038b4dcf95db9eb5a38.svg)

In **reactive** programming, data is _pushed_, not _pulled_.

Therefore, a **reactive stack** is one where data is _pushed_, not _pulled_, through out the entire stack.  
What that means is that instead of the client _requesting_ the data from the server, the server is constantly _pushing_ the data to the client.

Basically, this boils down to a simple description: the client is **observing** the data it cares about, and **reacting** to that data changing.

For more information, please check out:

*   [Reactive Design Patterns](https://www.manning.com/books/reactive-design-patterns)
*   [ReactiveX](http://reactivex.io/)
*   [Learn RxJS](https://www.learnrxjs.io/)

## Observer Pattern through the Chain

Please read up on the Observer Patter if you are unfamiliar with it: [Observer Design Pattern](https://sourcemaking.com/design_patterns/observer).
Also, please read up on the difference between Observer and Pub Sub, again, if you are unfamiliar with the difference: [Observer vs Pub-Sub pattern](https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c).

The Chain here refers to the entire data transport chain, from the source the database, all the way to the rendered UI in the GUI.

This is the list of Observer Pattern pair instances in the chain, from DB to GUI:
Note A <- X means that X observes A. A is the observable and X is the observer.

1. Collection/Table <- ObservableModel
2. ObservableModel <- ReactiveStore
3. ReactiveStore <- Client
4. Client <-WebSocket-> ClientSocket
5. ClientSocket <- ReactiveStore
6. ReactiveStore <- Dialog

_...todo: describe each listed instance above_

## Goal

My goal was to create a reactive stack solution that would not have a [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in). In other words, I wanted the end product to have the flexibility where any part of it could be replaced with an alternative, in as easy as possible manner.

This is the end result:  

![reactive-stack-js](https://raw.githubusercontent.com/reactive-stack-js/reactive-stack-js/main/images/reactive-stack-js.png)

## Clarification

I started with [MeteorJS](https://www.meteor.com/) because it allowed me to focus only on the client side for the setup I had in mind. It also allowed me to _see_ the final POC application working. I was then able to work with that example as a guide. Further more, I was able to reuse the client side code with minimal adjustments.

The second step was to take the created [React](https://reactjs.org/) client side code from the **reactive-stack-js-meteor-react** implementation and work on the alternative REST [Fastify](https://www.fastify.io/) backend. Once I had the backend working, I was also able to take over the [Svelte](https://svelte.dev/) client side code from **reactive-stack-js-meteor-svelte**. This was later deleted due to the fact that Svelte started throwing errors that were totally weird, and I simply did not want to deal with them anymore. These sadly started to occur in **reactive-stack-js-meteor-svelte** repository as well. I also added [Vue](https://vuejs.org/) to the REST setup, for comparison.

Finally, in the third step, I decided to add [GraphQL](https://graphql.org/) to the mix, and replace REST. My main goal there was to add GraphQL without having to also manually write the GraphQL schemas, as well as also most common mutations for every [Mongoose](https://mongoosejs.com/) model in the app. This worked as I hoped it would. The final goal for the GraphQL setup is to add [live queries](https://www.graphile.org/postgraphile/live-queries/), and then remove the whole data synchronization setup I created.

ATM, my favorite solution is the section 2, **REST** with **Vue**, which is based on [RxJS](https://rxjs.dev/), [Fastify](https://www.fastify.io/), [Mongoose](https://mongoosejs.com/) and [Vue](https://vuejs.org/). Therefore, this is the one that will be the focus for me, in terms of documentation and refactoring. Once the **GraphQL live queries** become feasible, I will add it to section 3 and then compare with the REST implementation for a final decision.

## This repository

This repository contains data creating script which uses [casual](https://github.com/boo1ean/casual).  
Just first do `yarn`, then do `yarn data`, and your [mongodb](https://www.mongodb.com/) will have a new database called `reactivestackjs`, populated with fake data.

It also contains the description and links to various sub-repositories I created as a reactive stack [POC](https://en.wikipedia.org/wiki/Proof_of_concept).

There are 3 sections which are further split into repositories.

### Sections & Repositories

1.  **Reactive Stack JS using** [**MeteorJS**](https://www.meteor.com/)
    1.  Meteor with React
        1.  :heavy\_check\_mark: [reactive-stack-js-meteor-react](https://github.com/reactive-stack-js/reactive-stack-js-meteor-react)  
            _based on_ [_Meteor React tutorial_](https://www.meteor.com/tutorials/react/creating-an-app)
    2.  Meteor with Svelte
        1.  :heavy\_check\_mark: [reactive-stack-js-meteor-svelte](https://github.com/reactive-stack-js/reactive-stack-js-meteor-svelte)  
            _based on_ [_Meteor Svelte tutorial_](https://www.meteor.com/tutorials/svelte/creating-an-app)
2.  **Reactive Stack JS using** [**REST**](https://restfulapi.net/)
    1.  :heavy\_check\_mark: [reactive-stack-js-rest-backend-fastify](https://github.com/reactive-stack-js/reactive-stack-js-rest-backend-fastify)
    2.  :heavy\_check\_mark: [reactive-stack-js-rest-frontend-react](https://github.com/reactive-stack-js/reactive-stack-js-rest-frontend-react)
    3.  :heavy\_check\_mark: [reactive-stack-js-rest-frontend-vue](https://github.com/reactive-stack-js/reactive-stack-js-rest-frontend-vue)
3.  **Reactive Stack JS using** [**GraphQL**](https://graphql.org/)
    1.  :heavy\_check\_mark: [reactive-stack-js-graphql-backend-fastify](https://github.com/reactive-stack-js/reactive-stack-js-graphql-backend-fastify)
    2.  :heavy\_check\_mark: [reactive-stack-js-graphql-frontend-vue](https://github.com/reactive-stack-js/reactive-stack-js-graphql-frontend-vue)

### Execution

Both Meteor repositories are standalone and can be started on their own.

In section 2, the backend has to be running for any of the 3 frontend repositories to work. Those, however, can be started independent of each other.

Section 3 is similar to section 2, however there is only one frontend solution available.  
_I do not plan to repeat react or svelte here, since that would serve no valuable purpose._

### App Description

WIP: [App Description](https://github.com/reactive-stack-js/reactive-stack-js/wiki/App-Description)

## Reactive Stack JS using MeteorJS

Follow instructions in each repository to install and run.  
Both meteor implementations can run in parallel.

## Reactive Stack JS using REST

Simply `yarn` in each repository, then `yarn start` in the backend and then the same in any frontend you wish to look at.  
The frontends can run in parallel.

## Reactive Stack JS using GraphQL

Simply `yarn` in each repository, then `yarn start` in the backend and then the same in the frontend.
