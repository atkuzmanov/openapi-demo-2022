/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApiResponse } from '../models/api-response';
import { Pet } from '../models/pet';
import { Body } from '../models/body';
import { Body1 } from '../models/body-1';


/**
 * Everything about your Pets
 */
@Injectable({
  providedIn: 'root',
})
export class PetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updatePet
   */
  static readonly UpdatePetPath = '/pet';

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePet$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePet$Json$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UpdatePetPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePet$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePet$Json(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.updatePet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePet$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updatePet$Xml$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UpdatePetPath, 'put');
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePet$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updatePet$Xml(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.updatePet$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addPet
   */
  static readonly AddPetPath = '/pet';

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPet$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPet$Json$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.AddPetPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addPet$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPet$Json(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.addPet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPet$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addPet$Xml$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.AddPetPath, 'post');
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addPet$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addPet$Xml(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.addPet$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findPetsByStatus
   */
  static readonly FindPetsByStatusPath = '/pet/findByStatus';

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByStatus$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus$Xml$Response(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByStatusPath, 'get');
    if (params) {
      rb.query('status', params.status, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByStatus$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus$Xml(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<Array<Pet>> {

    return this.findPetsByStatus$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByStatus$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus$Json$Response(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByStatusPath, 'get');
    if (params) {
      rb.query('status', params.status, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByStatus$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus$Json(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<Array<Pet>> {

    return this.findPetsByStatus$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Path part for operation findPetsByTags
   */
  static readonly FindPetsByTagsPath = '/pet/findByTags';

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByTags$Xml()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags$Xml$Response(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByTagsPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByTags$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags$Xml(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<Array<Pet>> {

    return this.findPetsByTags$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByTags$Json()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags$Json$Response(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByTagsPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByTags$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags$Json(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<Array<Pet>> {

    return this.findPetsByTags$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Path part for operation getPetById
   */
  static readonly GetPetByIdPath = '/pet/{petId}';

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPetById$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById$Xml$Response(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<StrictHttpResponse<Pet>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.GetPetByIdPath, 'get');
    if (params) {
      rb.path('petId', params.petId, {"style":"simple","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Pet>;
      })
    );
  }

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPetById$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById$Xml(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<Pet> {

    return this.getPetById$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Pet>) => r.body as Pet)
    );
  }

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPetById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById$Json$Response(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<StrictHttpResponse<Pet>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.GetPetByIdPath, 'get');
    if (params) {
      rb.path('petId', params.petId, {"style":"simple","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Pet>;
      })
    );
  }

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPetById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById$Json(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<Pet> {

    return this.getPetById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Pet>) => r.body as Pet)
    );
  }

  /**
   * Path part for operation updatePetWithForm
   */
  static readonly UpdatePetWithFormPath = '/pet/{petId}';

  /**
   * Updates a pet in the store with form data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePetWithForm()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updatePetWithForm$Response(params: {

    /**
     * ID of pet that needs to be updated
     */
    petId: number;
    body?: Body
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UpdatePetWithFormPath, 'post');
    if (params) {
      rb.path('petId', params.petId, {"style":"simple","explode":false});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Updates a pet in the store with form data.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePetWithForm$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updatePetWithForm(params: {

    /**
     * ID of pet that needs to be updated
     */
    petId: number;
    body?: Body
  }): Observable<void> {

    return this.updatePetWithForm$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePet
   */
  static readonly DeletePetPath = '/pet/{petId}';

  /**
   * Deletes a pet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePet$Response(params: {
    api_key?: string;

    /**
     * Pet id to delete
     */
    petId: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.DeletePetPath, 'delete');
    if (params) {
      rb.header('api_key', params.api_key, {"style":"simple","explode":false});
      rb.path('petId', params.petId, {"style":"simple","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Deletes a pet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePet(params: {
    api_key?: string;

    /**
     * Pet id to delete
     */
    petId: number;
  }): Observable<void> {

    return this.deletePet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadFile
   */
  static readonly UploadFilePath = '/pet/{petId}/uploadImage';

  /**
   * uploads an image.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFile()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile$Response(params: {

    /**
     * ID of pet to update
     */
    petId: number;
    body?: Body1
  }): Observable<StrictHttpResponse<ApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UploadFilePath, 'post');
    if (params) {
      rb.path('petId', params.petId, {"style":"simple","explode":false});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiResponse>;
      })
    );
  }

  /**
   * uploads an image.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadFile$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile(params: {

    /**
     * ID of pet to update
     */
    petId: number;
    body?: Body1
  }): Observable<ApiResponse> {

    return this.uploadFile$Response(params).pipe(
      map((r: StrictHttpResponse<ApiResponse>) => r.body as ApiResponse)
    );
  }

}
