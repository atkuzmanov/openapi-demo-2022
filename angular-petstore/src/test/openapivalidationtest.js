const express = require('express')
const port = 3000
const app = express()
const http = require('http')

const request = require('supertest')
const { expect } = require('chai')

const jsYaml = require('js-yaml')
const fs = require('fs')
const appRoot = require('app-root-path')
const { OpenApiValidator } = require('express-openapi-validate')

http.createServer(app).listen(port);
console.log(`Listening on port ${port}`);

app.get('/pet/0', (req, res) => res.json({
  "category": {
    "id": 0,
    "name": "indoor-pet"
  },
  "id": 0,
  "name": "Test Frontend Doggie",
  "photoUrls": [
    "../../assets/images/dog.png"
  ],
  "status": "available",
  "tags": [
    {
      "id": 0,
      "name": "dog"
    }
  ]
}))

// Load the OpenAPI document
const openApiDocument = jsYaml.safeLoad(fs.readFileSync(`./../openapi_openapitools-github_3.0.0.yaml`, "utf-8"));

// Create the validator from the spec document
const validator = new OpenApiValidator(openApiDocument, {});


describe('open api validation tests', function () {
  // Create the response validator for the GET / endpoint
  const validateResponse = validator.validateResponse('get', '/pet/{petId}')

  it('backend should return a valid response', function () {
    return request("http://localhost:8080")
      .get('/pet/0')
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .then((res) => {
        expect(validateResponse(res)).to.be.undefined //validate
      })
      .catch((err) => expect(err).to.be.undefined)
  })

  it('mock backend should return a valid response', function () {
    return request(app)
      .get('/pet/0')
      .expect(200)
      .then((res) => {
        expect(validateResponse(res)).to.be.undefined //validate
      })
      .catch((err) => expect(err).to.be.undefined)
  })
})


