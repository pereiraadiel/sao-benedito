import { Component, Input, Output, EventEmitter } from '@angular/core';

type ButtonType = 'submit' | 'button';

@Component({
  selector: 'app-button',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ButtonComponent {
  @Input() type: ButtonType = 'submit';

  @Input() content = '';

  @Output() onClick = new EventEmitter();

  handleOnClick() {
    this.onClick.emit();
  }
}
