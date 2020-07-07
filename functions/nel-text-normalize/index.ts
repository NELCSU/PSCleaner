import { AzureFunction, Context } from "@azure/functions";
import { normalize } from "../services";

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
  let t: string = context.req?.query.text
    ? context.req.query.text 
    : context.req?.body && context.req.body.text
      ? context.req.body.text
      : context.req?.body;
  const responseMessage: string = normalize(t);
  context.res = {
    // default is status: 200,
    body: responseMessage
  };
  context.done();
};

export default httpTrigger;