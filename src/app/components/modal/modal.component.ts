import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.5, .5, .5)' }),
        animate(150),
      ]),
      transition('* => void', [
        animate(150, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),

    trigger('overlay', [
      transition('void => *', [animate(100, style({ opacity: '1' }))]),
      transition('* => void', [animate(200, style({ opacity: '0' }))]),
    ]),
  ],
})
export class ModalComponent implements OnDestroy {
  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnDestroy(): void {
    if (document.body.classList.contains('lock')) {
      document.body.classList.remove('lock');
      document.body.style.marginRight = '';
    }
  }
}
