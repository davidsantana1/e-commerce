# Database Directory

This folder contains the SQL schemas and scripts for the databases used in this project.

## Structure

- **Terranova/**  
  Main operational database for the e-commerce system (Terranova), including users, orders, products, and business logic.

- **Event/**  
  Event-driven logging database used by the Web API to store audit trails, API calls, or user actions.

## Usage

Each folder contains:
- SQL scripts to generate tables, stored procedures, and indexes.
- A separate `README.md` explaining that specific database.

## Recommendations

- Keep sensitive data out of this repository.
- Use environment-specific configurations (e.g., `appsettings.json`) to set connection strings.