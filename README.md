Flow of the Application
The backend architecture is structured to support user management, pizza listing, and order processing. Here’s how each component interacts in a typical flow:

a) User Registration and Login
Register Endpoint (POST /api/auth/register): Creates a new user in the database.
Login Endpoint (POST /api/auth/login): Authenticates a user and generates a JSON Web Token (JWT) for secure access to other endpoints.
b) Pizza Menu
Pizza Listing Endpoint (GET /api/pizzas): Returns a list of available pizzas. This endpoint is public and does not require authentication.
c) Order Management
Create Order Endpoint (POST /api/orders): Allows authenticated users to place an order by providing their user ID, pizza items, and delivery address.
Get Order Details (GET /api/orders/:id): Allows authenticated users to fetch the details of a specific order by its order ID.
Get All Orders for a User (GET /api/orders/user/:userId): Allows authenticated users to fetch all their past orders.

