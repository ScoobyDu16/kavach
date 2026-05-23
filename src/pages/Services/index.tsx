import { useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '@/components/common/SEO';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { services } from '@/data/services';

type Category = 'all' | 'residential' | 'commercial';

export default function Services() {
  const [category, setCategory] = useState<Category>('all');
  const [query, setQuery] = useState('');

  const filtered = services.filter((s) => {
    const matchesCategory = category === 'all' || s.category === category;
    const matchesQuery =
      query === '' ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <SEO
        title="All Pest Control Services"
        description="Browse all pest control services offered by Kavach in Gwalior — bed bug control, mosquito control, cockroach control, rodent control, termite treatment, lizard control, and commercial pest management."
        canonical="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="All Services"
          title="Find the Right Treatment"
          subtitle="Browse all our pest control solutions for homes and businesses."
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services (e.g. mosquito, termite)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'residential', 'commercial'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-colors ${
                  category === cat
                    ? 'bg-green-600 text-white'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-green-500 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No services found. Try a different search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
