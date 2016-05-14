import{ List } from '../models/list';
export class AppController {

  constructor(form, listElem, instance) {
    this.form = form;
    this.listArea = listElem;
    this.contactInstance = instance;
  }

  init() {
    this.contactForm.on('submit', (event) => {
      event.preventDefault();

      let input = this.form.find('input');
      this.addPersonToContacts(input.val());
      input.val('');
    });
  };

  addPersonToContacts(listForm) {
    let l = new List(listForm);
    this.contactInstance.contactInfo.push(l);
    this.addListToView(l);
  };

  addListToView(listObj) {
    let listHTML = this.listTemplate(listObj.info);
    this.listArea.prepend(listHTML);
  };

listTemplate(listForm) {
  return `<input class=$'{info.name}'>;
  `
};

}
