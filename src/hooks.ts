import { useEffect, useState } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".instroduction, .about-me, .listed-skills, .contact-form, .experiences"
    );
    // console.log(">>> elements in DOM:", elements);

    if (elements.length === 0) {
      console.warn("No elements found for reveal animation!");
      return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        // console.log(">>> Entry observed:", entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // console.log(`>>> Added active class to:`, entry.target);

          // Stop observing the element after it is revealed
          observerInstance.unobserve(entry.target);
        }
      });
    }, {});

    elements.forEach((el) => observer.observe(el));

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);
}

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button if scrolled down 200px
      setIsVisible(window.scrollY > 200);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { isVisible, scrollToTop };
}
