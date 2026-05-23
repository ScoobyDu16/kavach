import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { enquirySchema, type EnquiryFormData } from '@/schemas/enquiry';
import { buildEnquiryMessage, openWhatsApp } from '@/utils/whatsapp';
import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  WHATSAPP_NUMBER,
  GOOGLE_MAPS_EMBED_URL,
  COMPANY_NAME,
} from '@/constants';
import { services } from '@/data/services';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: EnquiryFormData) => {
    const msg = buildEnquiryMessage({
      name: data.name,
      phone: data.phone,
      address: data.address,
      service: data.service,
      propertyType: data.propertyType,
      plan: data.plan,
      preferredTime: data.preferredTime,
      issue: data.issue,
    });
    openWhatsApp(msg);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-green-100 text-lg">Reach us on WhatsApp for the fastest response.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase">Phone</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-gray-800 font-semibold hover:text-green-600">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-800 font-semibold hover:text-green-600"
                    >
                      Chat with us
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-gray-800 font-semibold hover:text-green-600">
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase">Address</p>
                    <p className="text-gray-800 font-semibold">{ADDRESS}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps */}
            {GOOGLE_MAPS_EMBED_URL ? (
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${COMPANY_NAME} location`}
                />
              </div>
            ) : (
              <div className="rounded-2xl bg-gray-100 h-48 flex items-center justify-center text-gray-400 text-sm">
                Google Maps embed will appear here
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot */}
                <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      {...register('name')}
                      placeholder="Your name"
                      onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, ''); }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10); }}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select
                      {...register('propertyType')}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      <option value="">Select type</option>
                      {['1 BHK', '2 BHK', '3 BHK', 'Villa / Bungalow', 'Office', 'Other'].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    >
                      <option value="">Select time</option>
                      {['Morning (8–12)', 'Afternoon (12–4)', 'Evening (4–8)'].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input
                    {...register('address')}
                    placeholder="Your full address"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe the Issue</label>
                  <textarea
                    {...register('issue')}
                    rows={3}
                    placeholder="E.g. bed bugs in bedroom, cockroaches in kitchen..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-full font-bold hover:bg-green-700 transition-colors disabled:opacity-60"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  This will open WhatsApp with your enquiry pre-filled. No data is stored on our servers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
