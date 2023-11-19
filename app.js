const paintConteiner = document.querySelector('#paint')

class PaintApp {
    constructor() {
        this.paint = paintConteiner;
        this.activePainting = false;
        this.#init();
        this.#initEvent();
    }

    #init() {
        this.paint.width = window.innerWidth;
        this.paint.height = window.innerHeight;
        this.context = this.paint.getContext('2d')
        this.context.strokeStyle = 'white'
    }

    #initEvent() {

    }

    #positionStart() {
        this.activePainting = true;
        this.#drawing();
    }

    #positionEnd() {
        this.activePainting = false;
    }

    #drawing(){

    }

}

const paint = new PaintApp();