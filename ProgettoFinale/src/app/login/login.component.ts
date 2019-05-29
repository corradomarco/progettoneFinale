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
  @Input() lista;
  miaForm : FormGroup;
  log : boolean;
  constructor(fb : FormBuilder) {
        this.miaForm = fb.group({'nome':['',Validators.required],
                              'cognome':['', Validators.required],
                              'mail' : ['', [Validators.required, Validators.email]],
                              'password' : ['', Validators.required]
                            });
  }

  onClick()
  {
    this.state.showLogin = !this.state.showLogin;
  }

  onAccedi(){
    if(this.miaForm.valid){
      for(let i = 0; i<Utente.length; i ++){
        if(Utente[i].nome == "nome" && Utente[i].cognome == "cognome" && Utente[i].mail == "mail" && Utente[i].password == "password"){
          this.log = true;
        }
      }
    }
  }
  ngOnInit() {
  }

}
