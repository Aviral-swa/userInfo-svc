import VersionableSchema from '../../versionable/VersionableSchema';
export default class UserInfoSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
        city: {
            required: true,
            type: String,
        },
        testId: {
          required: true,
          type: Number,
      },
    };

    super(baseSchema, options);
  }
}
