import React from "react";

export const PageRootSectionHead = () => {
  return (
    <div className="w-full bg-[#FFB300]">
      <div className="max-w-3xl my-6 mx-4 md:mx-auto print:mx-10 print:mt-10 print:mb-10">
        <div className="flex justify-between gap-x-5 flex-col-reverse min-[480px]:flex-row gap-y-5 text-label-quaternary">
          <div className="flex justify-center flex-col gap-y-2">
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-3xl font-medium font-[Stretch-Pro] text-black">
                CARMEN FISCHER
              </span>
              <span className="text-sm text-neutral-600 font-stretch-semi-expanded">
                she/her
              </span>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <span className="text-xs text-neutral-600 font-stretch-semi-condensed">
                🇦🇹 Vienna, Austria
              </span>

              <div className="flex text-xs gap-x-1 flex-wrap">
                <a
                  className="underline text-neutral-600 hover:text-neutral-900"
                  href="https://linkedin.com/in/carmen-f-439a42245"
                >
                  LinkedIn
                </a>
                <span className="text-black">/</span>
                <a
                  className="underline text-neutral-600 hover:text-neutral-900"
                  href="mailto:fischer.carmen@protonmail.com"
                >
                  e-Mail
                </a>
                <span className="text-black">/</span>
                <a
                  className="text-neutral-600 hover:text-neutral-900"
                  href="tel:+4369919260672"
                >
                  +43 699 19 26 06 72
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
