import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './verify-email.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
  display$: Observable<'open' | 'close'> | undefined;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  ngOnDestroy(): void {
    if (document.body.classList.contains('lock')) {
      document.body.classList.remove('lock');
      document.body.style.marginRight = '';
    }
  }
}
