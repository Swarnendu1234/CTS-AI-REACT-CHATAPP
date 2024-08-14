import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[328px] bg-darkslategray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[21px] px-1.5 pb-[43px] box-border gap-[39px] max-w-full text-center text-xl text-white font-inter ${className}`}
    >
      <div className="w-[212px] h-[129px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[29px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/cts---logo-3@2x.png"
          />
          <div className="w-[134px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
            <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 pl-2.5 pr-px bg-darkorange flex-1 rounded-81xl flex flex-row items-start justify-start">
              <div className="h-[47px] w-[122px] relative rounded-81xl bg-darkorange border-gray-200 border-[1px] border-solid box-border hidden z-[1]" />
              <div className="h-[27px] w-[27px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[2]" />
                <img
                  className="absolute top-[0px] left-[0px] w-[27px] h-[26px] overflow-hidden z-[3]"
                  alt=""
                  src="/arrow-left.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 ml-[-9px]">
                <a className="[text-decoration:none] self-stretch relative text-mini font-black font-inter text-white text-center z-[1]">
                  Go Back
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[243px] flex flex-col items-start justify-start pt-0 px-0 pb-[418px] box-border gap-[43px]">
        <div className="w-[120px] relative font-black flex items-center justify-center">
          History
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 text-mini">
          <div className="flex-1 flex flex-col items-end justify-start gap-2.5">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[11px]">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1.5 pl-px pr-2.5">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1.5 pl-1.5 pr-[5px]">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1 pl-1.5 pr-[5px]">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pl-[11px] pr-0">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pl-[11px] pr-0">
              <div className="flex-1 relative font-black">
                What about Extracurricular?
              </div>
            </div>
            <div className="w-56 relative font-black flex items-center justify-center">
              What about Extracurricular?
            </div>
          </div>
        </div>
      </div>
      <div className="w-[276px] flex flex-row items-start justify-start py-0 px-[30px] box-border text-mini">
        <div className="flex-1 flex flex-row items-end justify-start gap-[7px]">
          <div className="h-[34px] w-[34px] relative bg-[url('/public/logo-gray-2@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-8 h-8 object-cover hidden"
              alt=""
              src="/logo-gray-2@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-100 border-gainsboro-100 border-[0px] border-solid box-border w-full h-full z-[1]" />
          </div>
          <div className="flex-1 rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid flex flex-row items-start justify-start pt-[9px] pb-2 pl-2 pr-[3px] whitespace-nowrap">
            <div className="h-[35px] w-[175px] relative rounded-81xl bg-gainsboro-200 border-gray-200 border-[1px] border-solid box-border hidden" />
            <div className="flex-1 relative leading-[14px] font-black z-[1]">
              Swarnendu Majuder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
