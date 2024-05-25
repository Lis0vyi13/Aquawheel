import { useEffect } from "react";
import { createPortal } from "react-dom";

import FooterContent from "../footer/FooterContent";

import { useForm } from "../../hooks/useForm";
import { useActions } from "../../hooks/useActions";

const SidebarForm = () => {
  const isFormOpened = useForm();
  const { toggleForm } = useActions();

  useEffect(() => {
    document.body.style.overflowY = isFormOpened ? "hidden" : "auto";
  }, [isFormOpened]);

  return (
    <>
      {createPortal(
        <div
          className={`fixed z-50 left-0 top-0 duration-300 bg-[linear-gradient(248deg,_#88d2f6_0%,_#43acdf_100%)] w-full h-full ${
            isFormOpened ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="burger-menu cursor-pointer container relative z-[50]">
            <div className="mt-[2.6rem]">
              <div className={`absolute right-[20px] z-[1000]`}>
                <div
                  onClick={() => toggleForm()}
                  className={`relative z-[1000] burger w-[27px] h-[27px]`}
                >
                  <span
                    className={`absolute duration-150 bg-white left-[-3px] h-[2px] top-1/2 -translate-y-1/2 origin-center w-[125%] rotate-45`}
                  />

                  <span
                    className={`absolute duration-150 bg-white left-[-3px] h-[2px] top-1/2 -translate-y-1/2 origin-center w-[125%] -rotate-45`}
                  />
                </div>
              </div>
            </div>
          </div>
          <FooterContent sidebarForm className={"mt-[48px]"} />
        </div>,
        document.getElementById("root"),
      )}
    </>
  );
};

export default SidebarForm;
