import { Meteor } from 'meteor/meteor';
import { Persons } from '../imports/api/persons.js';

const dummyPersons = [
	{ name: "Mike Jagger", age: 1, isActive: true },
	{ name: "Opra Winfrey", age: 2, isActive: true },
	{ name: "Petro Poroshenko", age: 3, isActive: true },
	{ name: "Some Guy", age: 4, isActive: false },
	{ name: "Verka Serduchka", age: 5, isActive: true }
]

Meteor.startup(() => {

    if (Persons.find().count() === 0) {
		dummyPersons.forEach(function(item) {
			Persons.insert(item);
		});
    }
});


