import React, { useRef, useState } from "react";
import PersonalDetails from "../../components/forms/personalDetail";
import ProfessionalSummary from "../../components/forms/professioanalSumary";
import Education from "../../components/forms/education";
import EmploymentHistory from "../../components/forms/employmentHistory";
import Website from "../../components/forms/website";
import Skills from "../../components/forms/skillComponent";
import Reference from "../../components/forms/reference";
import Hobbies from "../../components/forms/hobbies";
import Languages from "../../components/forms/languages";
import Colors from "../../components/forms/colors";
// import { Dialog } from "primereact/dialog";
import { useRouter } from "next/router";
import { useReactToPrint } from "react-to-print";
import TemplateOne from "../../components/cv-templates/templateOne";
import TemplateTwo from "../../components/cv-templates/templateTwo";
import Image from 'next/image'
import { BsFillLockFill } from "react-icons/bs";

export default function index() {
  const componentRef = useRef();
  const [title, setTitle] = useState("Untitled");
  
  const [open, setOpen] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  //   const [visible, setVisible] = useState(false);
  const router = useRouter();
  //   const onHide = () => {
  //     setVisible(!visible);
  //   };

  // const [form, setForm]= useState // for the formto show on template
  const route = () => {
    router.push("/");
  };
  const titleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const openTemplates = () => {
    setOpen(() => !open);
  };

  const preview = () => {
    setOpenPreview(()=> !openPreview)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [selectedTemplate, setSelectedTemplate] = useState('Template One');
  const handleClick = (template) => {
    console.log(`Selected template: ${template}`);
    setSelectedTemplate(template);
    setOpen(true);
  }
  
 
  return (
    <div className="generator">
      <div className="genrator__main">
        <div className="generator__left">
          <button
            className="btn__secondary fixed__icon"
            onClick={() => route()}
          >
            <i className="pi pi-home"></i> Home
          </button>
          {/* <Dialog
            visible={visible}
            style={{ width: "35%" }}
            modal
            onHide={onHide}
          >
            <div className="modal__body">
              <div className="modal__text">
                You will lose all the data in this form. <br />
                Are you sure you want to go back?
              </div>
              <div className="btn__group mt-2">
                <button className="btn__secondary w-1" onClick={() => onHide()}>
                  No
                </button>
                <button className="btn__secondary w-1" onClick={() => route()}>
                  Yes
                </button>
              </div>
            </div>
          </Dialog> */}
          <div className="cvForm">
            <div className="form__title">
              <input
                className="formTitle"
                type="text"
                value={title}
                onChange={(e) => titleChange(e)}
                placeholder=""
                id=""
              />
            </div>
            {/* personal-details */}
            <PersonalDetails />
            {/* Professioanl Summary */}
            <ProfessionalSummary />
            {/* Edcucation */}
            <Education />
            {/* Employment History */}
            <EmploymentHistory />
            {/* Website and Socials links */}
            <Website />
            {/* Skills */}
            <Skills />
            {/* Reference */}
            <Reference />
            {/* Hobbies */}
            <Hobbies />
            {/* Languages */}
            <Languages />
          </div>
        </div>
        <div className={open ? "generator__right w-70" : "generator__right"}>
          <div className="preview">
          <div className={open ? "adjustedBody" : "preview__body"}>
 
  {selectedTemplate === 'Template One' ? (
    <TemplateOne condition={open} ref={componentRef} />
  ) : (
    <TemplateTwo condition={open} ref={componentRef}/>
  )}
</div>
          </div>
          <div className={open ? "preview__panel bg-black" : "preview__panel"}>
            <div className="preview_buttons">
              <button
                className="btn__secondary select"
                onClick={() => openTemplates()}
              >
                <i className={open ? "pi pi-times" : "pi pi-th-large"}></i>
                {open ? "Close" : "Select Template"}
              </button>
              <Colors />
              {open ? (
                <button
                  className="btn__secondary"
                  onClick={handlePrint}
                >
                  <i className="pi pi-download"></i>
                  Download
                </button>
              ) : (
                <button className="btn__secondary " onClick={() => openTemplates()}
                >
                  <i className="pi pi-eye"></i>
                  Preview
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className="overlay__templates">
          <div className="templates__main py-5">
            <div className="small__templaes">
            <Image 
            src="/assets/cv1.jpeg"
            width={100}
            height={100}
            className="cv__temp"
            onClick={() => handleClick('Template One')}
           />
            </div>
            <div className="small__templaes">
            <Image 
            src="/assets/template2.jpg"
            width={100}
            height={100}
            className="cv__temp"
            onClick={() => handleClick('Template Two')}
           />
            </div>
            <div className="small__templaes">
           <BsFillLockFill size={50} color='#fff' className='icons'/>
            </div>
            <div className="small__templaes">
           <BsFillLockFill size={50} color='#fff' className='icons'/>
            </div>
            <div className="small__templaes">
           <BsFillLockFill size={50} color='#fff' className='icons'/>
            </div>
            <div className="small__templaes">
            <BsFillLockFill size={50} color='#fff' className='icons'/>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
