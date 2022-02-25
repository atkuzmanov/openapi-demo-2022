package org.openapitools.api;

import io.swagger.annotations.ApiParam;
import org.openapitools.dao.PetRepository;
import org.openapitools.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.NativeWebRequest;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-06-23T13:59:21.336065+03:00[Europe/Sofia]")
@Controller
@RequestMapping("${openapi.openAPIPetstore.base-path:}")
public class PetApiController implements PetApi {

    private final NativeWebRequest request;
    private static long id = 0;

    @Autowired
    private PetRepository petRepo;

    @org.springframework.beans.factory.annotation.Autowired
    public PetApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    @Override
    public ResponseEntity<Void> addPet(@ApiParam(value = "Pet object that needs to be added to the store" ,required=true )  @Valid @RequestBody Pet pet) {
        petRepo.insert(pet);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Pet> getPetById(@ApiParam(value = "ID of pet to return",required=true) @PathVariable("petId") Long petId) {
        Pet pet = petRepo.findById(petId).orElse(null);
        if(pet == null) {
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return  new ResponseEntity<>(pet, HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<List<Pet>> findPetsByTags(@NotNull @ApiParam(value = "Tags to filter by", required = true) @Valid @RequestParam(value = "tags", required = true) List<String> tags) {
        List<Pet> pets = petRepo.findAllByTagsNameIsIn(tags).orElse(null);
        if(pets == null || pets.isEmpty()) {
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return  new ResponseEntity<>(pets, HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<List<Pet>> findPetsByStatus(
            @NotNull
            @ApiParam(value = "Status values that need to be considered for filter",
                    required = true,
                    allowableValues = "available, pending, sold",
                    example = "available")
            @Valid @RequestParam(value = "status", required = true) List<String> status) {
        status = status.stream().map(s -> s.toUpperCase()).collect(Collectors.toList());
        List<Pet> pets = petRepo.findAllByStatusIn(status).orElse(null);
        if(pets == null || pets.isEmpty()) {
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return  new ResponseEntity<>(pets, HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<Void> updatePetWithForm(
            @ApiParam(value = "ID of pet that needs to be updated",required=true) @PathVariable("petId") Long petId,
            @ApiParam(value = "Updated name of the pet") @Valid @RequestParam(value = "name", required = false)  String name,
            @ApiParam(value = "Updated status of the pet") @Valid @RequestParam(value = "status", required = false)  String status) {

        Pet pet = petRepo.findById(petId).orElse(null);
        if(pet == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            pet.setName(name);
            pet.setStatus(Pet.StatusEnum.fromValue(status.toLowerCase()));
            petRepo.save(pet);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
    }

    @Override
    public ResponseEntity<Void> updatePet(@ApiParam(value = "Pet object that needs to be added to the store" ,required=true )  @Valid @RequestBody Pet pet) {
        petRepo.save(pet);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @Override
    public ResponseEntity<Void> deletePet(@ApiParam(value = "Pet id to delete",required=true) @PathVariable("petId") Long petId,@ApiParam(value = "" ) @RequestHeader(value="api_key", required=false) String apiKey) {
        Pet pet = petRepo.findById(petId).orElse(null);
        if(pet == null) {
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            petRepo.deleteById(petId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
