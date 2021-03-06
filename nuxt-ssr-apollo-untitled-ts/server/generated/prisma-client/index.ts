// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  securityToken: (where?: SecurityTokenWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  securityToken: (
    where: SecurityTokenWhereUniqueInput
  ) => SecurityTokenNullablePromise;
  securityTokens: (args?: {
    where?: SecurityTokenWhereInput;
    orderBy?: SecurityTokenOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<SecurityToken>;
  securityTokensConnection: (args?: {
    where?: SecurityTokenWhereInput;
    orderBy?: SecurityTokenOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SecurityTokenConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSecurityToken: (data: SecurityTokenCreateInput) => SecurityTokenPromise;
  updateSecurityToken: (args: {
    data: SecurityTokenUpdateInput;
    where: SecurityTokenWhereUniqueInput;
  }) => SecurityTokenPromise;
  updateManySecurityTokens: (args: {
    data: SecurityTokenUpdateManyMutationInput;
    where?: SecurityTokenWhereInput;
  }) => BatchPayloadPromise;
  upsertSecurityToken: (args: {
    where: SecurityTokenWhereUniqueInput;
    create: SecurityTokenCreateInput;
    update: SecurityTokenUpdateInput;
  }) => SecurityTokenPromise;
  deleteSecurityToken: (
    where: SecurityTokenWhereUniqueInput
  ) => SecurityTokenPromise;
  deleteManySecurityTokens: (
    where?: SecurityTokenWhereInput
  ) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  securityToken: (
    where?: SecurityTokenSubscriptionWhereInput
  ) => SecurityTokenSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Gender = "MALE" | "FEMALE";

export type Role = "ADMIN" | "USER";

export type SecurityTokenOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "value_ASC"
  | "value_DESC"
  | "type_ASC"
  | "type_DESC"
  | "expiredAt_ASC"
  | "expiredAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type SecurityTokenType = "EMAIL_CONFIRMATION" | "RESET_PASSWORD";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "emailConfirmed_ASC"
  | "emailConfirmed_DESC"
  | "fullName_ASC"
  | "fullName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "passwordLastChanged_ASC"
  | "passwordLastChanged_DESC"
  | "avatar_ASC"
  | "avatar_DESC"
  | "gender_ASC"
  | "gender_DESC"
  | "dateOfBirth_ASC"
  | "dateOfBirth_DESC"
  | "role_ASC"
  | "role_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateWithoutSecurityTokensInput {
  id?: Maybe<ID_Input>;
  email: String;
  emailConfirmed?: Maybe<Boolean>;
  fullName: String;
  password: String;
  passwordLastChanged?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  gender?: Maybe<Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  role: Role;
}

export type SecurityTokenWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  value?: Maybe<String>;
}>;

export interface SecurityTokenUpdateWithWhereUniqueWithoutUserInput {
  where: SecurityTokenWhereUniqueInput;
  data: SecurityTokenUpdateWithoutUserDataInput;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  emailConfirmed?: Maybe<Boolean>;
  fullName: String;
  password: String;
  passwordLastChanged?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  gender?: Maybe<Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  role: Role;
  securityTokens?: Maybe<SecurityTokenCreateManyWithoutUserInput>;
}

export interface SecurityTokenUpdateManyWithoutUserInput {
  create?: Maybe<
    SecurityTokenCreateWithoutUserInput[] | SecurityTokenCreateWithoutUserInput
  >;
  delete?: Maybe<
    SecurityTokenWhereUniqueInput[] | SecurityTokenWhereUniqueInput
  >;
  connect?: Maybe<
    SecurityTokenWhereUniqueInput[] | SecurityTokenWhereUniqueInput
  >;
  set?: Maybe<SecurityTokenWhereUniqueInput[] | SecurityTokenWhereUniqueInput>;
  disconnect?: Maybe<
    SecurityTokenWhereUniqueInput[] | SecurityTokenWhereUniqueInput
  >;
  update?: Maybe<
    | SecurityTokenUpdateWithWhereUniqueWithoutUserInput[]
    | SecurityTokenUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | SecurityTokenUpsertWithWhereUniqueWithoutUserInput[]
    | SecurityTokenUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<
    SecurityTokenScalarWhereInput[] | SecurityTokenScalarWhereInput
  >;
  updateMany?: Maybe<
    | SecurityTokenUpdateManyWithWhereNestedInput[]
    | SecurityTokenUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpsertWithoutSecurityTokensInput {
  update: UserUpdateWithoutSecurityTokensDataInput;
  create: UserCreateWithoutSecurityTokensInput;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  emailConfirmed?: Maybe<Boolean>;
  emailConfirmed_not?: Maybe<Boolean>;
  fullName?: Maybe<String>;
  fullName_not?: Maybe<String>;
  fullName_in?: Maybe<String[] | String>;
  fullName_not_in?: Maybe<String[] | String>;
  fullName_lt?: Maybe<String>;
  fullName_lte?: Maybe<String>;
  fullName_gt?: Maybe<String>;
  fullName_gte?: Maybe<String>;
  fullName_contains?: Maybe<String>;
  fullName_not_contains?: Maybe<String>;
  fullName_starts_with?: Maybe<String>;
  fullName_not_starts_with?: Maybe<String>;
  fullName_ends_with?: Maybe<String>;
  fullName_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  passwordLastChanged?: Maybe<DateTimeInput>;
  passwordLastChanged_not?: Maybe<DateTimeInput>;
  passwordLastChanged_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  passwordLastChanged_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  passwordLastChanged_lt?: Maybe<DateTimeInput>;
  passwordLastChanged_lte?: Maybe<DateTimeInput>;
  passwordLastChanged_gt?: Maybe<DateTimeInput>;
  passwordLastChanged_gte?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  avatar_not?: Maybe<String>;
  avatar_in?: Maybe<String[] | String>;
  avatar_not_in?: Maybe<String[] | String>;
  avatar_lt?: Maybe<String>;
  avatar_lte?: Maybe<String>;
  avatar_gt?: Maybe<String>;
  avatar_gte?: Maybe<String>;
  avatar_contains?: Maybe<String>;
  avatar_not_contains?: Maybe<String>;
  avatar_starts_with?: Maybe<String>;
  avatar_not_starts_with?: Maybe<String>;
  avatar_ends_with?: Maybe<String>;
  avatar_not_ends_with?: Maybe<String>;
  gender?: Maybe<Gender>;
  gender_not?: Maybe<Gender>;
  gender_in?: Maybe<Gender[] | Gender>;
  gender_not_in?: Maybe<Gender[] | Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  dateOfBirth_not?: Maybe<DateTimeInput>;
  dateOfBirth_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateOfBirth_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateOfBirth_lt?: Maybe<DateTimeInput>;
  dateOfBirth_lte?: Maybe<DateTimeInput>;
  dateOfBirth_gt?: Maybe<DateTimeInput>;
  dateOfBirth_gte?: Maybe<DateTimeInput>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  securityTokens_every?: Maybe<SecurityTokenWhereInput>;
  securityTokens_some?: Maybe<SecurityTokenWhereInput>;
  securityTokens_none?: Maybe<SecurityTokenWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface SecurityTokenSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SecurityTokenWhereInput>;
  AND?: Maybe<
    SecurityTokenSubscriptionWhereInput[] | SecurityTokenSubscriptionWhereInput
  >;
  OR?: Maybe<
    SecurityTokenSubscriptionWhereInput[] | SecurityTokenSubscriptionWhereInput
  >;
  NOT?: Maybe<
    SecurityTokenSubscriptionWhereInput[] | SecurityTokenSubscriptionWhereInput
  >;
}

export interface SecurityTokenCreateInput {
  id?: Maybe<ID_Input>;
  value: String;
  type: SecurityTokenType;
  expiredAt: DateTimeInput;
  user: UserCreateOneWithoutSecurityTokensInput;
}

export interface SecurityTokenUpdateManyDataInput {
  value?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
}

export interface UserCreateOneWithoutSecurityTokensInput {
  create?: Maybe<UserCreateWithoutSecurityTokensInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface SecurityTokenScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  type_not?: Maybe<SecurityTokenType>;
  type_in?: Maybe<SecurityTokenType[] | SecurityTokenType>;
  type_not_in?: Maybe<SecurityTokenType[] | SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
  expiredAt_not?: Maybe<DateTimeInput>;
  expiredAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiredAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiredAt_lt?: Maybe<DateTimeInput>;
  expiredAt_lte?: Maybe<DateTimeInput>;
  expiredAt_gt?: Maybe<DateTimeInput>;
  expiredAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<SecurityTokenScalarWhereInput[] | SecurityTokenScalarWhereInput>;
  OR?: Maybe<SecurityTokenScalarWhereInput[] | SecurityTokenScalarWhereInput>;
  NOT?: Maybe<SecurityTokenScalarWhereInput[] | SecurityTokenScalarWhereInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  emailConfirmed?: Maybe<Boolean>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  passwordLastChanged?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  gender?: Maybe<Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  role?: Maybe<Role>;
  securityTokens?: Maybe<SecurityTokenUpdateManyWithoutUserInput>;
}

export interface SecurityTokenUpsertWithWhereUniqueWithoutUserInput {
  where: SecurityTokenWhereUniqueInput;
  update: SecurityTokenUpdateWithoutUserDataInput;
  create: SecurityTokenCreateWithoutUserInput;
}

export interface SecurityTokenUpdateInput {
  value?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutSecurityTokensInput>;
}

export interface SecurityTokenWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  type_not?: Maybe<SecurityTokenType>;
  type_in?: Maybe<SecurityTokenType[] | SecurityTokenType>;
  type_not_in?: Maybe<SecurityTokenType[] | SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
  expiredAt_not?: Maybe<DateTimeInput>;
  expiredAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiredAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiredAt_lt?: Maybe<DateTimeInput>;
  expiredAt_lte?: Maybe<DateTimeInput>;
  expiredAt_gt?: Maybe<DateTimeInput>;
  expiredAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<SecurityTokenWhereInput[] | SecurityTokenWhereInput>;
  OR?: Maybe<SecurityTokenWhereInput[] | SecurityTokenWhereInput>;
  NOT?: Maybe<SecurityTokenWhereInput[] | SecurityTokenWhereInput>;
}

export interface UserUpdateOneRequiredWithoutSecurityTokensInput {
  create?: Maybe<UserCreateWithoutSecurityTokensInput>;
  update?: Maybe<UserUpdateWithoutSecurityTokensDataInput>;
  upsert?: Maybe<UserUpsertWithoutSecurityTokensInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  emailConfirmed?: Maybe<Boolean>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  passwordLastChanged?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  gender?: Maybe<Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  role?: Maybe<Role>;
}

export interface SecurityTokenCreateManyWithoutUserInput {
  create?: Maybe<
    SecurityTokenCreateWithoutUserInput[] | SecurityTokenCreateWithoutUserInput
  >;
  connect?: Maybe<
    SecurityTokenWhereUniqueInput[] | SecurityTokenWhereUniqueInput
  >;
}

export interface SecurityTokenUpdateManyMutationInput {
  value?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
}

export interface SecurityTokenCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  value: String;
  type: SecurityTokenType;
  expiredAt: DateTimeInput;
}

export interface UserUpdateWithoutSecurityTokensDataInput {
  email?: Maybe<String>;
  emailConfirmed?: Maybe<Boolean>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  passwordLastChanged?: Maybe<DateTimeInput>;
  avatar?: Maybe<String>;
  gender?: Maybe<Gender>;
  dateOfBirth?: Maybe<DateTimeInput>;
  role?: Maybe<Role>;
}

export interface SecurityTokenUpdateManyWithWhereNestedInput {
  where: SecurityTokenScalarWhereInput;
  data: SecurityTokenUpdateManyDataInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface SecurityTokenUpdateWithoutUserDataInput {
  value?: Maybe<String>;
  type?: Maybe<SecurityTokenType>;
  expiredAt?: Maybe<DateTimeInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  emailConfirmed: Boolean;
  fullName: String;
  password: String;
  passwordLastChanged?: DateTimeOutput;
  avatar?: String;
  gender?: Gender;
  dateOfBirth?: DateTimeOutput;
  role: Role;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  emailConfirmed: () => Promise<Boolean>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  passwordLastChanged: () => Promise<DateTimeOutput>;
  avatar: () => Promise<String>;
  gender: () => Promise<Gender>;
  dateOfBirth: () => Promise<DateTimeOutput>;
  role: () => Promise<Role>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  emailConfirmed: () => Promise<AsyncIterator<Boolean>>;
  fullName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  passwordLastChanged: () => Promise<AsyncIterator<DateTimeOutput>>;
  avatar: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<Gender>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
  role: () => Promise<AsyncIterator<Role>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface SecurityToken {
  id: ID_Output;
  value: String;
  type: SecurityTokenType;
  expiredAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface SecurityTokenPromise
  extends Promise<SecurityToken>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  type: () => Promise<SecurityTokenType>;
  expiredAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
}

export interface SecurityTokenSubscription
  extends Promise<AsyncIterator<SecurityToken>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<SecurityTokenType>>;
  expiredAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  user: <T = UserSubscription>() => T;
}

export interface SecurityTokenNullablePromise
  extends Promise<SecurityToken | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  type: () => Promise<SecurityTokenType>;
  expiredAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  user: <T = UserPromise>() => T;
}

export interface SecurityTokenSubscriptionPayload {
  mutation: MutationType;
  node: SecurityToken;
  updatedFields: String[];
  previousValues: SecurityTokenPreviousValues;
}

export interface SecurityTokenSubscriptionPayloadPromise
  extends Promise<SecurityTokenSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SecurityTokenPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SecurityTokenPreviousValuesPromise>() => T;
}

