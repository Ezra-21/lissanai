export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  variables: string[];
}

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "job-application",
    name: "Job Application",
    subject: "Application for {{position}} at {{company}}",
    body: "Dear {{hiring_manager}},\n\nI am writing to express my interest in the {{position}} role at {{company}}.\n\nBest regards,\n{{sender_name}}",
    variables: ["position", "company", "hiring_manager", "sender_name"],
  },
  {
    id: "follow-up",
    name: "Interview Follow-up",
    subject: "Thank You – {{position}} Interview",
    body: "Dear {{interviewer_name}},\n\nThank you for taking the time to interview me for the {{position}} role.\n\nBest regards,\n{{sender_name}}",
    variables: ["position", "interviewer_name", "sender_name"],
  },
  {
    id: "inquiry",
    name: "General Inquiry",
    subject: "Inquiry Regarding {{topic}}",
    body: "Dear {{recipient}},\n\nI hope this message finds you well. I am writing to inquire about {{topic}}.\n\nBest regards,\n{{sender_name}}",
    variables: ["topic", "recipient", "sender_name"],
  },
];
