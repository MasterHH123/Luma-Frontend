package main

import (
	"net/http"
	"log"
)

func main(){

	log.Fatal(http.ListenAndServe(":8080", http.FileServer(http.Dir("."))))

	log.Println("Server is up and running")
	

}
