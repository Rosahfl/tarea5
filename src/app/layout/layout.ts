import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet], // 👈 Aquí
  templateUrl: './layout.html',
})
export class Layout {}