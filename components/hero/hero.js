import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function hero() {
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="hero__subtitle">Online resume builder</div>
        <h1 className="hero__title">
        To be among the top 2%, ensure your resume passes the initial review, as only 2% of resumes do.
        </h1>
        <div className="hero__text">
        Improve your resume with templates that have been proven to meet industry standards and are quick and simple to customize. Try them now for free.
        </div>
        <Link className="btn__primary" href="/generator">
            Create My Resume
          </Link>

      </div>
        <div className="resume__img">
           <Image 
            src="/assets/resume.png"
            width={1000}
            height={1000}
           />
        </div>
    </div>
  );
}
