import $ from 'jquery';
import _ from 'lodash';

import { Contact } from './models/contact';
import { AppController } from './controllers/appController';

//storing elements from html
let contacts = $('.contacts');
let listItems = $('.listItems');

//model the form
let form = new Form('Contact List');

let app = new AppController(contacts, listItems, form);
//starts app
app.init();
