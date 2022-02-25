import { Component, OnInit } from '@angular/core';
import {Pet} from '../api/models/pet'
import {PetService} from '../api/services/pet.service'

@Component({
  selector: 'app-petstore',
  templateUrl: './petstore.component.html',
  styleUrls: ['./petstore.component.css'],
})
export class PetstoreComponent implements OnInit {

  pets: Array<Pet> = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    let tags: { tags: string[]; } = {
      "tags": ["dog", "cat", "wolf"]
    }
    this.findByTags(tags);
  }

  findByTags(tags: { tags: string[]; }): void {
    let page: number = 100;
    this.petService.findPetsByTags$Json(tags).subscribe(pets =>(this.pets = pets));
  }
}
