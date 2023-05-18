# EHLO Server 👋 ✉

An EHLO server written in Node.js that echoes messages.

## Description

The EHLO server is a simple server implemented in Node.js that demonstrates the EHLO protocol by echoing messages back to the client.

## Features

- Receives EHLO messages via GET and POST requests and echoes them back as JSON responses.
- Lightweight and easy to use.

### Usage

1. Start the server using Docker:

```shell
docker run -p 3000:3000 arshinalbab/ehlo
```

2. Send EHLO requests:

HTTP: Make a POST request to http://localhost:3000/ehlo with the following JSON payload:

```json
{
  "message": "Your message here"
}
```
