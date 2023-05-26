import { Input } from 'antd';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type TFormInput = {
  name: string;
  control: Control<FieldValues, any>;
  placeholder: string;
};

const FormInput: React.FC<TFormInput> = ({ name, control, placeholder }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => <Input {...field} placeholder={placeholder} />}
  />
);

export { FormInput };
