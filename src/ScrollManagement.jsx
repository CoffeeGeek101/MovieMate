import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollRestoration({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setScrollPosition(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    const unlisten = navigate.subscribe(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [navigate]);

  useEffect(() => {
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 10);
    }
  }, [scrollPosition]);

  return children;
}

export default ScrollRestoration;