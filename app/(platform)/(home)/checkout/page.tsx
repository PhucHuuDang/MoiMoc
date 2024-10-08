import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckoutHeader } from "./_components/checkout-header";
import { MapPin, Phone } from "lucide-react";
import { DeliveryMethod } from "./_components/delivery-method";
import { ReceivingInformation } from "./_components/receiving-information";
import { PaymentMethod } from "./_components/payment-method";
import { OrderDetail } from "./_components/order-detail";
import { Footer } from "@/components/_global-components-reused/footer";
import { Separator } from "@/components/ui/separator";
import { DiscountCode } from "./_components/discount-code";
import { CheckoutClient } from "./checkout-client";
import { SparklesCore } from "@/components/aceternity-ui/sparkles";

const CheckoutPage = () => {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center
        overflow-hidden"
    >
      {/* <div className="py-10 pt-20 flex items-center justify-center">
        <CheckoutHeader />
      </div>
      <div className="flex justify-center gap-x-8 my-5">
        <div className=" flex flex-col items-center gap-y-8">
          <ReceivingInformation />

          <DeliveryMethod />

          <PaymentMethod />
          <DiscountCode />
        </div>

        <OrderDetail />
      </div>

      <Separator className="my-16 h-0.5 mx-1 bg-moi_moc_green" />

      <div className="my-4">
        <Footer />
      </div> */}
      <div className="w-full h-full 2xl:h-screen absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          // maxSize={2.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#47843c"
        />
      </div>
      <div className="z-10">
        <CheckoutClient />
      </div>
    </div>
  );
};

export default CheckoutPage;
