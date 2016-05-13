// export class Contact {
//
//   constructor(info) {
//     this.info = info;
//     this.completeForm = [];
//   }
// }
export class Contact {

  constructor(info){
    this.name = info.name;
    this.phone = info.phone;
    this.location = info.location;
    this.contactInfo = [];
  }
}