export interface SecurityTokenSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SecurityTokenSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SecurityTokenSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SecurityTokenPreviousValuesSubscription>() => T;
}

export interface AggregateSecurityToken {
  count: Int;
}

export interface AggregateSecurityTokenPromise
  extends Promise<AggregateSecurityToken>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSecurityTokenSubscription
  extends Promise<AsyncIterator<AggregateSecurityToken>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface SecurityTokenEdge {
  node: SecurityToken;
  cursor: String;
}

export interface SecurityTokenEdgePromise
  extends Promise<SecurityTokenEdge>,
    Fragmentable {
  node: <T = SecurityTokenPromise>() => T;
  cursor: () => Promise<String>;
}

export interface SecurityTokenEdgeSubscription
  extends Promise<AsyncIterator<SecurityTokenEdge>>,
    Fragmentable {
  node: <T = SecurityTokenSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface SecurityTokenPreviousValues {
  id: ID_Output;
  value: String;
  type: SecurityTokenType;
  expiredAt: DateTimeOutput;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface SecurityTokenPreviousValuesPromise
  extends Promise<SecurityTokenPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  value: () => Promise<String>;
  type: () => Promise<SecurityTokenType>;
  expiredAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface SecurityTokenPreviousValuesSubscription
  extends Promise<AsyncIterator<SecurityTokenPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  value: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<SecurityTokenType>>;
  expiredAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface SecurityTokenConnection {
  pageInfo: PageInfo;
  edges: SecurityTokenEdge[];
}

export interface SecurityTokenConnectionPromise
  extends Promise<SecurityTokenConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SecurityTokenEdge>>() => T;
  aggregate: <T = AggregateSecurityTokenPromise>() => T;
}

export interface SecurityTokenConnectionSubscription
  extends Promise<AsyncIterator<SecurityTokenConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SecurityTokenEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSecurityTokenSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  emailConfirmed: Boolean;
  fullName: String;
  password: String;
  passwordLastChanged?: DateTimeOutput;
  avatar?: String;
  gender?: Gender;
  dateOfBirth?: DateTimeOutput;
  role: Role;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  emailConfirmed: () => Promise<Boolean>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  passwordLastChanged: () => Promise<DateTimeOutput>;
  avatar: () => Promise<String>;
  gender: () => Promise<Gender>;
  dateOfBirth: () => Promise<DateTimeOutput>;
  role: () => Promise<Role>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  securityTokens: <T = FragmentableArray<SecurityToken>>(args?: {
    where?: SecurityTokenWhereInput;
    orderBy?: SecurityTokenOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  emailConfirmed: () => Promise<AsyncIterator<Boolean>>;
  fullName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  passwordLastChanged: () => Promise<AsyncIterator<DateTimeOutput>>;
  avatar: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<Gender>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
  role: () => Promise<AsyncIterator<Role>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  securityTokens: <
    T = Promise<AsyncIterator<SecurityTokenSubscription>>
  >(args?: {
    where?: SecurityTokenWhereInput;
    orderBy?: SecurityTokenOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  emailConfirmed: () => Promise<Boolean>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  passwordLastChanged: () => Promise<DateTimeOutput>;
  avatar: () => Promise<String>;
  gender: () => Promise<Gender>;
  dateOfBirth: () => Promise<DateTimeOutput>;
  role: () => Promise<Role>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  securityTokens: <T = FragmentableArray<SecurityToken>>(args?: {
    where?: SecurityTokenWhereInput;
    orderBy?: SecurityTokenOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "SecurityToken",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "SecurityTokenType",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_MANAGEMENT_API_SECRET"]}`
});
export const prisma = new Prisma();
