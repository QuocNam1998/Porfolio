import { useNavigate } from "react-router-dom";

export const useHeaderItemHandler = (
  myCV: string,
  setActiveHeaderItem: (title: string) => void
) => {
  const navigate = useNavigate();

  return (item: any) => {
    const isResume = item.title === "Resume";
    if (isResume) {
      const link = document.createElement("a");
      link.href = myCV;
      link.download = "DANGQUOCNAM-FE-DEVELOPER.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setActiveHeaderItem(item.title);
    if (item.path) {
      navigate(item.path);
    }
  };
};
