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

    let firstName = form.find('firstName').val();
    let lastName  = form.find('.lastNameInput').val();
    let location  = form.find('.locationInput').val();
    let phone     = form.find('.phoneInput').val();
    let photo     = form.find('.photoInput').val();

    let newContact = new Contact (firstName, lastName, location, phone, photo);

// console.log(newContact);
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
addContactToView(contactObj) {
  let contactHTML = this.contactTemplate(contactObj)
  this.contactList.append(contactHTML);
};



contactTemplate(contactObj) {
  return`
    <input id="${contactObj.fistName}">

  `;
}
}
