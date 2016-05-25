// Import Chai
import chai from 'chai';
import $ from 'jquery';

// Import Any Files to Test
// import '../src/js/main';
import { Contact } from '../src/js/models/contact';
import { AppController } from '../src/js/controllers/appController';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Testing our Contact Class', function () {

  let contact;

  beforeEach( function () {
    contact= new Contact();
  });

  // describe('Testing the Creation of Something', function () {

    it('should be an instance of contact', function () {
      contact = new Contact;
      expect(contact).to.be.an.instanceof(Contact);
    });

  // });


});

describe('Testing our AppController Class', function () {

  let appController;

  beforeEach( function () {
     appController= new AppController();
  });

  // describe('Testing the Creation of Something', function () {

    it('should be an instance of appController', function () {
      appController = new AppController;
      expect(appController).to.be.an.instanceof(AppController);
    });

  // });


});
