import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  xpaids: boolean = false;

  ngOnInit(): void {
    this.stateForm();
  }

  stateForm(): void {
    this.loginForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  }

  xpaidsBtn(): void {
    this.xpaids = !this.xpaids;
  }
}
