import { Logo } from "@/components/_global-components-reused/logo";
import Spinner from "@/components/animata/spinner";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div
      className="absolute inset-0 -z-10 flex h-full w-full items-center justify-center
        bg-moi_moc_green/30 dark:bg-slate-200/10 backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center justify-center gap-y-1">
        <Logo height={100} width={300} />

        <div className="flex items-center gap-x-1 justify-center">
          {/* <LoaderCircle className="size-6 animate-spin" /> */}
          <Spinner
            childSize="size-6"
            outerSize="size-8"
            className="bg-gradient-to-bl from-moi_moc_green to-blue-400"
          />
          <span className="text-lg font-bold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
