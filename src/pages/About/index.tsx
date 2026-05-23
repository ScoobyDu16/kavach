import { ShieldCheck, Leaf, Award, Users } from 'lucide-react';
import { COMPANY_NAME, CITY } from '@/constants';
import ContactCTA from '@/components/home/ContactCTA';

const values = [
  { icon: ShieldCheck, title: 'Safety First', description: 'Every chemical we use is government-approved and tested safe for families and pets.' },
  { icon: Leaf, title: 'Eco-Conscious', description: 'We prefer water-based, low-toxicity formulations that minimise environmental impact.' },
  { icon: Award, title: 'Certified Experts', description: 'All technicians hold valid pest control operator licences and undergo ongoing training.' },
  { icon: Users, title: 'Customer Focused', description: '30-day warranty and free re-treatments. We’re not done until you’re satisfied.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/logo.png" alt={COMPANY_NAME} className="h-24 w-auto object-contain mx-auto mb-4 drop-shadow-xl" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About {COMPANY_NAME}</h1>
          <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Serving homeowners and businesses in {CITY} with safe, effective, and affordable pest control solutions since 2014.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">A Decade of Protecting Homes</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {COMPANY_NAME} was founded with a simple mission: to make pest control accessible, safe, and stress-free for every household and business. What started as a small local operation has grown into a trusted name across {CITY}.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over 10 years and 5,000+ successful treatments later, we continue to invest in certified training, eco-friendly products, and same-day service to stay ahead for our customers.
            </p>
          </div>
          <div className="bg-green-50 rounded-3xl p-8 grid grid-cols-2 gap-6 text-center">
            {[
              { value: '10+', label: 'Years in Business' },
              { value: '5000+', label: 'Treatments Done' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '30 Day', label: 'Warranty' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-green-700">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="bg-green-700 rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
            To provide every home and business with a pest-free environment using safe, certified, and environmentally responsible methods — delivered by trained professionals who care.
          </p>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Certifications &amp; Compliance</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-6">
            We are fully compliant with India's Insecticide Act 1968 and provide pest control certificates accepted for FSSAI, municipal, and hotel audits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Central Insecticides Board Approved', 'FSSAI Compliant Certificates', 'Municipal Audit Ready', 'ISO Quality Standards'].map((cert) => (
              <span key={cert} className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ {cert}
              </span>
            ))}
          </div>
        </section>
      </div>

      <ContactCTA />
    </>
  );
}
