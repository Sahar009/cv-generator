import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";

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
  return (
    <div ref={ref}
      className={
        condition ? "two-column resume" : " two-column resume adjustedPreview"
      }
    >
      {personal[0].map((value, index) => (
        <section className="resume__section resume__header" key={index}>
          <div className="resume__content">
            <h1>
              {value.firstName} {value.lastName}
            </h1>
            <div className="info-item">
              <span className="info-label">
                <i className="pi pi-map"
                style={{color: colors[0] ?? '#5695cd'}}></i>
              </span>
              <span className="info-text">{value.address}</span>
            </div>
            <div className="info-item">
              <span className="info-label">
                <i className="pi pi-envelope"
               style={{color: colors[0] ?? '#5695cd'}}></i>
              </span>
              <span className="info-text">{value.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">
                <i className="pi pi-phone"
               style={{color: colors[0] ?? '#5695cd'}}></i>
              </span>
              <span className="info-text">{value.phone}</span>
            </div>
          </div>
        </section>
      ))}
      <div className="resume__columns">
        <div className="resume__main">
          <section className="resume__section resume__summary">
            <div className="resume__content">
              <div className="resume__section-title">
                <i
                  className="pi pi-pencil"
                  style={{
                    backgroundColor: colors[0] ?? "#5695cd",
                    borderColor: colors[0] ?? "#5695cd",
                  }}
                ></i>
                <h2 className="title">Professional Summary</h2>
              </div>
              <div className="other">
                <div className="other-info">
                  <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
                </div>
              </div>
            </div>
          </section>
          <section className="resume__section resume__experience">
            <div className="resume__content">
              <div className="resume__section-title">
                <i className="pi pi-briefcase"
               style={{backgroundColor: colors[0] ?? '#5695cd', borderColor: colors[0] ?? '#5695cd'}}></i>
                <h2 className="title">Education</h2>
              </div>
              {education[0].map((value, index) => (
                <div className="xp-item" key={index}>
                  <div className="xp-job">
                    {value.school}
                    <br />
                    <span>{value.degree}</span>
                  </div>
                  <div className="xp-date"
                   style={{
                    color: colors[0] ?? "#5695cd",
                  }}>
                  {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                  </div>
                  <div className="xp-detail">
                    <ul>
                      <li>{value.description}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="resume__section resume__experience">
            <div className="resume__content">
              <div className="resume__section-title">
                <i
                  className="pi pi-building"
                  style={{
                    backgroundColor: colors[0] ?? "#5695cd",
                    borderColor: colors[0] ?? "#5695cd",
                  }}
                ></i>
                <h2 className="title">Employment History</h2>
              </div>
              {employment[0].map((value, index) => (
                <div className="xp-item" key={index}>
                  <div className="xp-job">
                    {value.title}
                    <br />
                    <span>{value.employer}</span>
                  </div>
                  <div className="xp-date" 
                  style={{
                    color: colors[0] ?? "#5695cd",
                  }}>
                  {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                  </div>
                  <div className="xp-detail">
                    <ul>
                      <li>{value.description}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="resume__section resume__experience">
            <div className="resume__content">
              <div className="resume__section-title">
                <i className="pi pi-link"
               style={{backgroundColor: colors[0] ?? '#5695cd', borderColor: colors[0] ?? '#5695cd'}}></i>
                <h2 className="title">Socials and Links</h2>
              </div>
              {website[0].map((value, index) => (
                <div className="xp-item" key={index}>
                  <div className="xp-job">
                    {value.label}
                    <br />
                    <a
                      className="social__link"
                      href={value.link}
                      target="_blank"
                    >
                      {value.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume__section resume__summary">
            <div className="resume__content">
              <div className="resume__section-title">
                <i
                  className="pi pi-qrcode"
                  style={{
                    backgroundColor: colors[0] ?? "#5695cd",
                    borderColor: colors[0] ?? "#5695cd",
                  }}
                ></i>
                <h2 className="title">Hobby</h2>
              </div>
              <div className="other">
                <div className="other-info">
                  <div>
                    {hobbies[0]}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="resume__side">
          <section className="resume__section resume__skills">
            <div className="resume__content">
              <div className="resume__section-title">
                <i className="pi pi-align-center"
               style={{backgroundColor: colors[0] ?? '#5695cd', borderColor: colors[0] ?? '#5695cd'}}></i>
                <h2>Skills</h2>
              </div>
              {skill[0].map((value, index) => (
                <div className="resume__text" key={index}>
                  <div className="extra">
                    <div className="extra-info">{value.name}</div>
                    <div className="extra-details">
                      <div
                        className="extra-details__progress"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="resume__section resume__languages">
            <div className="resume__content">
              <div className="resume__section-title">
                <i className="pi pi-globe"
                style={{backgroundColor: colors[0] ?? '#5695cd', borderColor: colors[0] ?? '#5695cd'}}></i>
                <h2 className="title">Languages</h2>
              </div>
              {language[0].map((value, index) => (
                <div className="extra" key={index}>
                  <div className="extra-info">
                    {value.language}
                    <br></br>
                    <small>{value.level}</small>
                  </div>
                  <div className="extra-details">
                    <div
                      className="extra-details__progress"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      
      </div>
    </div>
  );
})

export default templateOne
