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
