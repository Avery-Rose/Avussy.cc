// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Task, List, User } = initSchema(schema);

export { Task, List, User };
