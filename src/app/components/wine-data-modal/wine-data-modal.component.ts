import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'wine-data-modal',
  templateUrl: './wine-data-modal.component.html',
  styleUrls: ['./wine-data-modal.component.css'],
  animations: [
    trigger('backdropFade', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [ // fade-in animation
        style({ // initial style, before added to the DOM
          opacity: 0
        }),
        animate(300)
      ]),
      transition('* => void', [ // fade-out animation
        animate(300, style({
          opacity: 0,
        }))
      ])
    ]),
    trigger('modalSlide', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [ // slide-in animation
        animate(400, keyframes([
          style({
            transform: 'translateY(-500px) scale(0.3)',
            opacity: 0,
            offset: 0 // offset means the fraction of time of the whole animation time
          }),
          style({
            transform: 'translateY(200px) scale(0.65)',
            opacity: 0.2,
            offset: 0.6
          }),
          style({
            transform: 'translateY(0) scale(1)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [ // slide-out animation
        animate(300, style({
          opacity: 0,
          transform: 'translateY(-500px)'
        }))
      ])
    ])
  ]
})

export class WineDataModalComponent implements OnInit {

  @Output() closeThis = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  closeMe() {
    this.closeThis.emit();

  }

}