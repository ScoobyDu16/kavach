import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window to the top on every route change.
 * Renders nothing — drop it once inside <Layout />.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'instant' skips the smooth-scroll animation so the page
    // just snaps to the top before the new content paints.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
