// frontend/src/app/services/puzzle.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PuzzleResponse {
  puzzle: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private apiUrl = 'http://localhost:3000/api/puzzle';

  constructor(private http: HttpClient) {}

  getPuzzle(): Observable<PuzzleResponse> {
    return this.http.get<PuzzleResponse>(this.apiUrl);
  }

  move(direction: string): Observable<PuzzleResponse> {
    return this.http.post<PuzzleResponse>(`${this.apiUrl}/move?move=${direction}`, {});
  }

  shuffle(): Observable<PuzzleResponse> {
    return this.http.post<PuzzleResponse>(`${this.apiUrl}/shuffle`, {});
  }

  solve(): Observable<PuzzleResponse> {
    return this.http.post<PuzzleResponse>(`${this.apiUrl}/solve`, {});
  }
}