import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AboutMe from "./components/AboutMe";
import ListedSkills from "./components/ListedSkills";
import ContactForm from "./components/ContactForm";
import Experiences from "./components/Experiences";
import Instroduction from "./components/Instroduction";
import { useRevealOnScroll, useScrollToTop } from "@/hooks";

export interface emailForm {
  name: string;
  email: string;
  content: string;
}
export const Home = () => {
  useRevealOnScroll();
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <div className="container dark:text-purple-400 text-green-400">
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          ⬆️
        </button>
      )}

      <div className="grid grid-cols-12 gap-4">
        <Instroduction />
        <AboutMe />
        <Experiences />
        <ListedSkills />
        <ContactForm />
      </div>
    </div>
  );
};
