import Image from "next/image";
import styles from "./page.module.css";

import example from "../resources/profileImage.jpeg";
import facebookIconGray from "../resources/icons/facebook.svg";
import whatsappIconGray from "../resources/icons/whatsapp.svg";
import twitterIconGray from "../resources/icons/twitter.svg";
import instagramIconGray from "../resources/icons/instagram.svg";
import mailIconBlue from "../resources/icons/mailIconBlue.svg";
import Link from "next/link";
import CustomSlider from "../components/CustomSlider/CustomSlider";
import { jobs, jobTitle } from "../utils/JobCardConstants";
import JobCard from "../components/JobCard/JobCard";
import {
  technologies,
  vocationalTrainingTitle,
} from "../utils/VocationalTrainingCardConstants";
import VocationalTrainingCard from "../components/VocationalTrainingCard/VocationalTrainingCard";

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
            <h1>Mario Cesar Gaytan Cruz</h1>
            <h2>Engineer in Communications and Electronics</h2>
            <p>
              I am a programmer and I have worked how backend and front end
              developer. I have knowledge about infraestructure due to my
              carrer. I am an eager self taught person. I have worked inside the
              professional software indsutry since 2018 and I continued learnig
              new technologies.
            </p>
          </div>
          <div className={` ${styles.presentation_card}`}>
            <h1>Academic training:</h1>
            <div>
              <h2>2014 ESIME IPN</h2>
              <p>Career: Communications and Electronics Engineering</p>
              <p>Major in comunications</p>
              <p>Bachelor degree</p>
            </div>
            <div>
              <h2> 2009 - 2011 High School Colegio de Bachilleres 06 </h2>
              <p>Major in Computer Science</p>
              <p>High school certificate</p>
            </div>
          </div>
          <div className={` ${styles.presentation_card}`}>
            <h1>Contact:</h1>

            <div className={styles.item_contact}>
              <Image src={facebookIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link
                href={"https://www.facebook.com/mario.gaytan.98"}
                target="_blank"
              >
                Facebook
              </Link>
            </div>
            <div className={styles.item_contact}>
              <Image src={whatsappIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link href={"https://wa.me/5514895574"} target="_blank">
                WhatsApp
              </Link>
            </div>
            <div className={styles.item_contact}>
              <Image src={twitterIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link href={"mailTo"} target="_blank">
                Twitter
              </Link>
            </div>
            <div className={styles.item_contact}>
              <Image src={instagramIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link
                href={"https://www.instagram.com/marioccm/"}
                target="_blank"
              >
                Instagram
              </Link>
            </div>
            <div className={styles.item_contact}>
              {" "}
              <Image src={mailIconBlue} alt="facebook-icon-gray"></Image>{" "}
              <Link href={"mailto:mariocgc@icloud.com"} target="_blank">
                mariocgc@icloud.com
              </Link>
            </div>
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
