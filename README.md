# PDF2HTML-API
Hello there!
This repo is a solution for Nuit de l'info competition 2022!

## How to install
Clone this repository
```console
git clone https://github.com/melWiss/pdf2html-api
```
Make sure that docker is installed first, then run this command to build the docker image
```console
docker build -t pdf2html-api .
```
Then, create a container of that image and don't forget to map the port 3000
```console
docker run -it -p 3000:3000 --name pdf2html-api-container pdf2html-api
```

## How to use the api
This api has one route which is, in our case "POST / HTTP/1.1" <br />
POST / <br />
Content-Type: text/plain <br />
Body: base64 of the pdf file <br />

## Demo video https://youtu.be/qHd3JfDjDM0
![](https://github.com/melWiss/pdf2html-api/blob/master/example.gif)
