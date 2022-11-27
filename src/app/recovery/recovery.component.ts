import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
})
export class RecoveryComponent implements OnInit {
  public recoveryForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.stateForm();
  }

  stateForm(): void {
    this.recoveryForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.recoveryForm.invalid) {
      return;
    }
  }
}
