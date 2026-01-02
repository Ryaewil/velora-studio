// Google Apps Script
function sendDownloadLink(e) {
  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  const confirmed = sheet.getRange(row, 6).getValue(); // Column F = Confirmed?
  const email = sheet.getRange(row, 2).getValue(); // Column B = Email
  const product = sheet.getRange(row, 3).getValue(); // Column C = Product

  const downloadLinks = {
    "Minimal UI Template": "https://yourstorage.com/minimal-ui.zip",
    "Website Wireframe Kit": "https://yourstorage.com/wireframe-kit.zip",
    "Brand Identity Pack": "https://yourstorage.com/brand-pack.zip"
  };

  if (confirmed === "Yes") {
    MailApp.sendEmail(email, "Your Velora Studio Purchase",
      `Hi,

Thank you for your purchase of ${product}.
Download here: ${downloadLinks[product]}

Velora Studio`
    );
  }
}