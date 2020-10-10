const fs = require('fs');
const _ = require('lodash');
const casual = require('casual');
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

casual.seed(2222);

let EMAILS = [];

const createEmail = () => {
	let email = _.toLower(casual.email);
	while (_.includes(EMAILS, email)) {
		email = _.toLower(casual.email);
	}
	EMAILS.push(email);
	return email;
};

const SPECIES = ['Human', 'Draenei', 'Dryad', 'Dwarf', 'Gnome', 'Worgde'];

const COUNT = casual.integer(995, 1005);    // use (999500, 1000500)
const RANGE = _.range(COUNT);
const lorems = _.reduce(RANGE, (r, i) => {
	let max = casual.integer(1, 15);
	max = casual.integer(1, max);
	max = casual.integer(1, 2 * max);

	let email = createEmail();
	let words = _.words(email);
	let firstname = _.upperFirst(words[0]);
	let lastname = _.upperFirst(words[1]);
	let username = _.split(email, '@')[0];

	let createdAt = casual.moment;
	let itemId = uuidv4();
	let iterations = _.range(1, max + 1);
	let rating = casual.integer(800, 1500);
	let species = casual.random_element(SPECIES);
	_.each(iterations, (iteration) => {
		rating += casual.integer(-10, 20);
		let lorem = {};
		lorem.firstname = firstname;
		lorem.lastname = lastname;
		lorem.username = username;
		lorem.email = email;
		lorem.itemId = itemId;
		lorem.iteration = iteration;
		lorem.isLatest = iteration === max;
		lorem.rating = rating;
		lorem.species = species;
		lorem.description = casual.description;
		lorem.createdAt = createdAt.add(iteration, 'hours').toDate();
		r.push(lorem);
	});
	return r;
}, []);

const loremsSchema = new mongoose.Schema({
	itemId: String,
	iteration: Number,
	isLatest: Boolean,
	rating: Number,
	firstname: String,
	lastname: String,
	username: String,
	email: String,
	description: String,
	createdAt: Date,
	species: String
}, {versionKey: false});
const Lorems = mongoose.model('lorems', loremsSchema, 'lorems');

mongoose
	.connect('mongodb://localhost:27017/lorems', {
		poolSize: 10,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		await Lorems.deleteMany({});
		let count = await Lorems.find();
		console.log('lorems nuked...');

		for (let lorem of lorems) {
			lorem = new Lorems(lorem);
			await lorem.save();
		}
		count = await Lorems.find();
		console.log('inserted', _.size(count), 'rows into lorems');
		mongoose.connection.close();
	})
	.catch(console.error);
