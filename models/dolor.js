#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const Ipsum = require("./ipsum");

const DolorSchema = new Schema(
	{
		unde: {type: String},
		omnis: {type: String},
		iste: {type: Object},
		ipsumId: {
			type: Schema.Types.ObjectId,
			ref: 'Ipsum'
		},
		dolorId: {
			type: Schema.Types.ObjectId,
			ref: 'Dolor'
		}
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
module.exports = model('Dolor', DolorSchema, 'dolors');