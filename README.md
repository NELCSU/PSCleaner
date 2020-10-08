# PSCleaner

Process CSV files by identifying and removing personal sensitive text

## Key features

PSCleaner runs locally on your desktop and does not send or receive data across the network. This is helpful for projects where researchers are experiencing difficulties in getting permission to use third party data cleansing services, typically accessed as cloud services.

The software uses a human readable rules system that is consistently being updated and revised for improved accuracy. At the present time the software is oriented for the English language and the UK locale (specifically healthcare data sets).

The software does not guarantee 100% success in removing all personal and sensitive data. There will likely always be edge cases and exceptions. Please test your data thoroughly in order to satify yourself that a desired level of accuracy has been acheived. The software is distributed on the [MIT licence](https://opensource.org/licenses/MIT).

## Getting started

Installation files for the latest release can be [found here](https://github.com/NELCSU/PSCleaner/releases).

The [wiki](https://github.com/NELCSU/PSCleaner/wiki) linked to this project has some basic examples for using the software.

## Setting up the development environment

The project uses Node Package Manager (npm) to maintain and update project resources. Our preferred development environment is Visual Studio Code and this project includes some useful extension suggestions for getting up and running.

The software is written using TypeScript and built on the Electron platform.

* Run **npm install** to load node project dependencies
* Run **npm run update-all** to load addtional client side files
* Run **npm run build** to run the build process
* Run **F5** to run the software in development mode (VS Code)
* Run **npm run make** to compile the files for each platform installer. These files are written to the out folder in this project
