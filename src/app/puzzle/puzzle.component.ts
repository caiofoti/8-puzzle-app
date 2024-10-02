import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-puzzle',
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
}