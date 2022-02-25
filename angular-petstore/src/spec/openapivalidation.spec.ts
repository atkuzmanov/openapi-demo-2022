import 'zone.js/dist/zone-testing';
// import 'zone.js';
// import 'zone.js/dist/async-test.js';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test';
// import 'zone.js/dist/jasmine-patch';

import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from '../app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {PetService} from 'src/app/api/services';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import 'jasmine';
import {PetstoreComponent} from "../app/petstore/petstore.component";

declare var require: any;

describe('API Validation', () => {
  let httpMock: HttpTestingController;
  let service: PetService;

  let tags: { tags: string[]; } = {
    "tags": ["dog", "cat"]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PetstoreComponent
      ],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AppComponent, PetService, PetstoreComponent]
    }).compileComponents();

    service = TestBed.inject(PetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should call api`, () => {
    service.findPetsByTags$Json(tags).subscribe(pets => {
      expect(pets.length).toBe(1);
    });

    const req = httpMock.expectOne(`http://localhost:8080/pet/findByTags?tags=dog%2Ccat`);
    expect(req.request.method).toBe('GET');
  });
});
