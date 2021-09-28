import {Entity, model, property} from '@loopback/repository';

@model()
export class Exchange extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'string',
    required: true,
  })
  script: string;

  @property({
    type: 'string',
  })
  coinId?: string;

  constructor(data?: Partial<Exchange>) {
    super(data);
  }
}

export interface ExchangeRelations {
  // describe navigational properties here
}

export type ExchangeWithRelations = Exchange & ExchangeRelations;
