import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const formOptions = [
  { 
    level: "Form 1", 
    forms: [
      { value: "1A", label: "Form 1A" },
      { value: "1B", label: "Form 1B" },
      { value: "1C", label: "Form 1C" },
      { value: "1D", label: "Form 1D" }
    ]
  },
  { 
    level: "Form 2", 
    forms: [
      { value: "2A", label: "Form 2A" },
      { value: "2B", label: "Form 2B" },
      { value: "2C", label: "Form 2C" },
      { value: "2D", label: "Form 2D" }
    ]
  },
  { 
    level: "Form 3", 
    forms: [
      { value: "3A", label: "Form 3A" },
      { value: "3B", label: "Form 3B" },
      { value: "3C", label: "Form 3C" },
      { value: "3D", label: "Form 3D" }
    ]
  },
  { 
    level: "Form 4", 
    forms: [
      { value: "4A", label: "Form 4A" },
      { value: "4B", label: "Form 4B" },
      { value: "4C", label: "Form 4C" },
      { value: "4D", label: "Form 4D" }
    ]
  }
];

interface FormSelectorProps {
  onSelectionChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const FormSelector = ({ 
  onSelectionChange, 
  defaultValue = "1A", 
  placeholder = "Select your form level" 
}: FormSelectorProps) => {
  const [selectedForm, setSelectedForm] = useState<string>(defaultValue);

  const handleValueChange = (value: string) => {
    setSelectedForm(value);
    onSelectionChange?.(value);
  };

  return (
    <div className="w-full max-w-md">
      <Select value={selectedForm} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 bg-background border-2 border-border hover:border-primary focus:border-primary transition-colors">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-background border-2 border-border shadow-lg z-50">
          <div className="max-h-64 overflow-y-auto">
            {formOptions.map((group) => (
              <SelectGroup key={group.level}>
                <SelectLabel className="px-4 py-2 text-sm font-semibold text-muted-foreground bg-muted/30">
                  {group.level}
                </SelectLabel>
                {group.forms.map((form) => (
                  <SelectItem 
                    key={form.value} 
                    value={form.value}
                    className="py-3 px-6 hover:bg-muted focus:bg-muted cursor-pointer"
                  >
                    <span className="font-medium text-foreground">{form.label}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelector;