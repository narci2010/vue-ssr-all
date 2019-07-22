import { Field, ID, ObjectType } from 'type-graphql';

import { SecurityToken as ISecurityToken } from '../../generated/prisma-client';

@ObjectType()
export class SecurityToken implements ISecurityToken {
  @Field(type => ID)
  readonly id: string;

  @Field()
  readonly value: string;

  @Field(type => SecurityTokenType)
  readonly type: 'EMAIL_CONFIRMATION' | 'RESET_PASSWORD';

  @Field()
  readonly expiredAt: string;

  @Field()
  readonly createdAt: string;

  @Field()
  readonly updatedAt: string;
}

export enum SecurityTokenType {
  EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION',
  RESET_PASSWORD = 'RESET_PASSWORD',
}
