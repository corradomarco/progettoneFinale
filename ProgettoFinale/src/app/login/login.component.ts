import { Component, OnInit,Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Visible } from '../visible.model';
import { Statement } from '@angular/compiler';
import { UTENTI } from '../mock-utenti';
import { Utente } from '../utente';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() state : Visible;
  @Input() lista: Utente[];
  miaForm : FormGroup;
  @Input() utenteLoggato: Utente;
  constructor(fb : FormBuilder) {
        this.miaForm = fb.group({ 'mail' : ['', [Validators.required, Validators.email]],
                              'password' : ['', Validators.required]
                            });
  }

  onClick()
  {
    this.state.showLogin = !this.state.showLogin;
  }
   error : string;
onAccedi(){
   
    if(this.miaForm.valid){    
      for(let i = 0; i< this.lista.length; i ++){

        if(  this.miaForm.controls['mail'].value === this.lista[i].email  && this.miaForm.controls['password'].value === this.lista[i].password  ){
         this.utenteLoggato.email = this.lista[i].email;
         this.utenteLoggato.password = this.lista[i].password;
   
        }
      }
    }
  }
  ngOnInit() {
  }

}