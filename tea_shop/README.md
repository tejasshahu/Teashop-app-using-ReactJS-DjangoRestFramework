#Sadguru's Amrit-Tulya - Tea Shop API V1

1) `http://localhost:8000/api/products/`: To get all products.
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept
Sample Response Data:
[
    {
        "id": 31,
        "name": "Product A",
        "description": "Product A description goes here.....",
        "price": 10
    },
    {
        "id": 32,
        "name": "Product B",
        "description": "Product B description goes here.....",
        "price": 15
    }
]

2) `http://localhost:8000/api/product_operation/31/`: To get a single product detail.
Allow: GET, PUT, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept
Sample Response Data:
{
    "id": 31,
    "name": "Product A",
    "description": "Product A description goes here.....",
    "price": 10
}