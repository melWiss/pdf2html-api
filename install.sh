#!/bin/sh

mkdir output
mkdir pdfs

apt update
apt install -y libfontconfig1 libcairo2 libjpeg-turbo8

wget https://github.com/pdf2htmlEX/pdf2htmlEX/releases/download/v0.18.8.rc1/pdf2htmlEX-0.18.8.rc1-master-20200630-Ubuntu-bionic-x86_64.deb
mv pdf2htmlEX-0.18.8.rc1-master-20200630-Ubuntu-bionic-x86_64.deb pdf2htmlEX.deb

apt install ./pdf2htmlEX.deb