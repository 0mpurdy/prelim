import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.signUpForm = this.fb.group({
      forename: this.fb.control(''),
      surname: this.fb.control(''),
      email: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.userService.login(form.value);
    this.router.navigate(['dashboard']);
  }

}
