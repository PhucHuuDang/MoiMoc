"use client";

import { FormItemsControl } from "@/components/_global-components-reused/form/form-items-control";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusCircle } from "lucide-react";
import { useEffect } from "react";
import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form";

interface StockProps<T extends FieldValues, K> {
  form: UseFormReturn<T>;
  name?: Path<T>;
  stockProps: {
    quantity: Path<T> | string;
    discountPercent: Path<T> | string;
    price: Path<T> | string;
    discountPrice: Path<T> | string;
  };
}

export const Stock = <T extends FieldValues, K>({
  form,
  name,
  stockProps,
}: StockProps<T, K>) => {
  const typeFormItemControl = "number";

  const watchPrice = form.watch(stockProps.price as Path<T>);
  const watchDiscountPercent = form.watch(
    stockProps.discountPercent as Path<T>,
  );

  console.log({ watchPrice, watchDiscountPercent });

  useEffect(() => {
    const discountPriceCalculated =
      watchPrice && watchDiscountPercent
        ? (watchPrice * (100 - watchDiscountPercent)) / 100
        : 0;

    console.log({ discountPriceCalculated });

    form.setValue(
      stockProps.discountPrice as Path<T>,
      discountPriceCalculated as PathValue<T, Path<T>>,
    );
    form.trigger(stockProps.discountPrice as Path<T>);

  }, [watchPrice, watchDiscountPercent, form, stockProps.discountPrice]);

  return (
    <Card x-chunk="dashboard-07-chunk-1">
      <CardHeader>
        <CardTitle>Stock</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px]">SKU</TableHead> */}
              <TableHead>Stock</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Discount (%)</TableHead>
              <TableHead>Discount Price</TableHead>
              {/* <TableHead className="w-[100px]">Size</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="h-[100px]">
                  <FormItemsControl
                    type={typeFormItemControl}
                    name={stockProps.quantity as Path<T>}
                    form={form}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div className="h-[100px]">
                  <FormItemsControl
                    type={typeFormItemControl}
                    name={stockProps.price as Path<T>}
                    form={form}
                    // value={20}
                    placeholder="Enter the price for product..."
                  />
                </div>
              </TableCell>

              <TableCell>
                <div className="h-[100px]">
                  <FormItemsControl
                    type={typeFormItemControl}
                    name={stockProps.discountPercent as Path<T>}
                    form={form}
                    placeholder="Set discount percentage..."
                    // value={20}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div className="h-[100px]">
                  <FormItemsControl
                    type={typeFormItemControl}
                    name={stockProps.discountPrice as Path<T>}
                    form={form}
                    disabled
                    value={form.watch(stockProps.discountPrice as Path<T>)}
                    placeholder="Calculated..."
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button size="sm" variant="ghost" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add Variant
        </Button>
      </CardFooter>
    </Card>
  );
};
