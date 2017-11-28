import { Template } from 'meteor/templating';

import { Persons } from '../api/persons.js';

import './person.html';

const isEdit = ()=>{ 
    var routeName = Router.current();
    return routeName && routeName.route.getName() === "editPerson" ? true : false 
};

Template.person.helpers({
  isEdit: isEdit
}) 

Template.person.events({
	'click .delete'() {
		Persons.remove(this._id);
	},
	'click .update'(event) {
		event.preventDefault();
	
		var row = event.target.parentElement;
		var name  = row.querySelector(".name-value").value;
		var age  = row.querySelector(".age-value").value;
		var isActive  = row.querySelector(".active-value").checked;
		Persons.update(this._id, {
			$set: { name: name, age: age, isActive: isActive }
		});
	}
});