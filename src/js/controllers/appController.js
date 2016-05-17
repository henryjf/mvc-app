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

    //find the form
    let form = this.contactForm;

    // each variable is assigned a value on the form according to its class
    let firstName = form.find('.firstNameInput').val();
    let lastName  = form.find('.lastNameInput').val();
    let location  = form.find('.locationInput').val();
    let phone     = form.find('.phoneInput').val();
    let photo     = form.find('.photoInput').val();


      // this.appendTemplate(contactForm);
      let input = this.contactForm.find('.input')
      input.val('');

    //instantiating a new contact
    let contact = new Contact (firstName, lastName, location, phone, photo);
    //assigning template to the contactHTML
    let contactHTML = this.makeTemplate(contact);
    //appending the template info on to the page
    this.contactList.append(contactHTML);

    //reset form
    form.find('.input').val('');
  });
}

//Passes info entered on the page to html form
makeTemplate(contact) {
  return`

  <div class ="contactCard">
  <li>${contact.firstName} ${contact.lastName}</li>
  <li>${contact.location}</li>
  <li>${contact.phone}</li>
  <li>${contact.photo}</li>
  `;

}


}
