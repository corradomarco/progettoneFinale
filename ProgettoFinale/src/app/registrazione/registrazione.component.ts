import { Component, OnInit , Input,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utente } from '../utente';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
      miaForm : FormGroup;
  @Input() lista;
  error : string;
  constructor(fb : FormBuilder) { 
    this.miaForm = fb.group({'nome':['',Validators.required],
                              'cognome':['', Validators.required],
                              'mail' : ['', [Validators.required, Validators.email]],
                              'password' : ['', Validators.required]
                            });
  }
  ngOnInit() {
  }

  onAddUtenti()
  {
    if (this.miaForm.valid)
    {
      let user : Utente = new Utente();
      user.nome = String(this.miaForm.controls['nome'].value);
      user.cognome = String(this.miaForm.controls['cognome'].value);
      user.email = String (this.miaForm.controls['mail'].value);
      user.password = String(this.miaForm.controls['password'].value);

      this.lista.push(user);
    }
    else {
        this.error = "vffdasfdasfds";
    }
  }
}
