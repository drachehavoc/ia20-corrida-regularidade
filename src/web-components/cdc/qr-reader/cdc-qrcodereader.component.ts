import QrScanner from 'qr-scanner';
import template from "bundle-text:./cdc-qrcodereader.template.html"

export class CDCQRCodeReaderEvent extends CustomEvent<{ data: string, destroy: Function}> {    
    constructor(
        type: string,
        public data: string,
        public cornerPoints: QrScanner.Point[],
        public destroy: Function,
        public pause: Function,
    ) {
        super(type)
    }
}
    
export class CDCQRCodeReader extends HTMLElement {
    #root = this.attachShadow({ mode: "closed" })
    #main: HTMLElement
    #select: HTMLSelectElement
    #qrScanner?: QrScanner | null
    #targetCanvas: HTMLCanvasElement
    #targetCanvasContext: CanvasRenderingContext2D
    
    constructor() {
        super()
        this.#root.innerHTML = template
        this.#main = <HTMLSelectElement>this.#root.querySelector("main") 
        this.#select = <HTMLSelectElement>this.#root.querySelector("select") 
        this.#targetCanvas = <HTMLCanvasElement>this.#root.querySelector("canvas")
        this.#targetCanvasContext = <CanvasRenderingContext2D>this.#targetCanvas.getContext("2d")
        this.#listCams()
    }
    
    async #listCams() {
        const cams = await QrScanner.listCameras(true)
        this.#select.innerHTML = `<option value="">-- escolha uma câmera --</option>` 
        this.#select.innerHTML += cams.map(c => `<option value="${c.id}">${c.label}</option>`).join("")
        this.#select.addEventListener("change", ev => this.#onSelectCam(ev))
    }
    
    #onSelectCam(ev: Event) {
        this.#main.classList.add("initialized")
        const video = document.createElement("video")
        const settings = { preferredCamera: this.#select.value }
        this.#qrScanner = new QrScanner(video, res => this.#onQrReaded(res), settings)
        const can = this.#targetCanvas
        const ctx = this.#targetCanvasContext
        // ####### GAMBIARRA ####### BEGIN
        const originalCanvas = this.#qrScanner.$canvas
        const gambLoop = () => {
            if (!this.#qrScanner)
            return ctx.clearRect(0, 0, can.width, can.height)        
            ctx.drawImage(originalCanvas, 0, 0)
            requestAnimationFrame(gambLoop)
        }
        requestAnimationFrame(gambLoop)
        // ####### GAMBIARRA ####### END
        this.#qrScanner.start()
    }
    
    #onQrReaded(result: QrScanner.ScanResult) {
        const event = new CDCQRCodeReaderEvent(
            "cdc-qrcodereader-read", 
            result.data, 
            result.cornerPoints, 
            this.#destroy.bind(this),
            this.#pause.bind(this),
        )
        this.#root.host.dispatchEvent(event)
    }
    
    #pause() {
        this.#qrScanner?.pause()
    }

    #destroy() {
        this.#qrScanner?.stop()
        this.#qrScanner = null
        this.#select.value = ""
    }
}

customElements.define("cdc-qrcodereader", CDCQRCodeReader)