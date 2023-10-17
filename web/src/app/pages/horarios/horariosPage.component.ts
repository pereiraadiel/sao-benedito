import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-horarios',
  templateUrl: './horariosPage.component.html',
  styleUrls: ['./horariosPage.component.scss'],
})
export class HorariosPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Horários das Santas Missas e de confissões nas comunidades da paróquia São Benedito',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'horários são benedito, paróquia são benedito planalto horários, paróquia são benedito horários, são benedito uberlândia, paróquia são benedito horário de missas, igreja são benedito horário de missa',
    });
    this.title.setTitle('Horários | Paróquia São Benedito');
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
      times: ['15:00 (Missa da Saúde)'],
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
      times: ['15:00 (Missa da saúde)'],
    },
    {
      title: 'Domingo',
      times: ['10:30', '17:30'],
    },
  ];
}
