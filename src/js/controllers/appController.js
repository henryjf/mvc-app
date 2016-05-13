import{ List } from '../models/list';
export class AppController {

  constructor(contactForm, instance) {
    this.contactForm = contactForm;
    this.listInstance = instance;
  }

  init() {
    this.contactForm.on('submit', (event) => {
      event.preventDefault();

      let input = this.contactForm.find('input');
      this.addPersonToContacts(input.val());
      input.val('');


    });
  };

  addPersonToContacts(contactInfo) {
    let l = new List(info);
    this.listInstance.contactInfo.push(l);
    this.addListToView(l);
  }






}
