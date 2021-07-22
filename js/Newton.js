class Newton {
    constructor(_tg, _initX) {
        this.tg = _tg;
        this.context = this.tg.getContext('2d');
        this.sizeW = this.tg.width;
        this.sizeH = this.tg.height;
        this.tangentX = _initX;
    }
    getTangent(x) {
        return (differentialFn(this.tangentX) * (x - this.tangentX) + Fn(this.tangentX)) + (this.sizeH/2);
    }
    displayTangent() {
        for(let i = 0; i < 100; i++) {
            this.drawLine(i, this.getTangent(i), i+1, this.getTangent(i+1));
        }
    }

    drawLine(_startX, _startY, _endX, _endY, _color) {
        //線を描画
        this.context.strokeStyle = _color;
        this.context.beginPath();
        this.context.moveTo(_startX, _startY);
        this.context.lineTo(_endX, _endY);
        this.context.closePath();
        this.context.stroke();
    }
}