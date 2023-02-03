import { useEffect } from "react";

export default function BackToTopButton() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const button = document.querySelector(".back-to-top-button");

      if (window.pageYOffset > 10) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="back-to-top-button fixed bottom-4 right-4 bg-[#dc143c] text-white rounded-full p-2 hidden"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
