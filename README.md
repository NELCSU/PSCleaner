# PSCleaner

Process CSV files by identifying and removing personal sensitive text

## Getting started

Installation files for the latest release can be [found here](https://github.com/NELCSU/PSCleaner/releases).

The [wiki](https://github.com/NELCSU/PSCleaner/wiki) linked to this project has some basic examples for using the software.

## Development

Once you have copied the project, [npm-check](https://www.npmjs.com/package/npm-check) is a useful tool to check all the project dependencies are installed and up-to-date.

After doing that, run *npm run update-all* to ensure both Electron and SQLite are fitted to your system. You may require the Python runtime (required by sqlite3) and C++ build tools to be installed. The console messages do a good job of prompting you for what might be required for your system.

Once updated, run *npm run build* to start the Typescript compiler. Lastly run the program in debug mode by pressing **F5**.
