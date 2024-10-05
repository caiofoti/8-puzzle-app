// frontend/8-puzzle-app/src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzleService } from './services/puzzle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PuzzleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PuzzleService]
})
export class AppComponent implements OnInit {
  puzzle: string[][] = [];

  constructor(private puzzleService: PuzzleService) {}

  ngOnInit() {
    this.loadPuzzle();
  }

  loadPuzzle() {
    this.puzzleService.getPuzzle().subscribe(response => {
      this.puzzle = response.puzzle;
    });
  }

  shuffle() {
    this.puzzleService.shuffle().subscribe(response => {
      this.puzzle = response.puzzle;
    });
  }

  solve() {
    this.puzzleService.solve().subscribe(response => {
      this.puzzle = response.puzzle;
    });
  }
}