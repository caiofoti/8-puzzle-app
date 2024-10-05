package models

import (
    "math/rand"
    "time"
)

type Puzzle struct {
    Board [][]string `json:"puzzle"`
}

func NewPuzzle() *Puzzle {
    return &Puzzle{
        Board: [][]string{
            {"1", "2", "3"},
            {"4", "5", "6"},
            {"7", "8", ""},
        },
    }
}

func (p *Puzzle) Move(direction string) {
    // Implementar a lógica de movimento
}

func (p *Puzzle) Shuffle() {
    rand.Seed(time.Now().UnixNano())
    // Implementar a lógica de embaralhamento
}

func (p *Puzzle) Solve() {
    p.Board = [][]string{
        {"1", "2", "3"},
        {"4", "5", "6"},
        {"7", "8", ""},
    }
}