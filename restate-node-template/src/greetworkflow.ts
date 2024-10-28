import * as restate from "@restatedev/restate-sdk";

// Define the greeting workflow
const greetWorkflow = restate.workflow({
  name: "greet-workflow",
  handlers: {
    run: async (ctx: restate.WorkflowContext, input: { greeting: string }) => {
      // Use the greeting input to generate a response
      return `${input.greeting}!`;
    },
  },
});

export default greetWorkflow;
