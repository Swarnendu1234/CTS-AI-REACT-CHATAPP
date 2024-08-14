import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-16 pr-[69px] box-border max-w-full text-center text-mini text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[25px] max-w-full">
        <div className="w-[578px] flex flex-col items-start justify-start gap-1.5 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start max-w-full">
              <div className="w-[559px] flex flex-row items-start justify-end py-0 px-[22px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[43px] max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start relative min-w-[107px]">
                    <div className="h-full w-full absolute !m-[0] top-[-7px] left-[-57px] rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border" />
                    <div className="flex-1 rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid flex flex-row items-start justify-start pt-2 pb-[9px] pl-1.5 pr-px whitespace-nowrap z-[1]">
                      <div className="h-[35px] w-[143px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
                      <div className="flex-1 relative leading-[14px] font-black z-[1]">
                        Data Scientist
                      </div>
                    </div>
                  </div>
                  <div className="flex-[0.9371] rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-2 pb-[9px] pl-1.5 pr-px min-w-[107px] whitespace-nowrap">
                    <div className="h-[35px] w-[143px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
                    <div className="flex-1 relative leading-[14px] font-black z-[1]">
                      Cyber Security
                    </div>
                  </div>
                  <div className="flex-[0.9371] rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-2 pb-[9px] pl-1.5 pr-px min-w-[107px]">
                    <div className="h-[35px] w-[143px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
                    <div className="h-3.5 flex-1 relative font-black flex items-center justify-center z-[1]">{`Computer Science `}</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start gap-7 max-w-full">
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[264px] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px]">
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[145px]">
                      <button className="cursor-pointer border-gray-200 border-[1px] border-solid pt-2 px-2.5 pb-[9px] bg-gainsboro-200 self-stretch rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-silver hover:border-darkslategray-300 hover:border-[1px] hover:border-solid hover:box-border">
                        <div className="h-[35px] w-[223px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
                        <div className="w-[197px] relative text-mini leading-[14px] font-black font-inter text-black text-center flex items-center justify-center shrink-0 z-[1]">
                          Machine Learning
                        </div>
                      </button>
                    </div>
                    <div className="w-[184px] relative font-black flex items-center justify-center shrink-0 ml-[-1px]">
                      Mechanical Engineering
                    </div>
                  </div>
                </div>
                <div className="w-[143px] rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-2 pb-[9px] pl-1.5 pr-px whitespace-nowrap">
                  <div className="h-[35px] w-[143px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
                  <div className="flex-1 relative leading-[14px] font-black z-[1]">
                    Cyber Security
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[41px] max-w-full">
            <div className="w-[184px] relative font-black flex items-center justify-center shrink-0">
              Electrical Engineering
            </div>
            <div className="w-[205px] flex flex-col items-start justify-start pt-0.5 pb-0 pl-0 pr-[21px] box-border">
              <div className="self-stretch relative font-black">
                Electrical Engineering
              </div>
            </div>
            <div className="w-[72px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
              <div className="self-stretch relative font-black">Other</div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start max-w-full text-center text-xl text-gainsboro-100 font-inter">
          <div className="w-[817px] rounded-81xl bg-gainsboro-200 border-darkslategray-200 border-[1px] border-solid box-border overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-[15px] pb-2 pl-[42px] pr-12 gap-5 max-w-full">
            <div className="h-[79px] w-[817px] relative rounded-81xl bg-gainsboro-200 border-darkslategray-200 border-[1px] border-solid box-border shrink-0 hidden" />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-[41px] h-[38px] relative z-[1]"
                alt=""
                src="/attach-file.svg"
              />
            </div>
            <div className="w-[418px] shrink-0 flex flex-col items-start justify-start max-w-[calc(100%_-_129px)]">
              <div className="w-[372px] relative font-black flex items-center justify-center max-w-full z-[1]">
                Type your question here
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-12 h-12 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/arrow-upcircle.svg"
              />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FrameComponent1;
