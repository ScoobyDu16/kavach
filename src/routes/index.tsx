import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetails = lazy(() => import('@/pages/ServiceDetails'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const CommercialEnquiry = lazy(() => import('@/pages/CommercialEnquiry'));

function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <img
        src="/logo.png"
        alt="Loading…"
        className="w-28 h-28 object-contain animate-pulse"
      />
      <span className="text-sm text-gray-400 tracking-widest uppercase animate-pulse">
        Loading…
      </span>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: 'services', element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
      { path: 'services/:slug', element: <Suspense fallback={<PageLoader />}><ServiceDetails /></Suspense> },
      { path: 'about', element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
      { path: 'commercial-enquiry', element: <Suspense fallback={<PageLoader />}><CommercialEnquiry /></Suspense> },
    ],
  },
]);
