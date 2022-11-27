import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  public newCode: boolean = false;
  public seconds: number = 15;
  showDialog = false;

  ngOnInit(): void {
    this.stateForm();
  }

  openModal() {
    const lockMarginValue =
      window.innerWidth - document.body.offsetWidth + 'px';

    this.showDialog = !this.showDialog;
    document.body.classList.add('lock');
    document.body.style.marginRight = lockMarginValue;
  }

  closeModal() {
    this.showDialog = !this.showDialog;
    document.body.classList.remove('lock');
    document.body.style.marginRight = '';
  }

  stateForm(): void {
    this.createForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      promocode: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }
  }

  sendButton(): void {
    this.newCode = !this.newCode;

    const timer = setInterval(() => {
      this.seconds--;
    }, 1000);

    setTimeout(() => {
      this.newCode = !this.newCode;
      this.seconds = 15;
      clearInterval(timer);
    }, 15000);
  }
}
