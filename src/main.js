

import data from './data/harrypotter/data.js';
import {housesGryffindor} from './data.js';
const filteredDatag= housesGryffindor (data);

import {housesSlytherin} from './data.js';
const filteredDataS= housesSlytherin (data);

import {housesRavenclaw} from './data.js';
const filteredDataR= housesRavenclaw (data);

import {housesHufflepuff} from './data.js';
const filteredDataH= housesHufflepuff (data);

console.log ( filteredDatag,filteredDataS, filteredDataR, filteredDataH );
