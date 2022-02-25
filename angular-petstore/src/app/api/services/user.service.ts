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

import { User } from '../models/user';


/**
 * Operations about user
 */
@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/user';

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params: {

    /**
     * Created user object
     */
    body: User
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
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
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params: {

    /**
     * Created user object
     */
    body: User
  }): Observable<void> {

    return this.createUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createUsersWithArrayInput
   */
  static readonly CreateUsersWithArrayInputPath = '/user/createWithArray';

  /**
   * Creates list of users with given input array.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsersWithArrayInput()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithArrayInput$Response(params: {

    /**
     * List of user object
     */
    body: Array<User>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUsersWithArrayInputPath, 'post');
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
   * Creates list of users with given input array.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUsersWithArrayInput$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithArrayInput(params: {

    /**
     * List of user object
     */
    body: Array<User>
  }): Observable<void> {

    return this.createUsersWithArrayInput$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createUsersWithListInput
   */
  static readonly CreateUsersWithListInputPath = '/user/createWithList';

  /**
   * Creates list of users with given input array.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsersWithListInput()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput$Response(params: {

    /**
     * List of user object
     */
    body: Array<User>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUsersWithListInputPath, 'post');
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
   * Creates list of users with given input array.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUsersWithListInput$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput(params: {

    /**
     * List of user object
     */
    body: Array<User>
  }): Observable<void> {

    return this.createUsersWithListInput$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/user/login';

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Xml$Response(params: {

    /**
     * The user name for login
     */
    username: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LoginUserPath, 'get');
    if (params) {
      rb.query('username', params.username, {"style":"form","explode":true});
      rb.query('password', params.password, {"style":"form","explode":true});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Xml(params: {

    /**
     * The user name for login
     */
    username: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<string> {

    return this.loginUser$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Json$Response(params: {

    /**
     * The user name for login
     */
    username: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LoginUserPath, 'get');
    if (params) {
      rb.query('username', params.username, {"style":"form","explode":true});
      rb.query('password', params.password, {"style":"form","explode":true});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Json(params: {

    /**
     * The user name for login
     */
    username: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }): Observable<string> {

    return this.loginUser$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation logoutUser
   */
  static readonly LogoutUserPath = '/user/logout';

  /**
   * Logs out current logged in user session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LogoutUserPath, 'get');
    if (params) {
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
   * Logs out current logged in user session.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logoutUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser(params?: {
  }): Observable<void> {

    return this.logoutUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserByName
   */
  static readonly GetUserByNamePath = '/user/{username}';

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByName$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Xml$Response(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserByNamePath, 'get');
    if (params) {
      rb.path('username', params.username, {"style":"simple","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByName$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Xml(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  }): Observable<User> {

    return this.getUserByName$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByName$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Json$Response(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserByNamePath, 'get');
    if (params) {
      rb.path('username', params.username, {"style":"simple","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByName$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Json(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  }): Observable<User> {

    return this.getUserByName$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/user/{username}';

  /**
   * Updated user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Updated user object
     */
    body: User
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UpdateUserPath, 'put');
    if (params) {
      rb.path('username', params.username, {"style":"simple","explode":false});
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
   * Updated user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Updated user object
     */
    body: User
  }): Observable<void> {

    return this.updateUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUser
   */
  static readonly DeleteUserPath = '/user/{username}';

  /**
   * Delete user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: {

    /**
     * The name that needs to be deleted
     */
    username: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteUserPath, 'delete');
    if (params) {
      rb.path('username', params.username, {"style":"simple","explode":false});
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
   * Delete user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: {

    /**
     * The name that needs to be deleted
     */
    username: string;
  }): Observable<void> {

    return this.deleteUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
