import Image from "next/image";
import styles from "./page.module.css";

import example from "../resources/profileImage.jpeg";
import facebookIconGray from "../resources/icons/facebook.svg";
import whatsappIconGray from "../resources/icons/whatsapp.svg";
import twitterIconGray from "../resources/icons/twitter.svg";
import instagramIconGray from "../resources/icons/instagram.svg";
import mailIconBlue from "../resources/icons/mailIconBlue.svg";
import Link from "next/link";

export default async function CV() {
  return (
    <div className={styles.main}>
      <div id="presentation" className={styles.section}>
        
        <div className={styles.section_container}>
          <div className={`${styles.card_container} ${styles.presentation_card}`}>
          <Image src={example} alt="profile-image" className={styles.profile_image}/>
            <h1>Mario Cesar Gaytan Cruz</h1>
            <h2>Ingeniero en comunicaciones y electronicaa</h2>
            <p>
              I am a programmer and I have worked how backend and front end
              developer. I have knowledge about infraestructure due to my
              carrer. I am an eager self taught person. I have worked inside the
              professional software indsutry since 2018 and I continued learnig
              new technologies.
            </p>
          </div>
          <div className={`${styles.card_container} ${styles.presentation_card}`}>
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
          <div className={`${styles.card_container} ${styles.presentation_card}`}>
            <h1>Contact:</h1>

            <div>
              <Image src={facebookIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link
                href={"https://www.facebook.com/mario.gaytan.98"}
                target="_blank"
              >
                Facebook
              </Link>
            </div>
            <div>
              <Image src={whatsappIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link href={"https://wa.me/5514895574"} target="_blank">
                WhatsApp
              </Link>
            </div>
            <div>
              <Image src={twitterIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link href={"mailTo"} target="_blank">
                Twitter
              </Link>
            </div>
            <div>
              <Image src={instagramIconGray} alt="facebook-icon-gray"></Image>{" "}
              <Link
                href={"https://www.instagram.com/marioccm/"}
                target="_blank"
              >
                Instagram
              </Link>
            </div>
            <div>
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
      <h1>Professional Experience</h1>
        <div className={styles.section_container}>
          
          <div className={`${styles.card_container} ${styles.experience_card}`}>
            <h2>Fonyou</h2>
            <h3>Front-End Engineer</h3>
            <p>
              {" "}
              Activities: Maintenance of sites and create new features and
              proyects.
            </p>
            <p>From 18/10/2021 to the present day.</p>
          </div>
          <div className={`${styles.card_container} ${styles.experience_card}`}>
            <h2>Pleed Tech</h2>
            <h3>Front-End developer</h3>
            <p>
              {" "}
              Activities: Maintenance of a CRMSystem, creation of new systems
              which include dynamic components such as pipeline, all using react
              and redux for data persistence. Duration:
            </p>
            <p>From 16/10/2019 to to 15/10/2021..</p>
          </div>
          <div className={`${styles.card_container} ${styles.experience_card}`}>
            <h2>Alucina Studio</h2>
            <h3>Back-end developer and Front-End developer</h3>
            <p>
              Activities: Perform REST API services for web pages and
              Applications, creation of CMS on the laravel, fron-end development
              of hybrid applications in react-native. Using AWS creating EC2
              service, in which we mounted the entire back-end development
              environment.
            </p>
            <p>Duration: From 6/08/2018 to 15/10/2019.</p>
          </div>
          <div className={`${styles.card_container} ${styles.experience_card}`}>
            <h2>Redes y soporte en microcomputación</h2>
            <h3>Technical support and service desk</h3>
            <p>
              Activities: Perform on-site technical support to computer
              equipment and network cabling. Diagnosis of computer failures over
              the phone and project coordinator of DELL computer equipment.
            </p>
            <p>Duration: 4/09/2012 to 21/01/2014</p>
          </div>
        </div>
      </div>
      <div id="education" className={styles.section}>
        <h1>Vocational training </h1>
        <div className={styles.section_container}>
          <div className={styles.card_container}>
            <h2>Computer skills</h2>
            <ol>
              <li>Intermediate Microsoft Office handling</li>
            </ol>
          </div>

          <div className={styles.card_container}>
            <h2>Programming Paradigms</h2>
            <ol>
              <li>Structured programming. </li>
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
              <li>Principies Solid</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Programming Languages</h2>
            <ol>
              <li>Intermediate level in C++</li>
              <li> Basic level in Phyton</li>
              <li>Advanced level in Ensamblador</li>
              <li>Intermediate level in Java</li>
              <li>Basic level in Apex</li>
              <li>Advanced level in JavaScript</li>
              <li>Intermediate level in PHP</li>
              <li>Intermediate level in Swift</li>
              <li>Basic level in Kotlin</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Back End </h2>
            <ol>
              <li>Laravel</li>
              <li>Express</li>
              <li>Spring Boot Front</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Mobile Native Development</h2>
            <ol>
              <li> Handling of platforms Xcode and Android Studio.</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Runtime and Container Orchestrator</h2>
            <ol>
              <li>Docker</li>
              <li>kubernetes</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Databases</h2>
            <ol>
              <li>SQL: MySql</li>
              <li>NoSQL: Mongo and Firebase</li>
            </ol>
          </div>
          <div className={styles.card_container}>
            <h2>Front End</h2>
            <ol>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>React-native </li>
              <li>Vue js </li>
              <li>Next Js </li>
            </ol>
          </div>

          <div className={styles.card_container}>
            <h2>System Control Version</h2>
            <ol>
              <li>GIT</li>
            </ol>
          </div>

          <div className={styles.card_container}>
            <h2>Cloud Platfomrs</h2>
            <ol>
              <li>AWS: EC2 and S3 </li>
              <li>Basic handling of GCP </li>
            </ol>
          </div>

          <div className={styles.card_container}>
            <h2>CI/CD</h2>
            <ol>
              <li>Jenkins</li>
            </ol>
          </div>

          <div className={styles.card_container}>
            <h2>Networking</h2>
            <ol>
              <li>Handling the OSI and TCP/IP model</li>
              <li>Design of LAN, WAN and MAN networks.</li>
              <li>Subnetting</li>
              <li>VoIP</li>
            </ol>
          </div>
        </div>
      </div>{" "}
      {/**/}
    </div>
  );
}
