import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group">
      {/* Emoji / image area */}
      <div className="h-40 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
        <span className="text-6xl leading-none select-none drop-shadow-sm">
          {getServiceEmoji(service.slug)}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">
            {service.name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Pricing + duration row */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="block text-xs text-gray-400 font-medium mb-0.5">Starting at</span>
            <span className="text-xl font-extrabold text-green-700">
              ₹{service.startingPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2.5 py-1.5 rounded-full border border-gray-100">
            <Clock size={12} />
            {service.duration}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/services/${service.slug}`}
          className="mt-1 flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-green-600 text-green-700 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all duration-200 group-hover:bg-green-600 group-hover:text-white"
        >
          View Details
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

function getServiceEmoji(slug: string): string {
  const map: Record<string, string> = {
    'bed-bug-control': '🛏️',
    'mosquito-control': '🦟',
    'cockroach-control': '🐜',
    'rodent-control': '🐀',
    'termite-control': '🐛',
    'lizard-control': '🦎',
    'commercial-pest-control': '🏢',
  };
  return map[slug] ?? '🐛';
}
