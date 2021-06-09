import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface IUserInfoModel extends IVersionableDocument {
  testId: number;
  city: string;
}
