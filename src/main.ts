import dadosPergunta from "../deleteme/pergunta.json"
import "./web-components/cdc/qr-reader"
import { CDCQRCodeReader, CDCQRCodeReaderEvent } from "./web-components/cdc/qr-reader"

const cdcqrcodereader = <CDCQRCodeReader>document.querySelector("cdc-qrcodereader")

const domPergunta = <HTMLDivElement>document.querySelector(".pergunta")
const domTitle = <HTMLHeadingElement>domPergunta.querySelector("h1")
const domAlternativas = <HTMLDivElement>domPergunta.querySelector(".alternativas")

domAlternativas.addEventListener("click", ev => {
    const current = domAlternativas.querySelector(".checked")
    const target = <HTMLLabelElement>(<HTMLElement>ev.target).closest("label")
    if (current)
        current.classList.remove("checked")
    target.classList.add("checked")
})


cdcqrcodereader.addEventListener("cdc-qrcodereader-read", async evt => {
    const ev = <CDCQRCodeReaderEvent>evt
    // const dadosPergunta = await fetch(urlPerguntas)
    domTitle.innerHTML = dadosPergunta.pergunta
    let alternativasHTML = ""
    Object.entries(dadosPergunta.alternativas).forEach(([chave, valor], idx) => {
        alternativasHTML += `
            <label>
                <input type="radio" name="resposta" value="${chave}">
                <span>${valor}</span>
            </label>
        `
    })
    domAlternativas.innerHTML = alternativasHTML
    // console.log(ev.data)
    ev.pause()
})