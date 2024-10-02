import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PuzzleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '8-puzzle-app';
}