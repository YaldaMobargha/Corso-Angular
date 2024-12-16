import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-prova',
  imports: [
    MatSliderModule,
    MatCardModule
  ],
  standalone: true,
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent {

}
