import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.text};
}

html {
  font-size: 10px;

  @media (max-width: 700px) {
    font-size: 9px;
  }

  @media (max-width: 500px) {
    font-size: 8.5px;
  }

  @media (max-width: 300px) {
    font-size: 8px;
  }

  @media print {
    font-size: 10px;
  }

}

body {
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.globalBackground};
}

/* Styling the HeaderBar component */

header {
  box-shadow: 0 0 15px ${({ theme }) => theme.HeaderShaddow};
  background-color: ${({ theme }) => theme.elementsBackground};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 2;
}

.header-content {
  max-width: 1100px;
  height: 100%;
  margin: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content .resume-language > *:last-child {
  cursor: pointer;
}

.header-content .resume-language * {
  font-size: 1.5rem;
}

.header-content .resume-language label {
  font-weight: 700;
  margin-right: 0.4rem;
}

.header-content .resume-language select {
  padding: 0.5rem;
  background-color: transparent;
  outline: none;
  border: solid 1px ${({ theme }) => theme.text};
  border-radius: 4px;
}

.print-and-lightness {
  display: flex;
  gap: 2rem;
}

.print-and-lightness button {
  padding: 0 1rem;
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  border: solid 1px ${({ theme }) => theme.text};
  border-radius: 4px;
  cursor: pointer;
}

.lightness-mode {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  cursor: pointer;
  border-radius: 500px;
  background-color: ${({ theme }) => theme.invElementsBackground};
}

.lightness-mode * {
  font-size: 1.5rem;
  color: ${({ theme }) => theme.invText};
}

.lightness-mode:hover {
  opacity: 0.75;
}

.lightness-mode span {
  margin-left: 1rem;
}

/* Styling the ResumeTemplate1 component */

main {
  max-width: 1100px;
  margin: auto;
}

.main-content {
  padding: 6rem;
  margin: 7rem 2rem 2rem 2rem;
  box-shadow: 0 0 10px ${({ theme }) => theme.imgShaddow};
  background-color: ${({ theme }) => theme.elementsBackground};

  @media (max-width: 700px) {
    padding: 4rem 2rem 1rem 2rem;
  }

  @media print {
    padding: 8rem 4rem 4rem 4rem;
    margin: 0;
    box-shadow: none;
  }
}

/* Styling the Name component */

.name {
  text-align: center;

  @media print {
    break-inside: avoid;
  }
}
.name img {
  width: 100%;
  max-width: 20rem;
  border-radius: 1000px;
  box-shadow: 0 0 10px ${({ theme }) => theme.imgShaddow};
}
.name h1 {
  font-size: 3.3rem;
  padding: 0 1.5rem;
  margin: 2rem 0 3rem;
}

/* Styling the Contact component */

.contact {
  max-width: 700px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media print {
    break-inside: avoid;
  }
}

.contact > span {
  margin: 1rem;
  display: flex;
  align-items: center;
  width: fit-content;
}

.contact a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.contact a:hover * {
  color: ${({ theme }) => theme.hover};
}

.contact .icon {
  height: 2rem;
  width: 2rem;
}

.contact span span {
  margin-left: 1rem;
}

/* Styling the Profile component */

.profile,
.education,
.experiences,
.certificates,
.skills,
.projects,
.languages {
  margin: 5rem 0;

  @media print {
    break-inside: avoid;
  }
}

.profile h2,
.education h2,
.experiences h2,
.certificates h2,
.skills h2,
.projects h2,
.languages h2 {
  font-size: 2.1rem;
  width: fit-content;
  border-bottom: solid 0.4rem ${({ theme }) => theme.text};
  margin-bottom: 2rem;
}

.profile p,
.education .education-item,
.experiences p,
.certificates p,
.projects .project-item {
  margin: 1.5rem 0;
}

/* Styling the Education component */

.education-item .head,
.experience-item .head,
.certificate-item .head,
.project-item .head {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.diploma-establishment,
.experience-establishment,
.certificate-offeredBy,
.project-title {
  width: 600px;
  margin-right: 1rem;
}

.diploma-establishment h3,
.experience-establishment h3,
.certificate-offeredBy h3,
.project-title h3 {
  font-size: 1.9rem;
}

.diploma-establishment h3 a,
.experience-establishment h3 a,
.certificate-offeredBy h3 a,
.project-title h3 a {
  text-decoration: none;
}

.diploma-establishment h3 a:hover,
.experience-establishment h3 a:hover,
.certificate-offeredBy h3 a:hover,
.project-title h3 a:hover {
  color: ${({ theme }) => theme.hover};
}

.diploma-establishment h4,
.experience-establishment h4,
.certificate-offeredBy h4 {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 600;
}

.diploma-establishment h4 a,
.experience-establishment h4 a,
.certificate-offeredBy h4 a {
  text-decoration: none;
}

.diploma-establishment h4 a:hover,
.experience-establishment h4 a:hover,
.certificate-offeredBy h4 a:hover {
  color: ${({ theme }) => theme.hover};
}

.date-address {
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.6;
}

.education-item .content {
  margin-top: 1.5rem;
}

.education-item .content strong {
  font-weight: 600;
}

.mension {
  margin-bottom: 1rem;
}

.modules li,
.skills li {
  margin: 1rem 0 0 3rem;
}

/* Styling Skills component */

.skill,
.tool {
  margin: 0.2rem;
}

.skill > *,
.tool > *,
.language > * {
  font-size: 1.2rem;
  border: solid 1.5px ${({ theme }) => theme.text};
  border-radius: 6px;
  padding: 0.1rem 1rem;
  display: inline-block;
}

.skill > a,
.tool > a,
.language > a {
  text-decoration: none;
}

.skill > a:hover,
.tool > a:hover,
.language > a:hover {
  background-color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.elementsBackground};
}

/* Styling Languages component */

.languages-content {
  margin-top: 3rem;
}

.language {
  margin: 1rem;
}

.language > * {
  font-size: 1.5rem;
}

a {
  position: relative;
}

a::after{
  content: "";
  background-image: url("data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 15 15'><g fill='${({ theme }) => theme.text}'><path d='M9 .75A.75.75 0 019.75 0h4.5c.206 0 .393.083.529.218l.001.002.002.001A.748.748 0 0115 .75v4.5a.75.75 0 01-1.5 0V2.56L7.28 8.78a.75.75 0 01-1.06-1.06l6.22-6.22H9.75A.75.75 0 019 .75z' /><path d='M3.25 3.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0110.75 14h-7.5A2.25 2.25 0 011 11.75v-7.5A2.25 2.25 0 013.25 2h4a.75.75 0 010 1.5h-4z' /></g></svg>");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: inline-block;
  height: 0.7rem;
  width: 0.7rem;
  transform: translate(30%,-70%);
}
`;

export default GlobalStyles;
