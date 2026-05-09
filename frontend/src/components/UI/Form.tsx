import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface CommonType {
  id: number;
  type: string;
}
interface InputType extends CommonType {
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
  readonly: boolean;
  error: boolean;
  divClass: string;
  text?: never;
  handler?: never;
  active?: never;
}

interface ButtonType extends CommonType {
  text: string;
  handler: () => void;
  active?: boolean;
  divClass: string;
  required?: never;
  error?: never;
  value?: never;
  label?: never;
  placeholder?: never;
  readonly?: never;
}

type ElementType = InputType | ButtonType;
interface FormType {
  elements: Array<ElementType>;
  setForm: (el: Array<ElementType>) => void;
}

const Form: React.FC<FormType> = properties => {
  const { elements, setForm } = properties;
  const [formError, setFormError] = useState("");
  const checkErrors = () => {
    const updElements = elements.map(element => {
      if (element.type === "input" && element.required && !element.value) {
        return { ...element, error: true };
      }
      return element;
    });
    if (!updElements.find(e => e.error)) {
      setFormError("");
    }
    setForm(updElements);
  };
  const changeForm = (id: number, newValue: string) => {
    const updElements = elements.map(element => {
      if (element.id === id && element.type === "input") {
        const error = element.required ? !newValue.length : false;
        return { ...element, value: newValue, error };
      }
      return element;
    });
    setForm(updElements);
  };
  const clearForm = () => {
    const updElements = elements.map(element => {
      if (element.type === "input" && element.value) {
        return { ...element, value: "", error: false };
      }
      return element;
    });
    setForm(updElements);
  };

  return (
    <div className="grid grid-cols-6">
      {elements.map(element => {
        if (element.type === "input") {
          return (
            <div key={element.id} className={element.divClass}>
              <Input
                label={element.label!}
                placeholder={element.placeholder!}
                value={element.value!}
                required={element.required!}
                error={element.error!}
                readonly={element.readonly!}
                setInput={value => {
                  changeForm(element.id, value);
                }}
              />
            </div>
          );
        }
        if (element.type === "button") {
          return (
            <div key={element.id} className={element.divClass}>
              <Button
                text={element.text!}
                active={!elements.find(e => e.error)}
                handler={() => {
                  if (elements.find(e => e.required && !e.value)) {
                    checkErrors();
                    setFormError("Required fields must be filled in");
                  } else {
                    setFormError("");
                    element.handler!();
                    clearForm();
                  }
                }}
              />
            </div>
          );
        }
        return null;
      })}
      {elements.find(e => e.error) && <p className="whitespace-nowrap	text-mango-600 text-sm">{formError}</p>}
    </div>
  );
};

export default Form;
