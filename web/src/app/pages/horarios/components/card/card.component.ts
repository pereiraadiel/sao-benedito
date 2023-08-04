import { Component, Input } from '@angular/core';

type Horario = {
  title: string;
  times: string[];
};

@Component({
  selector: 'app-horario-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class HorarioCardComponent {
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
  @Input()
  photo: string = '';
  @Input()
  church: string = '';
  @Input()
  address: string = '';
  @Input()
  district: string = '';
  @Input()
  horarios: Horario[] = [];
}
