import {Entity, model, property, hasMany} from '@loopback/repository';
import {Exchange} from './exchange.model';

@model()
export class Coin extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  acronym: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  url?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @hasMany(() => Exchange)
  exchanges: Exchange[];

  constructor(data?: Partial<Coin>) {
    super(data);
  }
}

export interface CoinRelations {
  // describe navigational properties here
}

export type CoinWithRelations = Coin & CoinRelations;
