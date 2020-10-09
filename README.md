![reactive-stack-js](https://avatars0.githubusercontent.com/u/72337471?s=75)

# Reactive Stack JS

![codacy](https://img.shields.io/codacy/grade/e0146e29a3134038b4dcf95db9eb5a38.svg)

In **reactive** programming, data is pushed, not pulled. Therefore, a reactive stack is, logically, one where data is pushed, not pulled.

What that means is that instead of the client _requesting_ the data from the server, the server is _pushing_ the data to the client.

Basically, this boils down to a simple description: the client is **observing** the data, and **reacting** to its changes.

## Description

This repository contains the description and links to various sub-repositories I created as a reactive stack [POC](https://en.wikipedia.org/wiki/Proof_of_concept).

There are 3 sections which are further split into repositories.

### Sections & Repositories

1.  **Reactive Stack JS using** [**MeteorJS**](https://www.meteor.com/)
    1.  Meteor with React
        1.  :heavy\_check\_mark: :construction: [reactive-stack-js-meteor-react](https://github.com/reactive-stack-js/reactive-stack-js-meteor-react)  
            _based on_ [_Meteor React tutorial_](https://www.meteor.com/tutorials/react/creating-an-app)
    2.  Meteor with Svelte
        1.  :x: :construction: [reactive-stack-js-meteor-svelte](https://github.com/reactive-stack-js/reactive-stack-js-meteor-svelte)  
            _based on_ [_Meteor Svelte tutorial_](https://www.meteor.com/tutorials/svelte/creating-an-app)
2.  **Reactive Stack JS using** [**REST**](https://restfulapi.net/)
    1.  :construction: [reactive-stack-js-rest-backend-fastify](https://github.com/reactive-stack-js/reactive-stack-js-rest-backend-fastify)
    2.  :construction: [reactive-stack-js-rest-frontend-react](https://github.com/reactive-stack-js/reactive-stack-js-rest-frontend-react)
    3.  :construction: [reactive-stack-js-rest-frontend-svelte](https://github.com/reactive-stack-js/reactive-stack-js-rest-frontend-svelte)
    4.  :construction: [reactive-stack-js-rest-frontend-vue](https://github.com/reactive-stack-js/reactive-stack-js-rest-frontend-vue)
3.  **Reactive Stack JS using** [**GraphQL**](https://graphql.org/)
    1.  :heavy\_check\_mark: [reactive-stack-js-graphql-backend-fastify](https://github.com/reactive-stack-js/reactive-stack-js-graphql-backend-fastify)
    2.  :heavy\_check\_mark: [reactive-stack-js-graphql-frontend-vue](https://github.com/reactive-stack-js/reactive-stack-js-graphql-frontend-vue)

**IMPORTANT: Due to sheer amount of code, I am currently only focused on my preferred solution under point 3!**

However, I will do my best to finalize all repositories and bring them to the same level of equal functionality.

### Execution

Both Meteor repositories are standalone and can be started on their own.

In section 2, the backend has to be running for any of the 3 frontend repositories to work. Those, however, can be started independent of each other.

Section 3 is similar to section 2, however there is only one frontend solution available.  
_I do not plan to repeat react or svelte here, since that would serve no valuable purpose._

### Requirements

*   Meteor ([_install_](https://www.meteor.com/install))
*   MongoDB ([_install_](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials))
    *   **IMPORTANT**: as a cluster (_see_ [_MongoDB: Convert a Standalone to a Replica Set_](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/))
    *   with featureCompatibilityVersion = "3.6" (_see_ [_setFeatureCompatibilityVersion_](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/))
*   [Yarn](https://yarnpkg.com/) (_preferred over npm_)

### App Description

WIP: [App Description](https://github.com/reactive-stack-js/reactive-stack-js/wiki/App-Description)

# Reactive Stack JS using MeteorJS

todo...

# Reactive Stack JS using REST

todo...

# Reactive Stack JS using GraphQL

todo...
