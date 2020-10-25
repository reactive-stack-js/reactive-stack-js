#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const IpsumSchema = new Schema(
	{
		sed: {type: String},
		ut: {type: String},
		perspiciatis: {type: Object},
		loremId: {
			type: Schema.Types.ObjectId,
			ref: 'Lorem'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);
module.exports = model('Ipsum', IpsumSchema, 'ipsums');
