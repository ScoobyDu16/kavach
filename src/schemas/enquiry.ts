import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  address: z.string().min(5, 'Please enter your address'),
  service: z.string().min(1, 'Please select a service'),
  propertyType: z.string().optional(),
  plan: z.string().optional(),
  preferredTime: z.string().optional(),
  issue: z.string().optional(),
  // Honeypot
  website: z.string().max(0, 'Bot detected').optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const commercialStep1Schema = z.object({
  serviceType: z.string().min(1, 'Please select a service type'),
  businessType: z.string().min(1, 'Please select your business type'),
  areaSize: z.string().min(1, 'Please select area size'),
  severity: z.enum(['Low', 'Medium', 'Severe'], {
    error: 'Please select infestation severity',
  }),
  planType: z.enum(['One-Time Service', 'Annual Maintenance Contract'], {
    error: 'Please select a plan type',
  }),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
});

export const commercialStep2Schema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email address'),
  address: z.string().min(5, 'Please enter your address'),
  city: z.string().min(2, 'Please enter your city'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  issueDescription: z
    .string()
    .min(10, 'Please describe the issue in at least 10 characters'),
});

export type CommercialStep1Data = z.infer<typeof commercialStep1Schema>;
export type CommercialStep2Data = z.infer<typeof commercialStep2Schema>;
