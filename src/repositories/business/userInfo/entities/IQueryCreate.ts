import { IQueryBaseCreate } from '../../../entities';

export default interface ICreate extends IQueryBaseCreate {
  city: string;
  testId: number;
}
