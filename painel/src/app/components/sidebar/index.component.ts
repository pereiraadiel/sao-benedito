import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

type ButtonClickType =
  | 'home'
  | 'avisos'
  | 'clero'
  | 'horarios'
  | 'secretaria'
  | 'comunidades'
  | 'padroeiro'
  | 'historia'
  | 'eventos'
  | 'projetos'
  | 'midias'
  | 'signOut';

@Component({
  selector: 'app-sidebar',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class SidebarComponent {
  title = 'Paróquia São Benedito';

  @Input() openOverlay: boolean = false;
  @Output() onOverlayClosed = new EventEmitter<void>();

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
    private readonly api: ApiService
  ) {}

  handleNavigate(button: ButtonClickType) {
    const actions = {
      home: () => this.router.navigate(['/']),
      avisos: () => this.router.navigate(['/avisos']),
      clero: () => this.router.navigate(['/clero']),
      horarios: () => this.router.navigate(['/horarios']),
      secretaria: () => this.router.navigate(['/secretaria']),
      comunidades: () => this.router.navigate(['/comunidades']),
      padroeiro: () => this.router.navigate(['/padroeiro']),
      historia: () => this.router.navigate(['/historia']),
      eventos: () => this.router.navigate(['/eventos']),
      projetos: () => this.router.navigate(['/projetos']),
      midias: () => this.router.navigate(['/midias']),
      signOut: async () => {
        const accessToken = localStorage.getItem('@saobenedito:access');
        if (!accessToken) return false;
        const response = await this.api.auth.signOut({
          accessToken,
        });
        console.log(response);
        if (response.message === 'Sessão encerrada com sucesso!') {
          return this.router.navigate(['/auth/sign/in']);
        }
        return false;
      },
    };

    const action = actions[button];
    action();
  }

  handleCloseOverlay() {
    this.openOverlay = false;
    this.onOverlayClosed.emit();
  }
}
