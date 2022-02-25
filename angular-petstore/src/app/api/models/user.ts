/* tslint:disable */
/* eslint-disable */

/**
 * A User who is purchasing from the pet store
 */
export interface User {
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  phone?: string;

  /**
   * User Status
   */
  userStatus?: number;
  username?: string;
}
