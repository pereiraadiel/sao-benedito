import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-horarios',
  templateUrl: './horariosPage.component.html',
  styleUrls: ['./horariosPage.component.scss'],
})
export class HorariosPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Fique por dentro dos horários de funcionamento das nossas comunidades.',
    });
  }

  horariosMissaSaoBenedito = [
    {
      title: 'Quarta-feira',
      times: ['19:30'],
    },
    {
      title: '1ª Sexta-feira do mês',
      times: ['19:30'],
    },
    {
      title: '2ª Sexta-feira do mês',
      times: ['19:30 (Missa da Saúde)'],
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
      title: '1ª Sexta-feira do mês',
      times: ['19:30'],
    },
    {
      title: '2ª Sexta-feira do mês',
      times: ['19:30 (Missa da saúde)'],
    },
    {
      title: 'Domingo',
      times: ['10:30', '17:30'],
    },
  ];
  title = 'Paróquia São Benedito';
}
