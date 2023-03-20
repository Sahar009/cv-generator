import React,  { useContext } from "react";
import AppContext from "../../context/AppContext";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";
import {ImLocation2} from 'react-icons/im'
import {IoIosCall} from 'react-icons/io'
import {MdAttachEmail} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import { HiHome } from "react-icons/hi";
import { BiBuilding, BiCalendar } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";


const templateTwo = React.forwardRef(({ condition }, ref) => {
  const { employment, setEmployment } = useContext(AppContext);
  const { summary, setSummary } = useContext(AppContext);
  const { personal, setPersonal } = useContext(AppContext);
  const { hobbies, setHobbbies } = useContext(AppContext);
  const { website, setWebsite } = useContext(AppContext);
  const { colors, setColors } = useContext(AppContext);
  const { language, setLanguage } = useContext(AppContext);
  const { skill, setSkill } = useContext(AppContext);
  const { education, setEducation } = useContext(AppContext);
  const { reference, setReference } = useContext(AppContext);
  let safeHtml = DOMPurify.sanitize(summary[0]);
  return (
    <div ref={ref}
     className={
      condition ? "two-column resume" : " two-column resume adjustedPreview"
    }>
    {personal[0].map((value, index) => (
    <div ref={ref} className="container">
        
      <div className="left_Side" style={{backgroundColor: colors[0] ?? '#5695cd'}}>
      <div className="imgBx">
                
      <img src='photo' alt="Profile" type="file" onChange={(event) => handleImage(event)} />
      
              </div>
              <div className='section3'>
      <div className='profile'>
        
      <div className='profiles'>
        
        <div className='nameWork'>
    
          <h1 className='name'>{value.firstName}</h1>
          <h1 className='name'>{value.lastName}</h1>
          <h5 className='name'>{value.title}</h5>
        </div>
        <div className='education'>
          <h3>education</h3>
        <hr/>
        {education[0].map((value, index) => (
          <>
          <h2>{value.degree}</h2>
          <p>{value.school}</p>
          <h6 className="date"> {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
           - {moment(value.endDate).format("MMMM YYYY")}</h6>
           <p>{value.city}</p>
          </>
          ))}
        </div>
        
        <div className='hobbies'>
        <h3> SKILLS</h3>
        <hr/>
        {skill[0].map((value, index) => (
          
        <p>{value.name}</p>
        
    
    ))}
         
        </div>
        <div className="languages">
        <h3>Languages</h3>
        <hr/>
        {language[0].map((value, index) => (
                <div  key={index}>
                    <p>{value.language}</p>
                    <br></br>
                    <small>{value.level}</small>
                 
                </div>
              ))}
        
      </div>
      </div>
      
    
 
    </div>

      
    </div>
   
      </div>
      
            <div className="body">
            
            
    <div className='objective'>
    
      <h1>OBJECTIVE</h1> 
      <hr/>
      <p dangerouslySetInnerHTML={{ __html: safeHtml }} >
      
     
     </p>
    
    </div>
    
    

    <div className='section2'>
    
    <div className='section2s'>
    
    <div className='add'>
    <HiHome className="icons" style={{color: colors[0] ?? '#5695cd'}}/>
    <p>{value.address}</p>
   
    </div>
    
 
    <div className='tel'>
    <IoIosCall className='icons' style={{color: colors[0] ?? '#5695cd'}}/>
    <p>{value.phone}</p>
    </div>

    <div className='email'>
    <MdAttachEmail className='icons' style={{color: colors[0] ?? '#5695cd'}} />
    <p>{value.email}</p>
    </div>

    <div className='web'>
    <TbWorld className='icons'style={{color: colors[0] ?? '#5695cd'}}/>
    <p>{value.country}</p>
    </div>
    </div>
    </div>
    <div className="section4">
    <div className='employment'>
        <h1>Employment History</h1>
        <hr/>
        {employment[0].map((value, index) => (
          <div>
            <h2>{value.title}</h2>
            <h3>{value.employer}</h3>
            <h3>{value.city}</h3>
        <div className='date'
                  style={{
                    color: colors[0] ?? "#5695cd",
                  }}>
                     <BiCalendar style={{color: colors[0] ?? '#5695cd'}} />
                  {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                  </div>
                  <div className='description'>
                  <p>{value.description}</p>
                  </div>
                  </div>
                  ))}
                  
      </div>
      <div className='skills'>
    <h1>HOBBIES</h1>
        <hr/>
        <p className='hr'>{hobbies[0]}</p>
        
        
      </div>
      <div className='skills'>
      
    <h1>Reference</h1>
        <hr/>
       <div>
        {reference.map((value, index)=>{
          <div key={index}>
          <p className='hr'>  {value.name ? (
                <a className='link' >
                  
                  {console.log(value.name)}
                </a>
              ) : (
                <span />
              )}</p>
          <p>{value.comapny}</p>
          </div>
        })}
       </div>
      
      </div>
    
      </div>

    
    </div>
    
        
   
      
      </div>
      ))}
      </div>
  

      
  );
  
});

export default templateTwo;
