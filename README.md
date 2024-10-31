# Order Workflow with Restate

This project demonstrates a simple order processing workflow using the Restate SDK. It includes a workflow for handling orders and a service to interact with that workflow. The server runs on port 9080 and provides endpoints for submitting orders and checking their status.

## About Restate

Restate is a framework for building microservices and workflows in a unified way. It allows you to define services and workflows in TypeScript, enabling developers to create complex business logic while managing state and execution flow effectively.

## Project Structure

### Key Components

1. **Order Workflow**: 
   - Processes an order by simulating payment processing and shipment preparation.
   - Returns the order details, payment ID, and status.

2. **Order Service**: 
   - Exposes two handlers:
     - `submitOrder`: Initiates the order workflow.
     - `checkOrderStatus`: Checks the status of an ongoing order.
