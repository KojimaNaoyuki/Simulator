class Graph {
    constructor(_tg, _sizeW, _sizeH) {
        this.tg = _tg;
        this.context = this.tg.getContext('2d');
        this.sizeW = _sizeW;
        this.sizeH = _sizeH;
    }

    displayAxis() {
        //軸を描画
        //x軸を描画
        this.drawLine(0, this.sizeH/2, this.sizeW, this.sizeH/2, 'blue');

        //y軸を描画
        this.drawLine(0, 0, 0, this.sizeH, 'red');
        this.drawLine(1, 0, 1, this.sizeH, 'red');
        this.drawLine(2, 0, 2, this.sizeH, 'red');
    }
    displayFn(_valueFn) {
        //関数を描画
        const valueFn = this.FnFix(_valueFn); //関数の値を座標に直す

        console.log(valueFn);

        for(let i = 0; i < valueFn.length-1; i++) {
            this.drawLine(i, valueFn[i], i+1, valueFn[i+1], 'black');
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
    FnFix(_valueFn) {
        //関数の値を座標に直す
        let result = [];
        _valueFn.forEach(element => {
            result.push((this.sizeH/2)-element);
        });

        return result;
    }
}