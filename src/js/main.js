import $ from 'jquery';
import _ from 'lodash';

import { Contact } from './models/contact';
import { AppController } from './controllers/appController';

//storing elements from html
let contactForm = $('.contactForm');
let listItems = $('.listItems');

//model the form
//creating a new instance of person
let person = new Contact('Person');
//creating a new instance of app and passing in the contact form and the list items 
let app = new AppController(contactForm, listItems);
//starts app
app.init();
