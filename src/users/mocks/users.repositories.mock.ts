import {
  baseRepositoryMocks,
  MockRepository,
} from '../../common/mocks/base-repository.mock';

export const createUsersMockRepository = <User>(): MockRepository<User> => ({
  ...baseRepositoryMocks,
});
