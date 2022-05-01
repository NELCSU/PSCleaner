import * as fs from "fs-extra";
import * as jschardet from "jschardet";
import * as readline from "readline";

export type TCSVFileOptions = {
  rows: number
};

export type TCSVFileProperties = {
  encoding: BufferEncoding,
  estimatedSize: number,
  isUTF8: boolean
};

/**
 * Inspects CSV file and returns stated properties TCSVFileProperties
 * @param file - path to file
 * @param options - set file property behaviour. Default is rows=50 (read up to 50 rows)
 */
export async function csvFileProperties(file: string, options: TCSVFileOptions = { rows: 50 }): Promise<TCSVFileProperties> {
  let result: TCSVFileProperties = { encoding: "utf-8", estimatedSize: 0, isUTF8: true };

  return fs.stat(file)
    .then(stat => {
      if (stat.size < 3) {
        return Promise.reject("File cannot be empty");
      }

      return new Promise((resolve, reject) => {
        try {
          const rs = fs.createReadStream(file, { start: 0, end: stat.size > 499 ? 499 : stat.size });
          rs.on("data", async (chunk: any) => {          
            result.isUTF8 = chunk[0] === 239 && chunk[1] === 187 && chunk[2] === 191;
            rs.close();
            const text: jschardet.IDetectedMap = jschardet.detect(chunk.toString());
            const frs = fs.createReadStream(file);
            const rl = readline.createInterface({ input: frs, crlfDelay: Infinity });
            let avgSize = 0, i = 0;
            for await (const line of rl) {
              avgSize += Buffer.byteLength(line, text.encoding as BufferEncoding);
              ++i;
              result.estimatedSize = Math.ceil(stat.size / (avgSize / i));
              if (i > options.rows) {
                break;
              }
            }
            return resolve(result);
          });
        } catch (e) {
          return reject(e);
        }
      });
    });
}