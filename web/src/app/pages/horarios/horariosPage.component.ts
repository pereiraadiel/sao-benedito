import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horariosPage.component.html',
  styleUrls: ['./horariosPage.component.scss'],
})
export class HorariosPageComponent {
  horariosMissaSaoBenedito = [
    {
      title: 'Quarta-feira',
      times: ['19:30'],
    },
    {
      title: 'Primeira Sexta-feira do mês',
      times: ['19:30'],
    },
    {
      title: 'Sábado',
      times: ['19:00'],
    },
    {
      title: 'Domingo',
      times: ['07:30', '09:00', '19:00'],
    },
  ];
  horariosConfissaoSaoBenedito = [
    {
      title: 'Terça-feira à Sexta-feira',
      times: ['das 15:00 às 17:00'],
    },
  ];
  horariosMissaSantana = [
    {
      title: 'Quinta-feira',
      times: ['19:30'],
    },
    {
      title: 'Primeira Sexta-feira do mês',
      times: ['19:30'],
    },
    {
      title: 'Domingo',
      times: ['10:30', '17:30'],
    },
  ];
  title = 'Paróquia São Benedito';
}
