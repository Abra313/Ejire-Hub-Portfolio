import { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setDeferredPrompt(null);
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      className="bg-primary text-white px-4 py-2 rounded flex items-center"
    >
      {/* Font Awesome Install Icon */}
      <i className="fas fa-download mr-2"></i>
      Install App
    </button>
  );
};

export default InstallPrompt;
