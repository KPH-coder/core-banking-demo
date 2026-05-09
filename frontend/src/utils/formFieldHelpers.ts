interface FormFieldOptions {
  id: number;
  label: string;
  divClass: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
}

interface FormField {
  id: number;
  type: "input";
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
  readonly: boolean;
  error: boolean;
  divClass: string;
}

// eslint-disable-next-line import/prefer-default-export
export const createFormField = (options: FormFieldOptions): FormField => ({
  id: options.id,
  type: "input",
  label: options.label,
  placeholder: options.placeholder ?? "",
  value: options.value ?? "",
  required: options.required ?? false,
  readonly: options.readonly ?? true,
  error: false,
  divClass: options.divClass,
});
