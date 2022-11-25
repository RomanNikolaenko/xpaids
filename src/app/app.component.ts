import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width = 0;
  height = 0;
  public createForm!: FormGroup;

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.property(this.width, this.height);

    this.stateForm();
  }

  stateForm() {
    this.createForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
      ]),
      promocode: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    console.log(this.createForm);
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;

    this.property(this.width, this.height);
  }

  property(w: Number, h: Number) {
    document.documentElement.style.setProperty('--vw', `${w}px`);
    document.documentElement.style.setProperty('--vh', `${h}px`);
  }
}
