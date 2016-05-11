import{ Contact } from '../models/contact';
export class AppController {

  constructor(name, phone, location) {
    this.name = name;
    this.phone = phone;
    this.location = location;

  }
}
