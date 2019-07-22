import { registerEnumType } from 'type-graphql';

import { SecurityTokenType } from '../api/auth';
import { ThemeVariant } from '../api/ui';
import { Gender, Role } from '../api/user';

export function configureEnums() {
  registerEnumType(Gender, { name: 'Gender' });
  registerEnumType(Role, { name: 'Role' });
  registerEnumType(SecurityTokenType, { name: 'SecurityTokenType' });
  registerEnumType(ThemeVariant, { name: 'ThemeVariant' });
}
