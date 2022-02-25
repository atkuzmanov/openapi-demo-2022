/* tslint:disable */
/* eslint-disable */

/**
 * An order for a pets from the pet store
 */
export interface Order {
  complete?: boolean;
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;

  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
}
