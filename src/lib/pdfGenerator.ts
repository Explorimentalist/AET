// src/lib/pdfGenerator.ts
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PDFOptions {
  filename?: string;
  format?: 'a4' | 'letter';
  orientation?: 'portrait' | 'landscape';
}

export class PDFGenerator {
  private static async captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution for better quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
    });
    return canvas;
  }

  private static async addPageToPDF(
    pdf: jsPDF, 
    canvas: HTMLCanvasElement, 
    pageNumber: number
  ): Promise<void> {
    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate aspect ratio to fit image properly
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = (pdfHeight - imgHeight * ratio) / 2;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
    // Add page number if not the first page
    if (pageNumber > 1) {
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Page ${pageNumber}`, pdfWidth - 20, pdfHeight - 10);
    }
  }

  static async generatePDFFromElement(
    element: HTMLElement, 
    options: PDFOptions = {}
  ): Promise<void> {
    try {
      const {
        filename = 'terms-and-conditions.pdf',
        format = 'a4',
        orientation = 'portrait'
      } = options;

      // Create PDF document
      const pdf = new jsPDF({
        format,
        orientation,
        unit: 'mm'
      });

      // Capture the element
      const canvas = await this.captureElement(element);
      
      // Add to PDF
      await this.addPageToPDF(pdf, canvas, 1);

      // Save the PDF
      pdf.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  }

  static async generatePDFFromContent(
    content: string, 
    title: string,
    options: PDFOptions = {}
  ): Promise<void> {
    try {
      const {
        filename = 'document.pdf',
        format = 'a4',
        orientation = 'portrait'
      } = options;

      // Create PDF document
      const pdf = new jsPDF({
        format,
        orientation,
        unit: 'mm'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      const lineHeight = 7;

      // Add title
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(50, 50, 50);
      pdf.text(title, margin, margin + 10);

      // Add content
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(70, 70, 70);

      const lines = pdf.splitTextToSize(content, contentWidth);
      let yPosition = margin + 25;

      for (const line of lines) {
        if (yPosition > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight;
      }

      // Save the PDF
      pdf.save(filename);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF');
    }
  }
}
