import { Component } from '@angular/core';
import { Utente } from './utente';
import { UTENTI } from './mock-utenti';
import { Visible } from './visible.model';
import {Annuncio} from './annuncio';
import {ANNUNCI} from './mock-annunci';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoFinale';
    state : Visible = new Visible();
  
  listaUtenti : Utente[] = UTENTI;
    listaAnnunci : Annuncio[] = ANNUNCI;
  utenteLoggato : Utente = new Utente();
    constructor()
  {
    this.utenteLoggato.email = "###";
  }
}


 