const { utils: { fromBuildIdentifier } } = require("@electron-forge/core");

module.exports = {
  packagerConfig: {
    appBundleId: fromBuildIdentifier({ beta: "nel.beta.app", prod: "nel.app" })
  },
  electronRebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "PSCleaner",
        iconUrl: "https://github.com/NELCSU/PSCleaner/blob/master/client/favicon.ico?raw=true",
        loadingGif: "./client/images/loading.gif",
        setupIcon: "./client/favicon.ico"
      }
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          maintainer: "NEL",
          homepage: "http://www.nelcsu.nhs.uk"
        }
      }
    }
  ],
  publishers: [],
  plugins: [],
  hooks: {},
  buildIdentifier: process.env.IS_BETA ? "beta" : "prod"
}