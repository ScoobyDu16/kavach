import { Helmet } from 'react-helmet-async';
import { SITE_URL, COMPANY_NAME } from '@/constants';

interface SEOProps {
  title: string;               // page-specific title (no suffix needed)
  description: string;
  canonical?: string;          // path e.g. '/services'
  ogImage?: string;            // absolute URL to OG image
  noIndex?: boolean;
  structuredData?: object;     // JSON-LD object
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | ${COMPANY_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD ── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
