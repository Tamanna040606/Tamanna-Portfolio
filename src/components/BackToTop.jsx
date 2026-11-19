import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollable > 0
          ? (window.scrollY / scrollable) * 100
          : 0;

      setScrollProgress(progress);
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      style={{
        "--scroll-progress": `${scrollProgress}%`,
      }}
    >
      <svg className="progress-ring" viewBox="0 0 60 60">
        <circle
          className="progress-ring-bg"
          cx="30"
          cy="30"
          r="27"
        />
        <circle
          className="progress-ring-fill"
          cx="30"
          cy="30"
          r="27"
          style={{
            strokeDashoffset:
              169.65 - (169.65 * scrollProgress) / 100,
          }}
        />
      </svg>

      <ArrowUp size={22} />
    </button>
  );
}