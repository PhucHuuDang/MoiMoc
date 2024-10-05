"use client";

import { FormSelectControl } from "@/components/_global-components-reused/form/form-select-control";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface ProductCategoryProps<T extends FieldValues, K> {
  form: UseFormReturn<T>;
  name: Path<T>;
  formLabel: string;
}

export const ProductCategory = <T extends FieldValues, K>({
  form,
  name,
  formLabel,
}: ProductCategoryProps<T, K>) => {
  const lipstickTypes = [
    { id: "1", value: "matte", label: "Matte Lipstick" },
    { id: "2", value: "glossy", label: "Glossy Lipstick" },
    { id: "3", value: "sheer", label: "Sheer Lipstick" },
    { id: "4", value: "satin", label: "Satin Lipstick" },
    { id: "5", value: "liquid", label: "Liquid Lipstick" },
    { id: "6", value: "cream", label: "Cream Lipstick" },
    { id: "7", value: "tint", label: "Lip Tint" },
    { id: "8", value: "stain", label: "Lip Stain" },
  ];

  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <FormSelectControl
              form={form}
              name={name}
              placeholder="
              Select lipstick category
            "
              formLabel={formLabel}
              classNameFormItem="w-[200px]"
            >
              {lipstickTypes.map((lipstick) => {
                return (
                  <SelectItem key={lipstick.id} value={lipstick.id}>
                    {lipstick.label}
                  </SelectItem>
                );
              })}
            </FormSelectControl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
