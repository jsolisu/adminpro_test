import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaURL: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      this.guardarAjustes();
    }
  }

  aplicarTema(tema: string) {
    const URL = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', URL);

    if (this.ajustes.tema !== tema) {
      this.ajustes.tema = tema;
      this.ajustes.temaURL = URL;
      this.guardarAjustes();
    }
  }
}

interface Ajustes {
  temaURL: string;
  tema: string;
}
