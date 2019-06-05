import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validator, FormGroup} from '@angular/forms';
import { Annuncio } from '../annuncio';
import { Utente } from '../utente';
@Component({
  selector: 'app-bacheca-prodotti',
  templateUrl: './bacheca-prodotti.component.html',
  styleUrls: ['./bacheca-prodotti.component.css']
})
export class BachecaProdottiComponent implements OnInit {
 miaForm : FormGroup;
  @Input() lista;
  @Input() utenteLoggato: Utente;

  error : string;
  constructor(fb : FormBuilder) { }

  ngOnInit() {
  }
 onAddCommento(annuncio: Annuncio, comment: HTMLInputElement ){

    

    if(this.utenteLoggato.email != "###"){
      annuncio.commento = comment.value;
    }
    else{
      this.error = "NON SEI LOGGATO";
    }
  }

}


 