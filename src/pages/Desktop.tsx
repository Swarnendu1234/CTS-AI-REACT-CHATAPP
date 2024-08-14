import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Desktop: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px]">
      <FrameComponent />
      <main className="w-[1112px] overflow-hidden shrink-0 flex flex-col items-end justify-start py-[62px] px-[53px] box-border gap-[577px] max-w-full">
        <header className="w-[1078px] flex flex-col items-end justify-start gap-[61px] max-w-[108%] shrink-0">
          <img
            className="w-10 h-10 relative object-cover"
            loading="lazy"
            alt=""
            src="/menu@2x.png"
          />
          <div className="self-stretch h-0.5 flex flex-row items-start justify-start max-w-full">
            <img
              className="w-[985px] relative max-h-full object-contain mt-[-3px] max-w-full"
              loading="lazy"
              alt=""
            />
          </div>
        </header>
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default Desktop;
