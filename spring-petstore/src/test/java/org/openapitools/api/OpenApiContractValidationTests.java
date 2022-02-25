package org.openapitools.api;

import com.atlassian.oai.validator.restassured.OpenApiValidationFilter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.parsing.Parser;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openapitools.OpenAPI2SpringBoot;
import org.openapitools.dao.PetRepository;
import org.openapitools.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

import static io.restassured.RestAssured.given;

@SpringBootTest(classes = {OpenAPI2SpringBoot.class})
public class OpenApiContractValidationTests {

    public static final String SWAGGER_JSON_URL = "../openapi_openapitools-github_3.0.0.json";

    private final OpenApiValidationFilter validationFilter = new OpenApiValidationFilter(SWAGGER_JSON_URL);

    @Autowired
    private PetRepository petRepo;

    public int getAppPort() {
        return 8080;
    }

    @BeforeEach
    public void before() throws IOException {
        RestAssured.port = getAppPort();
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
        RestAssured.baseURI = "http://localhost:" + getAppPort();
        RestAssured.defaultParser = Parser.JSON;

        setUpTestData();
    }

    @AfterEach
    public void after() {
//        cleanUpTestData();
    }

    private void setUpTestData() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String testDogPetJSONstr1 = "{\n" +
                "  \"category\": {\n" +
                "    \"id\": 0,\n" +
                "    \"name\": \"string\"\n" +
                "  },\n" +
                "  \"id\": 0,\n" +
                "  \"name\": \"Test Backend Doggie\",\n" +
                "  \"photoUrls\": [\n" +
                "    \"string\"\n" +
                "  ],\n" +
                "  \"status\": \"available\",\n" +
                "  \"tags\": [\n" +
                "    {\n" +
                "      \"id\": 0,\n" +
                "      \"name\": \"test dog pet 1\"\n" +
                "    }\n" +
                "  ]\n" +
                "}";

        Pet testDogPet1 = mapper.readValue(testDogPetJSONstr1, Pet.class);

        // Debug code:
        //        System.out.println(">>>" + testDogPet1);
        //        System.out.println(">>> inserted: " + petRepo.save(testDogPet1));

        petRepo.save(testDogPet1);
    }

    private void cleanUpTestData() {
        petRepo.deleteById(0L);
    }

    @Test
    public void testPetEndpoint() {
        given()
                .filter(validationFilter)
                .port(getAppPort())
                .header("api_key", "special-key")
                .header("accept", "application/json")
                .when().get("/pet/0")
                .then()
                .statusCode(200);
    }
}
