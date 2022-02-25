/* tslint:disable */
/* eslint-disable */
import { Category } from './category';
import { Tag } from './tag';

/**
 * A pet for sale in the pet store
 */
export interface Pet {
  category?: Category;
  id?: number;
  name: string;
  photoUrls: Array<string>;

  /**
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
  tags?: Array<Tag>;
}
