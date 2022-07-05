import "./web-components/cdc/qr-reader"
import { CDCQRCodeReader, CDCQRCodeReaderEvent } from "./web-components/cdc/qr-reader"

const cdcqrcodereader = <CDCQRCodeReader>document.querySelector("cdc-qrcodereader")

cdcqrcodereader.addEventListener("cdc-qrcodereader-read", (evt) => {
    const ev = <CDCQRCodeReaderEvent>evt
    console.log(ev.data)
    ev.destroy()
})