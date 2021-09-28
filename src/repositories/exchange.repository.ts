import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InMemoryDataSource} from '../datasources';
import {Exchange, ExchangeRelations} from '../models';

export class ExchangeRepository extends DefaultCrudRepository<
  Exchange,
  typeof Exchange.prototype.id,
  ExchangeRelations
> {
  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource,
  ) {
    super(Exchange, dataSource);
  }
}
