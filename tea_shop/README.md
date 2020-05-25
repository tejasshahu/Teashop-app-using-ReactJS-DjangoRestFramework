## Sadguru's Amrit-Tulya - Tea Shop API v1

1) To get all products. <br />
        URL: `http://localhost:8000/api/products/` <br />

        Allow: GET, POST, HEAD, OPTIONS  <br />
        Content-Type: application/json  <br />
        Vary: Accept  <br />
        *Sample Response Data:*  <br />
        [
            {
                "id": 31,
                "name": "Product A",
                "description": "Product A description goes here.....",
                "price": 10
            },  <br />
            {
                "id": 32,
                "name": "Product B",
                "description": "Product B description goes here.....",
                "price": 15
            }
        ]

2) To get a single product detail. <br />
        URL: `http://localhost:8000/api/product_operation/31/`  <br />

        Allow: GET, PUT, DELETE, HEAD, OPTIONS  <br />
        Content-Type: application/json  <br />
        Vary: Accept  <br />
        *Sample Response Data:*   <br />
        {
            "id": 31,
            "name": "Product A",
            "description": "Product A description goes here.....",
            "price": 10
        }
