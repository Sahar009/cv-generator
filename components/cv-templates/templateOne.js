import React, { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import styles from './templateOne.module.css'
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";
import {FiAtSign, FiLink, FiLinkedin, FiPhone} from 'react-icons/fi';
import{FcCellPhone} from 'react-icons/fc';
import{FaUserGraduate} from 'react-icons/fa'
import{CiUser} from 'react-icons/ci';


import {GrLocation} from 'react-icons/fc'
import {BsFillBriefcaseFill, BsFillRecord2Fill, BsFillTelephoneFill, BsHouse} from 'react-icons/bs'
import{BiBuilding, BiBuildingHouse} from 'react-icons/bi'
import {HiPencilAlt } from 'react-icons/hi'
BiBuildingHouse
import { Calendar } from "react-feather";
AiFillMail
import {AiFillMail} from 'react-icons/ai'

const templateOne = React.forwardRef(({condition}, ref) => {
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
  const { pic, setPic } = useContext(AppContext);
  let safeHtml = DOMPurify.sanitize(summary[0]);

  const logo=(
    <HiPencilAlt 
                  style={{
                    backgroundColor: colors[0] ?? "#5695cd",
                    borderColor: colors[0] ?? "#5695cd",
                  }}/>
  )
  

//   useEffect(()=> {
//     setColumns([[projectSection, workExpSection],[
//       projectSection, workExpSection
//     ],
//   ]);
// },[]);
  return (
    <div ref={ref}
      className={
        condition ? "two-column resume" : " two-column resume adjustedPreview"
      }
    >
      {personal[0].map((value, index) => (
        
        <section className={styles.container} key={index}>
          
          <div className={styles.header}>
         
            <p className={styles.heading}>
              {value.firstName} {value.lastName}
            </p>
            {/* <p className={styles.subHeading}>jjjjj</p> */}
           <div className={styles.links}>
             
              {value.phone ? (
                <a className={styles.link} >
                  <BsFillTelephoneFill style={{color: colors[0] ?? '#5695cd'}}/>
                  {value.phone}
                </a>
              ) : (
                <span />
              )}
              {value.address ? (
                <a className={styles.link} >
                 <BsHouse  style={{color: colors[0] ?? '#5695cd'}}/>
                  {value.address} {value.city} {value.country}
                </a>
              ) : (
                <span />
                
              )}
             
             
          
           </div>
           
            </div>
           
            <div className={styles.col1}>
            
            <div className={`${styles.section} ${styles.project}`} >
            
            <div className={`${styles.sectionTitle}`} >
            Professional Summary    
               </div>
              <div className={styles.content}>
              <div className={styles.description}>
                  <div  dangerouslySetInnerHTML={{ __html: safeHtml }} />
                </div>
            </div>
          
                </div>
                </div> 
            
              <div className={styles.col1}>
              <div className={`${styles.section} ${styles.workExp}`}>
              
         
        
            <div className={`${styles.sectionTitle}`} >
               Education        
               </div>
              {education[0].map((value, index) => (
                <div className={styles.content}>
                <div className={styles.edsection} key={index}>
                  
                  <div className={styles.title}><FaUserGraduate className={styles.icon} style={{color: colors[0] ?? '#5695cd'}}/>
                    {value.school}
                    </div>
                          -
                    <div className={styles.degree}>{value.degree}</div>
                    
                    </div>
                  <div className={styles.date}
                  
                   style={{
                    color: colors[0] ?? "#5695cd",
                  }}>
                     <Calendar style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
                  {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                  </div> 
                </div>
              ))}
          
         
        
    </div>
              </div>
              
             
              <div className={styles.col1}>
                
              
                <div className={`${styles.section} ${styles.project}`}>
                   
                  <section className="resume__section resume__experience">
                  <div className={`${styles.sectionTitle}`} >
                    Employment History
                    </div>
                  
            
              
              {employment[0].map((value, index) => (
                <div className={styles.content}>
                <div className={styles.edsection} key={index}>
                   
 
                  <div className={styles.title}>
                  <BsFillBriefcaseFill  className={styles.icon} style={{color: colors[0] ?? '#5695cd'}}/>
                    {value.title}
                    
                    </div>
                    -
                    <div className={styles.degree}>{value.employer}</div>
                  
                  </div>
                  <div className={styles.date}
                  style={{
                    color: colors[0] ?? "#5695cd",
                  }}>
                     <Calendar style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
                  {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                  </div>
                  <div className={styles.description}>
                    <ul>
                      <li>{value.description}</li>
                    </ul>
                  </div>
                
                </div>
              ))}
            
          </section>
          </div>
          
          <div className={styles.col1}>
                      
            <div className="resume__content">
              
              {website[0].map((value, index) => (
                <div className="xp-item" key={index}>
                  <div className={styles.section}>
                  <div className={styles.sectionTitle}>
                      Websites & Social Links
                      </div>
                      
                  <div className={styles.extrainfo}>
                    {value.label}
                    <br />
                    
                    
                    <a
                      className={styles.labellink}
                      style={{color: colors[0] ?? '#5695cd'}}
                      href={value.link}


                      target="_blank"
                    >
                      <FiLink className={styles.icon}/>
                      {value.link}
                    </a>
                   
                  </div>
                </div>
                </div>
              ))}
            </div>
         
          
         
            <div className={styles.section}>
              <div className={`${styles.sectionTitle}`}>
                Skills
              </div>
              {skill[0].map((value, index) => (
                <div  key={index}>

                    <div className={styles.extrainfo1}>
                      {value.name}
                      </div>
                  </div>
                
              ))}
            </div>
          

            <div className={styles.section}>
            <div className={`${styles.sectionTitle}`} >
                 Hobbies     
               </div>
              
                <div className={styles.extrainfo1}>
                  <div>
                  {hobbies[0]
                ? (
                  
                  
                <div  >
                  {hobbies[0]}
                </div>
              ) : (
                <span />
              )}
                    {/* <BsFillRecord2Fill/>
                    {hobbies[0]} */}
                    
                  </div>
                </div>
            </div>
         

          
            <div className={styles.section}>
            <div className={`${styles.sectionTitle}`} >
               Languages      
               </div>
            
              {language[0].map((value, index) => (
                <div className="extra" key={index}>
                  
                  <div className={styles.extrainfo}>
                    {value.language}
                    <br></br>
                    <small>{value.level}</small>
                  </div>
                 
                </div>
              ))}
            </div>
           
          
          <div className={styles.col1}>
         
        
          <div className="resume__content">
 
 {reference[0].map((value, index) => (
     
     <div className="xp-item" key={index}>
       <div className={styles.section}>
      <div className={`${styles.sectionTitle}`} >
      Reference      
    </div>
    <div className={styles.extrainfo}>
       <p className={styles.links}>
         {value.name ? (
     <a className={styles.link} >
       <CiUser style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
       {value.name}
     </a>
   ) : (
     <span />
   )}
       </p>
       <small className={styles.links}>
       {value.comapny ? (
     <a className={styles.link} >
       <BiBuilding style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
       {value.comapny}
     </a>
   ) : (
     <span />
   )}
       </small>

       <small className={styles.links}>
       {value.phone ? (
     <a className={styles.link} >
       <BsFillTelephoneFill style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
       {value.phone}
     </a>
   ) : (
     <span />
   )}
       </small>
       <small className={styles.links}>
       {value.email ? (
     <a className={styles.link} >
       <AiFillMail style={{color: colors[0] ?? '#5695cd'}} className={styles.icon}/>
       {value.email}
     </a>
   ) : (
     <span />
   )}
       </small>
       </div>
      

       </div>
     </div>
   ))}
</div>
</div>
          

                </div>

                </div>
              

          </section>
          
  ))}
  
  </div>
)});


export default templateOne;
