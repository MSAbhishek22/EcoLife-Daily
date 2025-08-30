import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'

export async function exportElementAsPNG(el, fileName = 'ecolife-card.png') {
  try {
    const dataUrl = await toPng(el, { cacheBust: true })
    const link = document.createElement('a')
    link.download = fileName
    link.href = dataUrl
    link.click()
  } catch (err) {
    console.error('Export PNG error', err)
  }
}

export async function exportElementAsPDF(el, fileName = 'ecolife-card.pdf') {
  try {
    const dataUrl = await toPng(el, { cacheBust: true })
    const pdf = new jsPDF({ unit: 'px', format: 'a4' })
    const imgProps = pdf.getImageProperties(dataUrl)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(fileName)
  } catch (err) {
    console.error('Export PDF error', err)
  }
}
