// frontend/8-puzzle-app/src/app/puzzle/puzzle.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleService } from '../services/puzzle.service';

interface PuzzleResponse {
  puzzle: string[][];
}

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  @Input() puzzle: string[][] = [];
  emptyPosition: { row: number, col: number } = { row: -1, col: -1 };

  constructor(private puzzleService: PuzzleService) {}

  ngOnInit() {
    this.findEmptyPosition();
  }

  findEmptyPosition() {
    for (let row = 0; row < this.puzzle.length; row++) {
      for (let col = 0; col < this.puzzle[row].length; col++) {
        if (this.puzzle[row][col] === '') {
          this.emptyPosition = { row, col };
          return;
        }
      }
    }
  }

  move(row: number, col: number) {
    if (this.canMove(row, col)) {
      const direction = this.getMoveDirection(row, col);
      this.puzzleService.move(direction).subscribe((response: PuzzleResponse) => {
        this.puzzle = response.puzzle;
        this.findEmptyPosition();
      });
    }
  }

  canMove(row: number, col: number): boolean {
    const { row: emptyRow, col: emptyCol } = this.emptyPosition;
    return (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
           (col === emptyCol && Math.abs(row - emptyRow) === 1);
  }

  getMoveDirection(row: number, col: number): string {
    const { row: emptyRow, col: emptyCol } = this.emptyPosition;
    if (row === emptyRow) {
      return col > emptyCol ? 'right' : 'left';
    } else {
      return row > emptyRow ? 'down' : 'up';
    }
  }
}