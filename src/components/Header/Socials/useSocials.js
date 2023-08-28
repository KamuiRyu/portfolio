import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const useSocials = () => {
  const socialsData = [
    { name: "linkedin", path: "https://www.linkedin.com/", icon: <IconBrandLinkedin /> },
    { name: "github", path: "https://github.com/", icon: <IconBrandGithub /> },
  ];
  return { socialsData };
};

export default useSocials;
