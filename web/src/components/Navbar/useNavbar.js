import {
    IconBriefcase,
    IconDevices,
    IconHome,
    IconNotes,
    IconUser,
  } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
  
  const useNavbar = () => {
    const navData = [
      { name: "home", path: "/", icon: <IconHome /> },
      { name: "about", path: "/about", icon: <IconUser /> },
      { name: "skills", path: "/skills", icon: <IconNotes /> },
      {
        name: "jobs",
        path: "/jobs",
        icon: <IconBriefcase />,
      },
      {
        name: "projects",
        path: "/projects",
        icon: <IconDevices />,
      },
    ];
    const pathname = usePathname();
    return {
      navData,
      pathname
    };
  };
  
  export default useNavbar;
  