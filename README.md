# Live server Link

[e-commerce-server-beta-cyan.vercel.app](https://e-commerce-server-beta-cyan.vercel.app/)

# To run this server locally

1. Clone the repository

```graphql
git clone https://github.com/muddasirfaiyaj66/e-commerce-server.git
```

2. **Create a  .env  file in root directory** 

```jsx
PORT=5000
DATABASE_URL= //add your mongodb database url

```

3. **Install dependencies:**

```graphql
npm i
```

4. Start the development server:

```graphql
npm run start:dev

```

5. Product Api’s routes

```jsx
1.Create Product(POST): http://localhost:5000/api/products/
2.Get Products(GET) : http://localhost:5000/api/products/
3.Get Product by Id (GET): http://localhost:5000/api/products/:productId
4.Get Product By search name (GET): http://localhost:5000/api/products?searchTerm=iphone
5.Update a product by Id (PUT):http://localhost:5000/api/products/:productId
6.Delete a product by ID(DELETE) :http://localhost:5000/api/products/:productId

```

6. Orders Api’s routes 

```jsx
1. Create a Order (POST):http://localhost:5000/api/orders/
2. Get orders(GET) : http://localhost:5000/api/orders/
3. Get Orders By Email (GET): http://localhost:5000/api/orders?email=xyz@gmail.com
```