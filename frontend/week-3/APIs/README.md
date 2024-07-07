# API Documentation

This document provides details about the APIs used in the project.

## 1. Get All Items

- **Endpoint:** `GET https://dsoc-2024.webredirect.org/api/inventory/items/`
- **Description:** Retrieves all items from the inventory.
- **Authentication:** Required (User must be authenticated)

  **Responses:**
  - `200 OK`
    - Returns a list of all items.

  - `401 Unauthorized`
    - User not authenticated.

## 2. Customer Registration

- **Endpoint:** `POST https://dsoc-2024.webredirect.org/api/staff/customer/`
- **Description:** Registers a new customer if not already existing.
- **Authentication:** Required (User must be authenticated)

  **Request Body:**
```json
{
  "phone": "string",
  "name": "string",
  "address": "string"
}
```

  **Responses:**
  - `201 Created`
    - Customer successfully created.

  - `200 OK`
    - Customer already exists.

  - `400 Bad Request`
    - Phone number is required.

## 3. Place Order

- **Endpoint:** `POST https://dsoc-2024.webredirect.org/api/staff/order/`
- **Description:** Places an order for a customer.
- **Authentication:** Required (User must be authenticated)

  **Request Body:**
  ```json
  {
  "customerID": "integer",
  "orderItems": [
    {
      "itemID": "integer",
      "quantity": "integer"
    },
    {
      "itemID": "integer",
      "quantity": "integer"
    },
    ...
  ]
  ```
  **Responses:**
  - `201 Created`
    - Order placed successfully.

  - `400 Bad Request`
    - Customer ID is required.
    - Order items are required.
    - Item with ID {itemID} does not exist.

  - `401 Unauthorized`
    - User not authenticated.

---
