import { Contact } from '../models/contact';

export class AppController {

  constructor(contactForm, contactList) {
    this.contactForm = contactForm;
    this.contactList = contactList;
  }

  init() {
    this.formSubmit();
  }

formSubmit() {
  this.contactForm.on('submit', (event) => {
    event.preventDefault();



    //make sure i register the submit
    // console.log('form submitted');

    //find the form
    let form = this.contactForm;

    // console.log(this);

    let firstName = form.find('#firstNameInput').val();
    let lastName  = form.find('#lastNameInput').val();
    let location  = form.find('#locationInput').val();
    let phone     = form.find('#phoneInput').val();
    let photo     = form.find('#photoInput').val();

    let newContact = new Contact (firstName, lastName, location, phone, photo);

console.log(newContact);
      // this.appendTemplate(contactForm);
      let input = this.contactForm.find('.input')
      input.val('');
  });


  // appendTemplate(contactObj) {
  //   `
  //   <p>${contactObj.firstName}</p>
  //   `;
  // }
}

}

// import $ from 'jquery';
//
// import{ List } from '../models/list';
// export class AppController {
// //created contructor for the AppController class that has the properties form, listElem, and instance
//   constructor(form, listElem, instance) {
//     this.form = form;
//     this.listArea = listElem;
//     this.contactInstance = instance;
//   }
//
//
// //starts the application
//   init() {
//     //using an on click w submit property
//     this.form.on('submit', (event) => {
//       event.preventDefault();
//       let input = this.form.find('input');
//       this.addPersonToContacts(input.val());
//       input.val('');
//     });
//     // console.log(this.addPersonToContacts);
//   };
//
//   addPersonToContacts(listForm) {
//     let l = new List(listForm);
//     this.contactInstance.contactInfo.push(l);
//     this.addListToView(l);
//
//   };
//
//   addListToView(listObj) {
//     let listHTML = this.listTemplate(listObj);
//     this.listArea.prepend(listHTML);
//   };
//
// listTemplate(listObj) {
//   return `<input class=$'{listObj.info.name}'>;
//   <input class=$'{listObj.info.phone}'>;
//   <input class=$'{listObj.info.location}'>;
//   `
// };
//
// };
