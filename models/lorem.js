#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const LoremSchema = new Schema(
	{
		itemId: {type: String, required: true, index: true},
		iteration: {type: Number, required: true},
		isLatest: {type: Boolean, required: true},
		firstname: {type: String, required: true, index: true},
		lastname: {type: String, required: true, index: true},
		username: {type: String, required: true, index: true},
		email: {type: String, required: true, index: true},
		species: {type: String, required: true},
		rating: {type: Number, required: true},
		description: {type: String, required: true},
		createdBy: {type: String},
		updatedBy: {type: String}
	},
	{
		timestamps: true,
		versionKey: false
	}
);
module.exports = model('Lorem', LoremSchema, 'lorems');
