import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsYearMonthString(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isYearMonthString',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') {
                        return false;
                    }
                    const regex = /^\d{4}-(0[1-9]|1[0-2])$/;
                    return regex.test(value);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} debe ser una cadena de texto con formato de año y mes (YYYY-MM)`;
                },
            },
        });
    };
}