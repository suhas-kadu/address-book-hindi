import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLoationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLoationChange);

    return () => {
      window.removeEventListener("popstate", onLoationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
