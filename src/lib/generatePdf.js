// src/lib/generatePdf.js
import { jsPDF } from "jspdf";
import { format } from "date-fns";

export const generateInquiryPdf = (formData) => {
  const doc = new jsPDF();

  // --- PDF Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Wedding Inquiry Summary", 105, 20, { align: "center" });

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Wedding Nepal", 105, 30, { align: "center" });

  doc.setLineWidth(0.5);
  doc.line(20, 35, 190, 35);

  // --- Inquiry Details ---
  let yPosition = 50;
  const addSection = (title, value) => {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(title, 20, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(String(value), 70, yPosition);
    yPosition += 12;
  };

  addSection("Client Name:", formData.personalInfo.name);
  addSection("Client Email:", formData.personalInfo.email);
  addSection("Proposed Date:", formData.date ? format(formData.date, "PPP") : "Not specified");
  addSection("Chosen Package:", formData.package);
  addSection("Desired Style:", formData.style);
  addSection("Additional Details:", formData.personalInfo.message || "None");

  // --- Footer & Next Steps ---
  doc.line(20, yPosition + 10, 190, yPosition + 10);
  yPosition += 20;

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Thank You & Next Steps", 105, yPosition, { align: "center" });

  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const thankYouText = `Thank you for your interest in Wedding Nepal! We have received your inquiry and this document serves as a summary of your selections. We will review the details and get back to you at ${formData.personalInfo.email} within 24-48 hours to confirm our availability and schedule a consultation.`;
  doc.text(thankYouText, 20, yPosition, { maxWidth: 170 });
  
  // --- Trigger Download ---
  doc.save(`Wedding_Nepal_Inquiry_${formData.personalInfo.name.replace(/\s+/g, '_')}.pdf`);
};