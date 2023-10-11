import { SITE } from "@config";

const getProjectPageNumbers = (numberOfProjects: number) => {
  const projectsPerPage = Number(SITE.projectsPerPage); // Use your projectsPerPage configuration

  const numberOfPages = numberOfProjects / projectsPerPage;

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export default getProjectPageNumbers;
