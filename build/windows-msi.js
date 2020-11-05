const { MSICreator } = require("electron-wix-msi");
const pkg = require("../package.json");
const path = require("path");
const f = path.dirname(__dirname + "/../package.json");

(async function() {
  // Step 1: Instantiate the MSICreator
  const msiCreator = new MSICreator({
    appDirectory: `${f}/out/prod/PSCleaner-win32-x64`,
    description: pkg.description,
    exe: pkg.name,
    iconPath: `${f}/client/favicon.ico`,
    name: pkg.productName,
    manufacturer: pkg.author,
    version: pkg.version,
    outputDirectory: `${f}/out/prod/make/wix`
  });

  // Step 2: Create a .wxs template file
  const supportBinaries = await msiCreator.create();

  /*
  // Step 2a: optionally sign support binaries if you
  // sign you binaries as part of of your packaging script
  supportBinaries.forEach(async (binary) => {
    // Binaries are the new stub executable and optionally
    // the Squirrel auto updater.
    await signFile(binary);
  });
  */

  // Step 3: Compile the template to a .msi file
  await msiCreator.compile();
})();