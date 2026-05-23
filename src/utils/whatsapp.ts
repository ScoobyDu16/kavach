import { WHATSAPP_NUMBER } from '@/constants';

export function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

export function buildEnquiryMessage(data: {
  name: string;
  phone: string;
  address?: string;
  service: string;
  propertyType?: string;
  plan?: string;
  preferredTime?: string;
  issue?: string;
}) {
  return `Hello,

I want to enquire about ${data.service}.
${data.propertyType ? `\nProperty Type: ${data.propertyType}` : ''}
${data.plan ? `Plan: ${data.plan}` : ''}
${data.preferredTime ? `Preferred Time: ${data.preferredTime}` : ''}

Name: ${data.name}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}` : ''}
${data.issue ? `\nIssue:\n${data.issue}` : ''}`.trim();
}

export function buildCommercialMessage(data: {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  serviceType: string;
  businessType: string;
  areaSize: string;
  severity: string;
  planType: string;
  preferredDate: string;
  address: string;
  city: string;
  preferredTime: string;
  issueDescription: string;
}) {
  return `Hello,

I am enquiring about Commercial Pest Control.

Service Type: ${data.serviceType}
Business Type: ${data.businessType}
Area Size: ${data.areaSize}
Infestation Severity: ${data.severity}
Plan: ${data.planType}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}

Company: ${data.companyName}
Contact Person: ${data.contactPerson}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address}, ${data.city}

Issue:
${data.issueDescription}`.trim();
}
