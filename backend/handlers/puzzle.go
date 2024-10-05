package handlers

import (
    "encoding/json"
    "net/http"
    "backend/models"
)

var puzzle = models.NewPuzzle()

func GetPuzzle(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(puzzle)
}

func MovePuzzle(w http.ResponseWriter, r *http.Request) {
    direction := r.URL.Query().Get("move")
    puzzle.Move(direction)
    json.NewEncoder(w).Encode(puzzle)
}

func ShufflePuzzle(w http.ResponseWriter, r *http.Request) {
    puzzle.Shuffle()
    json.NewEncoder(w).Encode(puzzle)
}

func SolvePuzzle(w http.ResponseWriter, r *http.Request) {
    puzzle.Solve()
    json.NewEncoder(w).Encode(puzzle)
}
