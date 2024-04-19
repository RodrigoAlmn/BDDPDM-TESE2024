import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss'],
})
export class AltasComponent {
  errors = [
    {
      type: 'required',
      message: 'Campo Requerido'
    },
    {
      type:'minlength',
      message: 'El campo debe tener al menos 4 caracteres'
    }
  ]
  
  login = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(4)]),
    empresa: new FormControl('', [Validators.required,Validators.minLength(4)]),
    fecha: new FormControl('', [Validators.required]),
    lider: new FormControl('', [Validators.required]),
    desc: new FormControl('',[Validators.required])
  })
  constructor() {}

}
