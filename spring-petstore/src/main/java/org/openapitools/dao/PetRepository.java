package org.openapitools.dao;

import org.openapitools.model.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface PetRepository extends MongoRepository<Pet, String> {
    Optional<List<Pet>> findAllByTagsNameIsIn(List<String> tags);

    Optional<List<Pet>> findAllByStatusIn(List<String> status);

    Optional<Pet> findById(Long petId);

    void deleteById(Long petId);
}
