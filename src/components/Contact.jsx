import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

function Contact({
  contactInfos: { address, phone, email, github, linkedin },
}) {
  return (
    <article className="contact">
      {email && (
        <span>
          <HiMail className="icon" />
          <span>{email}</span>
        </span>
      )}
      {phone && (
        <span>
          <RiPhoneFill className="icon" />
          <span>{phone}</span>
        </span>
      )}
      {address && (
        <span>
          <MdLocationOn className="icon" />
          <span>{address}</span>
        </span>
      )}
      {github && (
        <span>
          <a href={github.link} target="_blanc">
            <FaGithub className="icon" />
            <span>{github.userName}</span>
          </a>
        </span>
      )}
      {linkedin && (
        <span>
          <a href={linkedin.link} target="_blanc">
            <FaLinkedin className="icon" />
            <span>{linkedin.userName}</span>
          </a>
        </span>
      )}
    </article>
  );
}

export default Contact;
