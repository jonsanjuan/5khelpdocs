let path = require('path');
let fs = require('fs');
let pdf = require('html-pdf');
const jsdom = require("jsdom");

let basePath = path.join('file://', __dirname, 'build/5thKindHelpDocs/');
let pathReplace = '="' + basePath;
let cssPath = path.join('file://', __dirname, 'zoomCss.css');


let pdfDom = new jsdom.JSDOM('');
let sidebars = require('./sidebars.json');
for (let section of Object.keys(sidebars.docs)) {
  for (let f of sidebars.docs[section]) {
    let html = fs.readFileSync(path.join('build/5thKindHelpDocs/docs', f + '.html'), 'utf8');
    html = html.replace(/="\//g, pathReplace);
    if (pdfDom.serialize() === '<html><head></head><body></body></html>') {
      pdfDom = new jsdom.JSDOM(html);
      let mainWrapper = pdfDom.window.document.getElementsByClassName('docMainWrapper')[0];
      let header = pdfDom.window.document.getElementsByTagName('header')[0];
      let nav1 = pdfDom.window.document.getElementById('docsNav');
      let nav2 = pdfDom.window.document.getElementsByClassName('onPageNav')[0];
      let nav3 = pdfDom.window.document.getElementsByClassName('navigationSlider')[0];
      mainWrapper.removeChild(nav1);
      mainWrapper.removeChild(nav2);
      header.removeChild(nav3);
      pdfDom.window.document.getElementsByClassName('docMainWrapper')[0] = mainWrapper;
      pdfDom.window.document.getElementsByTagName('header')[0] = header;

      let cssStyle = pdfDom.window.document.createElement('LINK');
      cssStyle.setAttribute('rel', 'stylesheet');
      cssStyle.setAttribute('href', cssPath);
      pdfDom.window.document.getElementsByTagName('head')[0].appendChild(cssStyle);
    }
    else {
      let tempDom = new jsdom.JSDOM(html);
      let mainContainer = tempDom.window.document.getElementsByClassName('mainContainer')[0];
      pdfDom.window.document.getElementsByClassName('docMainWrapper')[0].appendChild(mainContainer);
    }
  }
}

let options = {
  format: 'Letter',
  // height: "24.5in",
  // width: "19in"
};

pdf.create(pdfDom.serialize(), options).toFile('build/5thKindHelpDocs/files/5thKindHelpDocs.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }

});

// fs.unlink('./tempCss.css');
