[![Build Status](https://travis-ci.org/zrrrzzt/tfk-api-unoconv.svg?branch=master)](https://travis-ci.org/zrrrzzt/tfk-api-unoconv)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# iDisclose fork of tfk-api-unoconv

tfk-api-unoconv has been forked from zrrrzzt with a few small changes to get it running on Heroku:

  - Use $PORT instead of $SERVER_PORT to configure server port
  - Have standalone.js launch unoconv as a background process
  
The original README follows

# tfk-api-unoconv

Unoconv as a webservice

## Docker

Build image

```bash
$ docker build -t unoconv-webservice .
```

Run image

```bash
$ docker run -d -p 80:3000 --name unoconv-webservice unoconv-webservice
```

## Usage

Post the file you want to convert to the server and get the converted file in return.

See all possible conversions on the [unoconv website](http://dag.wiee.rs/home-made/unoconv/).

API for the webservice is /unoconv/{format-to-convert-to} so a docx to pdf would be

```bash
$ curl --form file=@myfile.docx http://localhost/unoconv/pdf > myfile.pdf
```

### Formats

To see all possible formats for convertion visit ```/unoconv/formats```

To see formats for a given type ```/unoconv/formats/{document|graphics|presentation|spreadsheet}```

### Versions

To see all versions of installed dependencies lookup ```/unoconv/versions```

### Healthz

Are we alive? ```/healthz```

returns

```JavaScript
{
  uptime: 18.849
}
```

## Environment

You can change the webservice port and filesize-limit by changing environment variables.

SERVER_PORT default is 3000

PAYLOAD_MAX_SIZE default is 1048576 (1 MB)

TIMEOUT_SERVER default is 2 minutes (120 000 milliseconds)

TIMEOUT_SOCKET default is 2 minutes and 20 seconds (140 000 milliseconds)

Change it in the Dockerfile or create an env-file and load it at containerstart

```bash
$ docker run --env-file=docker.env -d -p 80:3000 --name unoconv-webservice unoconv-webservice
```

## License

[MIT](LICENSE)

![tfk-api-unoconv](https://robots.kebabstudios.party/tfk-api-unoconv.png "Robohash image of tfk-api-unoconv")
