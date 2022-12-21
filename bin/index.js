#!/usr/bin/env node

const axios = require('axios');
const { translate } = require('@vitalets/google-translate-api');

const [, , ...args] = process.argv;

const text = args[0];
const source = args[1];
const target = args[2];

translate(text, { from: source, to: target })
    .then(res => console.log(res.text))
    .catch((err) => { console.log(err) })



