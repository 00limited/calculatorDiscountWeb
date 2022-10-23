package usersdto

type CreateUserRequest struct {
	Name    string `json:"name" form:"name" `
	Price   int    `json:"price" `
	OrderID uint   `json:"order_id"`
}
type CreateUserresponse struct {
	Name        string `json:"name" form:"name" `
	PriceBefore int    `json:"price_before" `
	PriceAfter  uint   `json:"price_after"`
}

type UpdateUserRequest struct {
	Name      string `json:"name" form:"name"`
	ProductId []int  `gorm:"type: int" json:"product" `
	OrderID   uint   `json:"order_id"`
}
