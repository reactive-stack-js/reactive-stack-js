const _ = require("lodash");
const casual = require("casual");
const mongoose = require("mongoose");

const {v4: uuidv4} = require("uuid");
const Lorem = require("./models/lorem");
const Ipsum = require("./models/ipsum");
const Dolor = require("./models/dolor");
const Consectetur = require("./models/consectetur");

casual.seed(2222);

let EMAILS = [];

const createEmail = () => {
	let email = _.toLower(casual.email);
	while (_.includes(EMAILS, email)) email = _.toLower(casual.email);
	EMAILS.push(email);
	return email;
};

const SPECIES = ["Human", "Draenei", "Dryad", "Dwarf", "Gnome", "Worgde"];

const COUNT = casual.integer(995, 1005);			// use (999500, 1000500)
const RANGE = _.range(COUNT);
const lorems = _.reduce(RANGE, (r, i) => {
	let max = casual.integer(1, 15);
	max = casual.integer(1, max);
	max = casual.integer(1, 2 * max);

	let email = createEmail();
	let words = _.words(email);
	let firstname = _.upperFirst(words[0]);
	let lastname = _.upperFirst(words[1]);
	let username = _.split(email, "@")[0];

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
		lorem.createdAt = createdAt.add(iteration, "hours").toDate();
		r.push(lorem);
	});
	return r;
}, []);

const _createIpsum = (loremId) => new Ipsum({
	sed: casual.words(3),
	ut: casual.words(4),
	perspiciatis: {demo: casual.word},
	loremId,
	createdAt: casual.moment.toDate()
});

const _createDolor = (ipsumId) => new Dolor({
	unde: casual.words(3),
	omnis: casual.words(4),
	iste: {demo: casual.word},
	ipsumId,
	createdAt: casual.moment.toDate()
});

const _createConsectetur = (dolorId1, dolorId2) => new Consectetur({
	natus: casual.words(3),
	fugiat: casual.words(4),
	voluptatem: {demo: casual.word},
	dolorIds: [dolorId1, dolorId2],
	createdAt: casual.moment.toDate()
});

mongoose
	.connect("mongodb://localhost:27017/reactivestackjs", {
		poolSize: 10,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		await Lorem.deleteMany({});
		await Ipsum.deleteMany({});
		await Dolor.deleteMany({});
		await Consectetur.deleteMany({});
		console.log("data nuked...");

		const loremIds = [];
		for (let lorem of lorems) {
			lorem = new Lorem(lorem);
			lorem = await lorem.save();
			if (_.size(loremIds) < 2) loremIds.push(lorem._id);
		}
		const count = await Lorem.find();
		console.log("inserted", _.size(count), "rows into lorems");

		let ipsum1 = await _createIpsum(loremIds[0]).save();
		let ipsum2 = await _createIpsum(loremIds[1]).save();
		console.log("inserted 2 rows into ipsums");

		let dolor1 = await _createDolor(ipsum1._id).save();
		let dolor2 = _createDolor(ipsum2._id);
		dolor2.dolorId = dolor1._id;
		dolor2 = await dolor2.save();

		dolor1.dolorId = dolor2._id;
		await dolor1.save();
		console.log("inserted 2 rows into dolors");

		const consectetur1 = await _createConsectetur(dolor1._id, dolor2._id).save();
		console.log("inserted 1 row into consecteturs");

		mongoose.connection.close();
	})
	.catch(console.error);
