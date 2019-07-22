import { ValidationError } from 'class-validator';
import capitalize from 'lodash/capitalize';
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export class ValidationMixin extends Vue {
  get isFormDirty(): boolean {
    const fields: any = this.fields;
    return Object.keys(fields).some(key => fields[key].dirty);
  }

  get isFormValid(): boolean {
    const fields: any = this.fields;
    return !Object.keys(fields).some(key => !!fields[key].invalid);
  }

  mapErrorToFields(err: any, fieldToCodes: FieldToCodesObject = {}) {
    console.error(err.message);
    if (err && err.graphQLErrors.length) {
      err.graphQLErrors.forEach((i: any) => {
        const message: string = i.message;
        const code: string = i.extensions.code;

        // TODO: need to improve this!
        if (code === 'ARGUMENT_VALIDATION_ERROR') {
          const { validationErrors } = i.extensions.exception;

          if (Array.isArray(validationErrors)) {
            validationErrors.forEach((j: ValidationError) => {
              const msg = capitalize(Object.values(j.constraints)[0]);
              this.errors.add({ field: j.property, msg });
            });
          }
        } else {
          Object.keys(fieldToCodes).forEach(field => {
            if (fieldToCodes[field].includes(code)) {
              this.errors.add({ field: field, msg: message });
            }
          });
        }
      });
    }
  }
}

type FieldToCodesObject = {
  [field: string]: string[];
};
