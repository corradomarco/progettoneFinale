import { Component } from '@angular/core';
import { Utente } from './utente';
import { UTENTI } from './mock-utenti';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoFinale';
  
  listaUtenti : Utente[] = UTENTI;
}


 