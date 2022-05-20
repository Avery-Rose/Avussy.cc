import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Task {
  readonly id: string;
  readonly listID: string;
  readonly Complete?: boolean | null;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}

export declare class List {
  readonly id: string;
  readonly userID: string;
  readonly Tasks?: (Task | null)[] | null;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<List, ListMetaData>);
  static copyOf(source: List, mutator: (draft: MutableModel<List, ListMetaData>) => MutableModel<List, ListMetaData> | void): List;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly ip?: string | null;
  readonly Lists?: (List | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}