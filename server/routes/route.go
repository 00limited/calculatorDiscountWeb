package routes

import (
	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	ProductRoutes(r)
	UserRoutes(r)
	OrderRoutes(r)
}
