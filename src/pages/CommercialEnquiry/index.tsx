import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageCircle, CheckCircle } from 'lucide-react';
import {
  commercialStep1Schema,
  commercialStep2Schema,
  type CommercialStep1Data,
  type CommercialStep2Data,
} from '@/schemas/enquiry';
import { buildCommercialMessage, openWhatsApp } from '@/utils/whatsapp';

const SERVICE_TYPES = [
  'General Pest Control',
  'Cockroach Control',
  'Rodent Control',
  'Termite Control',
  'Mosquito Control',
  'Bed Bug Control',
  'Comprehensive AMC',
];

const BUSINESS_TYPES = [
  'Office',
  'Restaurant',
  'Hotel',
  'Hospital',
  'Warehouse',
  'Factory',
  'School',
  'Retail Store',
];

const AREA_SIZES = ['Up to 500 sq ft', '500–1000 sq ft', '1000–2000 sq ft', '2000–5000 sq ft', '5000+ sq ft'];
const TIME_SLOTS = ['Morning (8–12)', 'Afternoon (12–4)', 'Evening (4–8)', 'Night (After 9 PM)'];

const STEPS = ['Service Requirements', 'Contact Details', 'Review & Submit'];

export default function CommercialEnquiry() {
  const [step, setStep] = useState(0);
  const [step1Data, setStep1Data] = useState<CommercialStep1Data | null>(null);

  const form1 = useForm<CommercialStep1Data>({ resolver: zodResolver(commercialStep1Schema), mode: 'onTouched' });
  const form2 = useForm<CommercialStep2Data>({ resolver: zodResolver(commercialStep2Schema), mode: 'onTouched' });

  const onStep1Submit = (data: CommercialStep1Data) => {
    setStep1Data(data);
    setStep(1);
  };

  const onStep2Submit = (_data: CommercialStep2Data) => {
    setStep(2);
  };

  const handleFinalSubmit = () => {
    if (!step1Data) return;
    const s2 = form2.getValues();
    const msg = buildCommercialMessage({ ...step1Data, ...s2 });
    openWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-3xl">🏢</span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Commercial Enquiry</h1>
          <p className="text-gray-500 mt-2">Get a tailored pest control plan for your business.</p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((label, i) => (
            <div key={label} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i < step
                    ? 'bg-green-600 text-white'
                    : i === step
                    ? 'bg-green-600 text-white ring-4 ring-green-100'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {i < step ? <CheckCircle size={16} /> : i + 1}
              </div>
              <p className={`text-xs mt-1 text-center hidden sm:block ${i <= step ? 'text-green-700 font-medium' : 'text-gray-400'}`}>
                {label}
              </p>
              {i < STEPS.length - 1 && (
                <div className="absolute" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          {/* Step 1 */}
          {step === 0 && (
            <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Step 1 — Service Requirements</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                <select {...form1.register('serviceType')} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option value="">Select service type</option>
                  {SERVICE_TYPES.map((s) => <option key={s}>{s}</option>)}
                </select>
                {form1.formState.errors.serviceType && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.serviceType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type *</label>
                <select {...form1.register('businessType')} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map((b) => <option key={b}>{b}</option>)}
                </select>
                {form1.formState.errors.businessType && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.businessType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Area Size *</label>
                <select {...form1.register('areaSize')} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option value="">Select area size</option>
                  {AREA_SIZES.map((a) => <option key={a}>{a}</option>)}
                </select>
                {form1.formState.errors.areaSize && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.areaSize.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Infestation Severity *</label>
                <div className="flex gap-3">
                  {(['Low', 'Medium', 'Severe'] as const).map((level) => (
                    <label key={level} className="flex-1 cursor-pointer">
                      <input type="radio" value={level} {...form1.register('severity')} className="sr-only peer" />
                      <div className="text-center py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:border-green-400 hover:bg-green-50 hover:text-green-700 peer-checked:border-green-600 peer-checked:bg-green-50 peer-checked:text-green-700 transition-colors">
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
                {form1.formState.errors.severity && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.severity.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plan Type *</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {(['One-Time Service', 'Annual Maintenance Contract'] as const).map((plan) => (
                    <label key={plan} className="flex-1 cursor-pointer">
                      <input type="radio" value={plan} {...form1.register('planType')} className="sr-only peer" />
                      <div className="text-center py-2.5 px-3 rounded-xl border border-gray-200 text-sm font-medium hover:border-green-400 hover:bg-green-50 hover:text-green-700 peer-checked:border-green-600 peer-checked:bg-green-50 peer-checked:text-green-700 transition-colors">
                        {plan}
                      </div>
                    </label>
                  ))}
                </div>
                {form1.formState.errors.planType && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.planType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  {...form1.register('preferredDate')}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {form1.formState.errors.preferredDate && <p className="text-red-500 text-xs mt-1">{form1.formState.errors.preferredDate.message}</p>}
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-3.5 rounded-full font-bold hover:bg-green-700 transition-colors">
                Continue →
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Step 2 — Contact Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input {...form2.register('companyName')} placeholder="Your company name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  {form2.formState.errors.companyName && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.companyName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                  <input
                    {...form2.register('contactPerson')}
                    placeholder="Your name"
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, ''); }}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {form2.formState.errors.contactPerson && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.contactPerson.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    {...form2.register('phone')}
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile"
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '').slice(0, 10); }}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {form2.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input {...form2.register('email')} placeholder="company@email.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  {form2.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input {...form2.register('address')} placeholder="Office/premises address" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  {form2.formState.errors.address && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.address.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input {...form2.register('city')} placeholder="City" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                  {form2.formState.errors.city && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.city.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                <select {...form2.register('preferredTime')} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option value="">Select time slot</option>
                  {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                </select>
                {form2.formState.errors.preferredTime && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.preferredTime.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description *</label>
                <textarea {...form2.register('issueDescription')} rows={3} placeholder="Describe the pest problem, affected areas, and any previous treatments..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
                {form2.formState.errors.issueDescription && <p className="text-red-500 text-xs mt-1">{form2.formState.errors.issueDescription.message}</p>}
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(0)} className="flex-1 border border-gray-300 text-gray-700 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors">
                  ← Back
                </button>
                <button type="submit" className="flex-1 bg-green-600 text-white py-3.5 rounded-full font-bold hover:bg-green-700 transition-colors">
                  Review →
                </button>
              </div>
            </form>
          )}

          {/* Step 3 — Review */}
          {step === 2 && step1Data && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Step 3 — Review & Submit</h2>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm">
                <h3 className="font-bold text-gray-700 text-xs uppercase tracking-widest mb-3">Service Requirements</h3>
                {[
                  ['Service Type', step1Data.serviceType],
                  ['Business Type', step1Data.businessType],
                  ['Area Size', step1Data.areaSize],
                  ['Infestation Severity', step1Data.severity],
                  ['Plan Type', step1Data.planType],
                  ['Preferred Date', step1Data.preferredDate],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 space-y-3 text-sm">
                <h3 className="font-bold text-gray-700 text-xs uppercase tracking-widest mb-3">Contact Details</h3>
                {[
                  ['Company', form2.getValues('companyName')],
                  ['Contact Person', form2.getValues('contactPerson')],
                  ['Phone', form2.getValues('phone')],
                  ['Email', form2.getValues('email')],
                  ['Address', `${form2.getValues('address')}, ${form2.getValues('city')}`],
                  ['Preferred Time', form2.getValues('preferredTime')],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-medium text-gray-900 text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
                <div>
                  <p className="text-gray-500 mb-1">Issue Description</p>
                  <p className="font-medium text-gray-900">{form2.getValues('issueDescription')}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-300 text-gray-700 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors">
                  ← Edit
                </button>
                <button
                  onClick={handleFinalSubmit}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-full font-bold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center">
                This opens WhatsApp with your enquiry pre-filled. No data is stored on our servers.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
