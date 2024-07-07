# API Documentation

This document provides details about the APIs used in the project.

## 1. Get All Items

- **Endpoint:** `GET /api/items/`
- **Description:** Retrieves all items from the inventory.
- **Authentication:** Required (User must be authenticated)

  **Responses:**
  - `200 OK`: List of all items.
    ```json
    {
      "items": [
        {
          "id": "integer",
          "name": "string",
          "description": "string",
          "price": "decimal"
        },
        ...
      ]
    }
    ```
  - `401 Unauthorized`: User not authenticated.
    ```json
    {
      "message": "User not authenticated"
    }
    ```

## 2. Customer Registration

- **Endpoint:** `POST /api/customer/register/`
- **Description:** Registers a new customer if not already existing.
- **Authentication:** Required (User must be authenticated)

  **Request Body:**
  ```json
  {
    "phone": "string",
    "name": "string",
    "address": "string"
  }
