import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  inSubmission = false;
  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });
  showAlert = false;
  alertMsg = 'PleaseWait';
  alertColor = 'blue';
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'PleaseWait';
    this.alertColor = 'blue';
    try {
      let { email, password } = this.loginForm.value;
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
      this.alertMsg = 'An unexpected error occured.please try later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.alertMsg = 'Success! Your account has been created';
    this.alertColor = 'green';
    this.inSubmission = false;
  }
}
