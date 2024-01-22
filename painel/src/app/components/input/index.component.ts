import { Component, Input, Output, EventEmitter } from '@angular/core';

type InputType = 'password' | 'email' | 'text' | 'number' | 'search' | 'url';

@Component({
  selector: 'app-input',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class InputComponent {
  @Input() textarea: 'true' | 'false' = 'false';

  @Input() type: InputType = 'text';

  @Input() id = '';

  @Input() label = '';

  @Input() placeholder = '';

  @Output() onChangeValue = new EventEmitter();

  value = '';

  onChange() {
    this.onChangeValue.emit(this.value);
  }

  isTextarea() {
    return this.textarea === 'true';
  }
}
