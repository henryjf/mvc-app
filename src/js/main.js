import $ from 'jquery';
import _ from 'lodash';

import { AppController } from './controllers/appController';

//pass dom elements to controller
let contactForm = $('.newcontact');
let contactList = $('.contactList');

// console.log(contactForm);

let app = new AppController(contactForm, contactList);

// kick off app
app.init();



// import { Contact } from './models/contact';
// import { AppController } from './controllers/appController';
//
// //storing elements from html
// let contactForm = $('.contactForm');
// let listItems = $('.listItems');
//
// //model the form
// //creating a new instance of Contact w property of person
// let person = new Contact('Person');
// console.log(person);
// //creating a new instance of app and passing in the contact form and the list items
// let app = new AppController(contactForm, listItems);
// // console.log(app);
// //starts app
// app.init();
