import { Template } from 'meteor/templating';

import { Persons } from '../api/persons.js';

import './body.html';
import './person.js';

Template.addPerson.events({
    'submit .new-person'(event) {
      event.preventDefault();
   
      var row = event.target.parentElement;
      var name  = row.querySelector(".name-value").value;
      var age  = row.querySelector(".age-value").value;
      var isActive  = row.querySelector(".active-value").checked;
   
      if (name) {
          Persons.insert({
            name, age, isActive,
            createdAt: new Date()
          }, ()=>{ 
            row.querySelector(".name-value").value = "";
            row.querySelector(".age-value").value = "";
            row.querySelector(".active-value").checked = false;
          })
      }
    }
});


Router.configure({
    layoutTemplate: 'layout'
});

const dataPerson = {
    persons: Persons.find({}, { sort: { createdAt: -1 } })
};

Router.map(function () {
    this.route('persons', {
        path: '/',
        data: dataPerson
    });

    this.route('editPerson', {
        path: '/editPerson',
        data: dataPerson
    });

    this.route('addPerson', {
        path: '/addPerson'
    });
});