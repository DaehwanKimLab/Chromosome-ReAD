const program = require('commander');

const version = require('../package.json').version;
const constVersion = require('./const-version').default;

function cmd(process) {
  program
    .version(version)
    .description('A tiny command line tool that extract `package.json` version and generate `const VERSION=\'...\'` file')
    .usage('./package.json ./src/version.js')
    .arguments("<package.json> <target_file>")
    .action(constVersion)
    .parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}

module.exports = cmd;
