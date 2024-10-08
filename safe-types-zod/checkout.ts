import { isValidPhone } from "@/regex-validation/phone-number";
import { z } from "zod";

type DeliveryType = ["standard", "express"];

const deliveryTypes = ["standard", "express"] as const;
const paymentMethodsTypes = ["receive-order-payment", "momo"] as const;

export const deliveryMethods = [
  {
    value: "standard",
    label: "Standard",
  },
  {
    value: "express",
    label: "Express",
  },
];

export const paymentMethods = [
  {
    value: "receive-order-payment",
    label: "Receive order payment",
  },
  {
    value: "momo",
    label: "Momo",
  },
];

export const CheckoutSchemaTypes = z.object({
  // phone: z
  //   .string({
  //     message: "Phone number is required",
  //     invalid_type_error: "Phone number must be a string",
  //   })
  //   .trim()
  //   .min(10, {
  //     message: "Phone number must be at least 10 characters",
  //   })
  //   .max(12, {
  //     message: "Phone number must be at most 10 characters",
  //   })
  //   .refine(isValidPhone, {
  //     message: "Invalid phone number",
  //   }),

  // name: z.string({
  //   message: "Name is required",
  //   invalid_type_error: "Name must be a string",
  // }),
  address: z.object({
    name: z.string({
      message: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    phone: z
      .string({
        message: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
      })
      .trim()
      .min(10, {
        message: "Phone number must be at least 10 characters",
      })
      .max(12, {
        message: "Phone number must be at most 10 characters",
      })
      .refine(isValidPhone, {
        message: "Invalid phone number",
      }),

    addressShipping: z
      .string({
        message: "Address is required",
        invalid_type_error: "Address must be a string",
      })
      .min(10, {
        message: "Address must be at least 10 characters",
      })
      .max(100, {
        message: "Address must be at most 100 characters",
      }),
  }),

  method: z.enum(deliveryTypes, {
    required_error: "You need to select a delivery method.",
    invalid_type_error: "Invalid notification type.",
  }),
  paymentMethod: z.enum(paymentMethodsTypes, {
    required_error: "You need to select a payment method.",
    invalid_type_error: "Invalid notification type.",
  }),
  discountCode: z.string().optional(),
});

export const PaymentMethodSchemaTypes = z.object({
  paymentMethod: z.enum(paymentMethodsTypes, {
    required_error: "You need to select a payment method.",
    invalid_type_error: "Invalid notification type.",
  }),
});

export const DiscountCodeSchemaTypes = z.object({
  discountCode: z.string().optional(),
});

export const Checkout = CheckoutSchemaTypes.merge(
  PaymentMethodSchemaTypes,
).merge(DiscountCodeSchemaTypes);
