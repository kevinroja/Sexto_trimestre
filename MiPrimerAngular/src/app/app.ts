import { Component, signal, ɵJSACTION_BLOCK_ELEMENT_MAP } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bienvenidos = 'Hola Belman';

  Estudiante = ['Cuadernos', 'Gorras', 'Gafas']
}
