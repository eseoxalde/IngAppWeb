import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {InMemoryDataSource} from '../datasources';
import {Coin, CoinRelations, Exchange} from '../models';
import {ExchangeRepository} from './exchange.repository';

export class CoinRepository extends DefaultCrudRepository<
  Coin,
  typeof Coin.prototype.id,
  CoinRelations
> {

  public readonly exchanges: HasManyRepositoryFactory<Exchange, typeof Coin.prototype.id>;

  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource, @repository.getter('ExchangeRepository') protected exchangeRepositoryGetter: Getter<ExchangeRepository>,
  ) {
    super(Coin, dataSource);
    this.exchanges = this.createHasManyRepositoryFactoryFor('exchanges', exchangeRepositoryGetter,);
    this.registerInclusionResolver('exchanges', this.exchanges.inclusionResolver);
  }
}
