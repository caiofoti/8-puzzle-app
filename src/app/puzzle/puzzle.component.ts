import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  puzzle: number[][] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ puzzle: number[][] }>('/api/puzzle').subscribe(data => {
      this.puzzle = data.puzzle;
    });
  }

  shufflePuzzle(): void {
    // Implement shuffle logic here
  }

  solvePuzzle(): void {
    // Implement solve logic here
  }
}