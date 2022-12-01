FROM ubuntu
RUN apt update
RUN apt install -y nodejs npm wget
RUN git clone https://github.com/melWiss/pdf2html-api
RUN cd pdf2html-api && npm i
RUN cd pdf2html-api && ./install.sh
EXPOSE 3000
CMD cd pdf2html-api && npm start 