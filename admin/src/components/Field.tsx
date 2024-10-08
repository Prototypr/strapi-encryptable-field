import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
    Box,
    Field,
    Stack,
    Flex
  } from '@strapi/design-system';
  import { useIntl } from 'react-intl';
  import {getTranslation} from '../utils/getTranslation';

interface FieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  // Add the missing properties
  description?: string;
  disabled?: boolean;
  error?: string;
  intlLabel?: { id: string; defaultMessage: string };
  labelAction?: React.ReactNode;
  name: string;
  required?: boolean;
  attribute?: {
    options?: {
      hint?: string;
    };
  };
}

const FieldComponent: React.FC<FieldProps> = ({ 
    description,
    placeholder,
    disabled,
    error,
    intlLabel,
    labelAction,
    name,
    onChange,
    required,
    value,
    attribute,
 }) => {
    const { formatMessage } = useIntl();
    const reference = useRef(null);
    const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Field.Root
      id={name}
      name={name}
      hint={attribute?.options?.hint ?? description ?? ''}
      error={error}
      required={required}
      disabled={isDisabled}
    >
          <Field.Label action={labelAction} required={required}>
            {name}
          </Field.Label>
        <Field.Input
          ref={reference}
          id={`strapi-encryptable-field-value-${name}`}
          disabled={isDisabled}
          required={required}
          name={name}
          aria-label={formatMessage({
            id: getTranslation('strapi-encryptable-field.input.aria-label'),
            defaultMessage: 'Encryptable input',
          })}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={isDisabled ? 'password' : 'text'}
          hint={description}
        />
        <Field.Hint />
        <Field.Error />
    </Field.Root>
  );
};

export default FieldComponent;
