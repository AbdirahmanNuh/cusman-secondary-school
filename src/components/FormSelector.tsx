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
        <SelectTrigger className="w-full h-14 bg-card border-2 border-border hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-sm">
          <SelectValue placeholder={placeholder} className="font-medium" />
        </SelectTrigger>
        <SelectContent className="bg-card border border-border shadow-xl z-50 min-w-[280px]">
          <div className="max-h-80 overflow-y-auto">
            {formOptions.map((group, groupIndex) => (
              <SelectGroup key={group.level}>
                {groupIndex > 0 && (
                  <div className="border-t border-border/50 my-1"></div>
                )}
                <SelectLabel className="px-4 py-3 text-sm font-bold text-primary bg-muted/20 border-b border-border/30 uppercase tracking-wide">
                  {group.level}
                </SelectLabel>
                {group.forms.map((form) => (
                  <SelectItem 
                    key={form.value} 
                    value={form.value}
                    className="py-3 px-6 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors duration-200 border-l-4 border-transparent hover:border-primary/30"
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