import jsPDF from 'jspdf';

import logo from './logo.png'
export const downloadBill = (data) => {
    
     const doc = new jsPDF();
  
    // doc.setFontSize(16);
    doc.setFont("helvetica");
    // doc.setTextColor('#333333');
    
  // Set font style for the document
doc.setFont("helvetica");

// Set initial y-coordinate for positioning elements
let y = 50;

// Add company logo
// doc.addImage(logo, "PNG", 140, 10, 50, 50);
doc.addImage(logo, "PNG", 125, 10, 75, 50);
// Add company name and address
doc.setFontSize(12);
doc.text("Tasty Trails", 10, y);
doc.text("1234 Elm Street", 10, y + 10);
doc.text("Suite 567", 10, y + 20);
doc.text("Springfield, IL 62704", 10, y + 30);

// Add invoice title
doc.setFontSize(24);
doc.text("Invoice", doc.internal.pageSize.width / 2, 30, "center");

// Add customer information
doc.setFontSize(14);
    
    doc.text(`Date: ${(data.order_date).toLocaleString()}`,40,120);
    doc.text(`Staff Name: ${data.username}`,40,130);
    doc.text(`Item Name: ${data.label}`,40,140)
    doc.text(`Quantity: ${data.quantity}`,40,150)
    doc.text(`Cost :$${data.price}`,40,160);
    
  
    // // Save the PDF file
    // const pdfBlob = doc.output('blob');
    // saveAs(pdfBlob, 'data.pdf');




    //const doc = new jsPDF()//"p", "pt", "letter");




// Add invoice total
doc.setFontSize(16);
doc.text(`Total Amount: $${data.price}`, doc.internal.pageSize.width - 120, doc.internal.pageSize.height - 40);

// Save the PDF
doc.save("invoice.pdf");


};
