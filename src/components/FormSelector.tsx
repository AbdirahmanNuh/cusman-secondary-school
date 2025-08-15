import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formOptions = [
  { value: "1A", label: "Form 1A", ageRange: "Ages 13-14" },
  { value: "1B", label: "Form 1B", ageRange: "Ages 13-14" },
  { value: "1C", label: "Form 1C", ageRange: "Ages 13-14" },
  { value: "1D", label: "Form 1D", ageRange: "Ages 13-14" },
  { value: "2A", label: "Form 2A", ageRange: "Ages 14-15" },
  { value: "2B", label: "Form 2B", ageRange: "Ages 14-15" },
  { value: "2C", label: "Form 2C", ageRange: "Ages 14-15" },
  { value: "2D", label: "Form 2D", ageRange: "Ages 14-15" },
  { value: "3A", label: "Form 3A", ageRange: "Ages 15-16" },
  { value: "3B", label: "Form 3B", ageRange: "Ages 15-16" },
  { value: "3C", label: "Form 3C", ageRange: "Ages 15-16" },
  { value: "3D", label: "Form 3D", ageRange: "Ages 15-16" },
  { value: "4A", label: "Form 4A", ageRange: "Ages 16-17" },
  { value: "4B", label: "Form 4B", ageRange: "Ages 16-17" },
  { value: "4C", label: "Form 4C", ageRange: "Ages 16-17" },
  { value: "4D", label: "Form 4D", ageRange: "Ages 16-17" },
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
            {formOptions.map((form) => (
              <SelectItem 
                key={form.value} 
                value={form.value}
                className="flex items-center justify-between py-3 px-4 hover:bg-muted focus:bg-muted cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{form.label}</span>
                  <span className="text-sm text-muted-foreground">{form.ageRange}</span>
                </div>
              </SelectItem>
            ))}
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelector;