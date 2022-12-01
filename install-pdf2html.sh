#!/bin/sh

mkdir node_modules/pdf2html/vendor
cd node_modules/pdf2html/vendor
# These URLs come from https://github.com/shebinleo/pdf2html/blob/master/postinstall.js#L6-L7
wget https://archive.apache.org/dist/pdfbox/2.0.26/pdfbox-app-2.0.26.jar
wget https://archive.apache.org/dist/tika/2.4.0/tika-app-2.4.0.jar

npm i pdf2html