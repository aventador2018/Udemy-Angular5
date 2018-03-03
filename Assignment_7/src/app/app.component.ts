import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenName = 'Test';

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'projectname': new FormControl(null, Validators.required, this.forbiddenProjectName),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'projectstatus': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  // forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenName === control.value) {
  //     return {'nameIsForbidden': true};
  //   } else {
  //     return null;
  //   }
  // }

  forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test' ) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
