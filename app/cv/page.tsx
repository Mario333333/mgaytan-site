import Image from "next/image";
import styles from "./page.module.css";

import example from "../resources/profileImage.jpeg";
import Link from "next/link";
import CustomSlider from "../components/CustomSlider/CustomSlider";
import { jobs, jobTitle } from "../utils/JobCardConstants";
import JobCard from "../components/JobCard/JobCard";
import {
  technologies,
  vocationalTrainingTitle,
} from "../utils/VocationalTrainingCardConstants";
import VocationalTrainingCard from "../components/VocationalTrainingCard/VocationalTrainingCard";
import {
  academicTraining,
  resume,
  contact,
} from "../utils/personalInformationConstants";

export default async function CV() {
  return (
    <div className={styles.main}>
      <div id="presentation" className={styles.section}>
        <div className={styles.section_container}>
          <Image
            src={example}
            alt="profile-image"
            className={styles.profile_image}
          />
          <div className={` ${styles.presentation_card}`}>
            <h1>{resume.name}</h1>
            <h2>{resume.career}</h2>
            <p>{resume.description}</p>
          </div>
          <div className={` ${styles.presentation_card}`}>
            <h1>{academicTraining.title}</h1>

            {academicTraining.items.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                {item.description.map((subItem, index) => (
                  <p key={index}>{subItem}</p>
                ))}
              </div>
            ))}
          </div>
          <div className={` ${styles.presentation_card}`}>
            <h1>Contact</h1>

            {contact.items.map((item, index) => (
              <div key={index} className={styles.item_contact}>
                <Image src={item.icon} alt={item.alt}></Image>
                <Link href={item.link} target="_blank">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="work_experience" className={styles.section}>
        <div className={styles.cards_section}>
          <h1>{jobTitle}</h1>

          <CustomSlider>
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.company}
                description={job.position}
                activities={job.activities}
                duration={job.duration}
              ></JobCard>
            ))}
          </CustomSlider>
        </div>
      </div>
      <div id="education" className={styles.section}>
        <div className={styles.cards_section}>
          <h1>{vocationalTrainingTitle}</h1>
          <CustomSlider>
            {technologies.map((technology, index) => (
              <VocationalTrainingCard
                key={index}
                title={technology.title}
                developmentSkils={technology.developmentSkils}
              ></VocationalTrainingCard>
            ))}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
}
