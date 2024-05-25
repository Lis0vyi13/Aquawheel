import Contacts from "../Contacts";
import Form from "../form/Form";

const FooterContent = ({ className, sidebarForm }) => {
  return (
    <>
      <div
        className={`footer__content gap-4 w-full mt-[16px] h-full absolute left-0 top-0 ${className}`}
      >
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <Contacts sidebarForm={sidebarForm} />
            <Form sidebarForm={sidebarForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
