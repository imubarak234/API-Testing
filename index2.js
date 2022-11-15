const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("./Blue_Simple_Achievement_Certificate.pdf")
  .then(res => {
    return res.arrayBuffer()
  })

  const pdfDoc = await PDFDocument.load(exBytes);

  const uri = await pdfDoc.saveAsBase64({dataUri: true});

  document.querySelector("#mypdf").src = uri;
}

generatePDF();