const report = require('multiple-cucumber-html-reporter'); // eslint-disable-line

function addCIMetadata(customData) {
  return customData;
}

const customData = {
  title: 'Run info',
  data: [
    {
      label: 'Project',
      value: 'Volvo Assignment'
    },
    {
      label: 'Generated on:',
      value: new Date().toString()
    },
    {
      label: 'Reporter:',
      value: '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
        'target="_blank">cucumber-reporter</a>'
    },
  ]
};

report.generate({
  jsonDir: './report/cucumber/',
  reportPath: './report/cucumber/html',
  displayDuration: true,
  removeFolders: true,

  pageTitle: 'Volvo Assignment',
  reportName: 'Volvo Assignment',
  openReportInBrowser: true,
  pageFooter:
    '<div class="created-by"><p>&copy; Volvo automation assignment</p></div>',

  customData: addCIMetadata(customData),
});

