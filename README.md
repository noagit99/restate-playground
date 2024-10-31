# Order Workflow With Restate

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
    
## Initialize the Project:

### 1. Use the following command to download the Node template with a skeleton of a 1.1/1. Restate service and install its dependencies:

```bash
npx -y @restatedev/create-app@latest && cd restate-node-template && npm install
```

## 2. Run the Service:
Edit your service logic in src/app.ts. Start the service using ts-node-dev to listen on port 9080 for incoming requests:
```bash
npm run app-dev
```

## 3. Launch the Restate Server:
Restate is a self-contained binary with no external dependencies. Run the Restate Server locally using:
```bash
restate-server
```

## 4. Register the Service:
To enable Restate to discover your service, register it by executing the following command:

```bash
restate deployments register http://localhost:9080
```

Expected Output
You should see output confirming that the service has been registered successfully, including details about the handlers and their expected input/output formats.

## 5. API Endpoints:
Submit Order
To submit an order, use the following curl command:


```bash
curl -X POST http://localhost:9080/orders/submitOrder \
-H "Content-Type: application/json" \
-d '{"orderId": "123"}'
```
Check Order Status:
To check the status of an order, execute the following command:


```bash
curl -X POST http://localhost:9080/orders/checkOrderStatus \
-H "Content-Type: application/json" \
```


