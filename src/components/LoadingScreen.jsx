import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loader-content">

        <div className="loader-logo">
          T<span>.</span>
        </div>

        <h2>
          Tamanna<span>.</span>
        </h2>

        <p>CREATIVE DEVELOPER · AI/ML ENTHUSIAST</p>

        <div className="loader-track">
          <div className="loader-progress"></div>
        </div>

        <span className="loader-caption">
          Preparing your experience...
        </span>

      </div>
    </div>
  );
}