const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("./Blue_Simple_Achievement_Certificate.pdf")
  .then(res => {
    return res.arrayBuffer()
  })

  const exFont = await fetch("./Sanchez-Regular.ttf")
  .then(res => {
    return res.arrayBuffer();
  })

  const pdfDoc = await PDFDocument.load(exBytes);

  console.log(pdfDoc);

  pdfDoc.registerFontkit(fontkit)

  const myFont = await pdfDoc.embedFont(exFont);

  const pages = pdfDoc.getPages();
  const firstPg = pages[0];

  firstPg.drawText(name, {
    x: 220,
    y: 300,
    size: 45,
    font: myFont,
    color: rgb(0,0,0)
  });

  const uri = await pdfDoc.saveAsBase64({dataUri: true});
  window.open(uri);

  document.querySelector("#mypdf").src = uri;
}

generatePDF("Mubarak Ibrahim");