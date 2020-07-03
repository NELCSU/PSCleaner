import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { normalize } from '../services';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const text: string = req.query.text ? req.query.text : (req.body && req.body.text) ? req.body.text : req.body;
  context.log(`BEFORE: ${text}`);
  const r = await normalize(text);
  context.log(`AFTER: ${r}`);
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: r
  };
};

export default httpTrigger;