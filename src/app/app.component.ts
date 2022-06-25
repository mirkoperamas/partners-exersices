import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'partners-exersices';

  constructor() {}

  ngOnInit(): void {}

  guardar(miFormulario: NgForm) {
    console.log(miFormulario.value);
  }
}
