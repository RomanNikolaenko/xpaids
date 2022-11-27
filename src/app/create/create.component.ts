import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../components/modal/modal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public createForm!: FormGroup;
  public open: boolean = false;
  public newCode: boolean = false;
  public seconds: number = 15;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.stateForm();
  }

  openModal() {
    this.modalService.open();
    this.open = !this.open;
  }

  close() {
    this.modalService.close();
    this.open = !this.open;
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
