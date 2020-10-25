#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const ConsecteturSchema = new Schema(
	{
		natus: {type: String},
		fugiat: {type: String},
		voluptatem: {type: Object},
		dolorIds: {
			type: [Schema.Types.ObjectId],
			ref: 'Dolor'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);
module.exports = model('Consectetur', ConsecteturSchema, 'consecteturs');
