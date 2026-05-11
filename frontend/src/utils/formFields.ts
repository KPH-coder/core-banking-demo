interface FormFieldOptions {
  required?: boolean;
  readonly?: boolean;
  divClass?: string;
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

let fieldIdCounter = 0;

export function createFormField(
  label: string,
  value: string | number | null | undefined,
  options: FormFieldOptions = {},
): FormField {
  fieldIdCounter += 1;
  return {
    id: fieldIdCounter,
    type: "input",
    label,
    placeholder: "",
    value: value != null ? `${value}` : "",
    required: options.required ?? false,
    readonly: options.readonly ?? true,
    error: false,
    divClass: options.divClass ?? "col-span-6",
  };
}

export function resetFieldIdCounter(): void {
  fieldIdCounter = 0;
}
