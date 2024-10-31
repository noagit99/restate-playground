import * as restate from "@restatedev/restate-sdk";

const orderWorkflow = restate.workflow({
  name: "order-workflow",
  handlers: {
    run: async (ctx: restate.WorkflowContext, req: { orderId: string }) => {
      // Step 1: Process payment
      const paymentId = ctx.rand.uuidv4();
      ctx.set("status", "Processing payment");
      await ctx.sleep(2000); // Simulate payment processing
      const paymentResult = "Payment processed";

      // Step 2: Prepare shipment
      ctx.set("status", "Preparing shipment");
      await ctx.sleep(1500); // Simulate shipment preparation
      const shipmentResult = "Shipment ready";

      // Step 3: Finalize order
      ctx.set("status", "Finalizing order");
      await ctx.sleep(1000); // Simulate final processing

      return {
        orderId: req.orderId,
        paymentId: paymentId,
        status: "completed",
        steps: [paymentResult, shipmentResult],
      };
    },

    getStatus: (ctx: restate.WorkflowSharedContext) =>
      ctx.get<string>("status"),
  },
});

export type OrderWorkflow = typeof orderWorkflow;

// Add a new service to interact with the workflow
const orderService = restate.service({
  name: "orders",
  handlers: {
    submitOrder: async (
      ctx: restate.ObjectContext,
      request: { orderId: string }
    ) => {
      const result = await ctx
        .workflowClient<OrderWorkflow>(
          { name: "order-workflow" },
          request.orderId
        )
        .run({ orderId: request.orderId });
      return result;
    },

    checkOrderStatus: async (
      ctx: restate.ObjectContext,
      request: { orderId: string }
    ) => {
      const status = await ctx
        .workflowClient<OrderWorkflow>(
          { name: "order-workflow" },
          request.orderId
        )
        .getStatus();
      return status;
    },
  },
});

// Update the endpoint binding to include both workflow and service
restate
  .endpoint()
  .bind(orderWorkflow)
  .bind(orderService)
  .listen(9080)
  .then(() => console.log("Server running on port 9080"));
