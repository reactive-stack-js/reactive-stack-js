<a href="https://reactive-stack-js.github.io/reactive-stack-js/">
  <img alt="reactive-stack-js" src="https://avatars0.githubusercontent.com/u/72337471?s=75" width="75">
</a>

# Reactive Stack
[![codacy](https://img.shields.io/codacy/grade/4c600ced52d34f98ab093ee6d51e1c70.svg)](https://www.codacy.com/project/cope/reactive-stack/dashboard)

Reactive Stack - [the plan](https://docs.google.com/document/d/19zDe5Ee3U8-Q_3z7_SQ7xuOmcqVtCfU2Of8-Slk2nxQ)

__IMPORTANT__: All implementations use the __one and the same__ database!<br/>
The idea is that if you make a change in one, all others should _magically_ update.

### Content

1. :heavy_check_mark: Using Meteor with React
    1. :heavy_check_mark: __meteor-react__ (_based on [Meteor React tutorial](https://www.meteor.com/tutorials/react/creating-an-app)_)
2. :heavy_check_mark: Using Meteor with Svelte
    1. :heavy_check_mark: __meteor-svelte__ (_based on [Meteor Svelte tutorial](https://www.meteor.com/tutorials/svelte/creating-an-app)_)
3. :heavy_check_mark: Using own implementation
    1. :heavy_check_mark: __backend-fastify__ (_fastify backend, works with both frontends below_)
    2. :heavy_check_mark: __frontend-react__ (_react frontend for any backend_)
    3. :heavy_check_mark: __frontend-svelte__ (_svelte frontend for any backend_)
    3. :heavy_check_mark: __frontend-vue__ (_vue frontend for any backend_)
4. :x: :construction: Using GraphQL
    1. :x: :construction: __graphql-backend-fastify__ (_graphql-fastify backend, works with both frontends below_)
    2. :x: :construction: __graphql-frontend-vue__ (_graphql-vue frontend for any backend_)

### Requirements for 1-3

* Meteor (_[install](https://www.meteor.com/install)_)
* MongoDB (_[install](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)_)
    * local as a cluster (_see [MongoDB: Convert a Standalone to a Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/)_)
    * with featureCompatibilityVersion = "3.6" (_see [setFeatureCompatibilityVersion](https://docs.mongodb.com/manual/reference/command/setFeatureCompatibilityVersion/)_)

### Startup
:heavy_check_mark: Run &nbsp;`npm install`&nbsp; and then &nbsp;`npm run data`&nbsp; in the root folder, to create the dataset.

1. :heavy_check_mark: meteor-react:
    * go into `./a-meteor/1-meteor-react/` folder
    * run &nbsp;`meteor npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;   (_alternatively, you can run_ &nbsp;`meteor run --port 3001`&nbsp;)
    * open http://localhost:3001/
2. :heavy_check_mark: meteor-svelte:
    * go into `./a-meteor/2-meteor-svelte/` folder
    * run &nbsp;`meteor npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;   (_alternatively, you can run_ &nbsp;`meteor run --port 3002`&nbsp;)
    * open http://localhost:3002/
3. :heavy_check_mark: backend-fastify:
    * go into `./b-plain/3-backend-fastify/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;
    * open http://localhost:3003/
4. :heavy_check_mark: frontend-react:
    * __IMPORTANT__: make sure backend-fastify is started
    * go into `./b-plain/4-frontend-react/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;
    * open http://localhost:3004/
5. :heavy_check_mark: frontend-svelte:
    * __IMPORTANT__: make sure backend-fastify is started
    * go into `./b-plain/5-frontend-svelte/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm dev`&nbsp;
    * open http://localhost:3005/
6. :heavy_check_mark: frontend-vue:
    * __IMPORTANT__: make sure backend-fastify is started
    * go into `./b-plain/6-frontend-vue/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;
    * open http://localhost:3006/
7. :x: :construction: graphql/backend-fastify:
    * go into `./c-graphql/backend-fastify/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;
    * open http://localhost:3007/
8. :x: :construction: graphql/frontend-vue:
    * __IMPORTANT__: make sure backend-fastify is started
    * go into `./c-graphql/frontend-vue/` folder
    * run &nbsp;`npm install`&nbsp;
    * run &nbsp;`npm start`&nbsp;
    * open http://localhost:3008/

### Reactive Stack POC Description

1. Facebook or Google login (_or both…_)<br/>
_With JWT tokens._<br/>&nbsp;
2. Collection lorems<br/>
_Use [casual](https://www.npmjs.com/package/casual) to generate random data._<br/>
_(run &nbsp;`npm run data`&nbsp; in the root folder)_
<br/>&nbsp;
    1. __id__			ObjectID  	(_not editable_)
    2. __itemId__		string		(_not editable, create with [uuidv4](https://github.com/uuidjs/uuid), ties iterations together_)
    3. __iteration__	int			(_not editable, autoincrement_)
    4. __isLatest__		boolean		(_only latest iteration has true_)
    5. __isDraft__		boolean		(_only one per itemId, no iteration until submited_)
    6. __rating__		int
    7. __firstname__	string
    7. __lastname__		string
    8. __description__	multiline
    9. __createdAt__	date		 (_not editable_)
    10. __species__		enum
        1. _Human_
        2. _Draenei_
        3. _Dryad_
        4. _Dwarf_
        5. _Gnome_
        6. _Worgde_
3. Create ~1000 instances<br/>
_Reset data every hour for any deployed demo_<br/>&nbsp;
4. Create a listing page, to show a page of lorems data
    1. Grid and preview sections
    2. In grid, only show isLatest=true rows, since this is the active iteration
    3. Create filters for all fields	(_multi filter with AND_)
    4. Allow sorting on all fields	    (_multi-sort optional_)
    5. Allow page navigation		    (_10 items per page_)
    6. Selected row actions:
        1. View		                    (_default when selected - shows item in preview_)
        2. Edit		                    (_opens editor page, creates draft - fully collaborative_)
        3. History		                (_shows a grid with all iterations in preview, sorted by iteration desc_)
        4. Delete
    7. Allow user to chose:
        1. Update rows in real-time
        2. Update rows in user defined interval (_in minutes_)
        3. Notify user that data has changed, but they manually update<br/>&nbsp;
5. Create the editor page for an item, fully collaborative
    1. On Edit in listing, if draft exists for that item, handle it
        1. If draft is currently being edited, send the user there
        2. Otherwise allow the user to throw that draft away and start a new one
    2. Save button saves the draft
    3. Save and close saves the draft and goes back to listing
    4. Submit saves the draft as a new iteration with isDraft=false


## TODO

TypeORM
moleculerjs
fastest-validator

