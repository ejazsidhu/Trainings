import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') registrationForm: NgForm;
  defaultSubscription = 'advance';
  subscription = {
    email: '',
    subscriptionType: ''
  }
  isSubmited = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {

    console.log(this.registrationForm.form.value);
    if (this.registrationForm.valid) {
      this.subscription.email = this.registrationForm.form.value.email;
      this.subscription.subscriptionType = this.registrationForm.form.value.subscription;
      this.isSubmited = true;
    }

    console.log(this.subscription);


  }
}
