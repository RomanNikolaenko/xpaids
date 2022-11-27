import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<
    'open' | 'close'
  >('close');

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(): void {
    const lockMarginValue =
      window.innerWidth - document.body.offsetWidth + 'px';
    this.display.next('open');
    document.body.classList.add('lock');
    document.body.style.marginRight = lockMarginValue;
  }

  close(): void {
    this.display.next('close');
    document.body.classList.remove('lock');
    document.body.style.marginRight = '';
  }
}
