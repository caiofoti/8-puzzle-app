package main

import (
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "backend/handlers"
)

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/api/puzzle", handlers.GetPuzzle).Methods("GET")
    r.HandleFunc("/api/puzzle/move", handlers.MovePuzzle).Methods("POST")
    r.HandleFunc("/api/puzzle/shuffle", handlers.ShufflePuzzle).Methods("POST")
    r.HandleFunc("/api/puzzle/solve", handlers.SolvePuzzle).Methods("POST")

    log.Println("Server started at :3000")
    log.Fatal(http.ListenAndServe(":3000", r))
}
