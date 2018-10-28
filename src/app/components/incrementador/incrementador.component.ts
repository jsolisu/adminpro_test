import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-inferrable-types
  @Input() leyenda: string = '';

  // tslint:disable-next-line:no-inferrable-types
  @Input() progreso: number = 0;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    if (newValue < 0) {
      this.progreso = 0;
    } else if (newValue > 100) {
      this.progreso = 100;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;

    if (this.progreso < 0) {
      this.progreso = 0;
    }

    if (this.progreso > 100) {
      this.progreso = 100;
    }

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
