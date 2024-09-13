import { FormControl } from '@angular/forms';

// tslint:disable-next-line: class-name
export class setsValidator {

  static isValid(control: FormControl): any {

    if (isNaN(control.value)) {
      return {
        'not a number': true
      };
    }


    if (control.value > 6) {
      return {
        'must be less than 7': true
      };
    }
  }

}
