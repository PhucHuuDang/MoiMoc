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

interface ExpireDateSelectProps<T extends FieldValues, K> {
  form: UseFormReturn<T>;
  name: Path<T>;
  formLabel: string;

  // productCategories: ExpireDateSelectTypes[];
}

export const ExpireDateSelect = <T extends FieldValues, K>({
  form,
  name,
  formLabel,
}: ExpireDateSelectProps<T, K>) => {
  const monthsArray = [
    { value: "1", label: "1 month" },
    { value: "2", label: "2 month" },
    { value: "3", label: "3 month" },
    { value: "4", label: "4 month" },
    { value: "5", label: "5 month" },
    { value: "6", label: "6 month" },
    { value: "7", label: "7 month" },
    { value: "8", label: "8 month" },
    { value: "9", label: "9 month" },
    { value: "10", label: "10 month" },
    { value: "11", label: "11 month" },
    { value: "12", label: "12 month" },
  ];

  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Hạn sử dụng</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <FormSelectControl
              form={form}
              name={name}
              placeholder="
               Thời hạn sử dụng
            "
              formLabel={formLabel}
              classNameFormItem="w-[200px]"
            >
              {monthsArray.map((expired) => {
                const categoryId = expired.value;

                return (
                  <SelectItem key={expired.value} value={categoryId}>
                    {expired.label}
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