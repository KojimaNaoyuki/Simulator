class Dichotomy {
    constructor(_tg, _aX, _bX) {
        this.tg = _tg;
        this.context = this.tg.getContext('2d');
        this.sizeW = this.tg.width;
        this.sizeH = this.tg.height;
        this.aX = _aX;
        this.bX = _bX;
        this.toleranceVal = 0;
        this.resultCount = 0;
        this.resultX = 0; //結果
    }
    displayAB() {
        //ABを表示
        this.drawLine(this.aX, 0, this.aX, this.sizeH, 'orange'); //A
        this.drawLine(this.bX, 0, this.bX, this.sizeH, 'palegreen'); //B
    }
    moveAB() {
        //ABの値を動かす
        const midpointX = (this.aX + this.bX) / 2; //AとBの中点 X
        const midpointY = Fn(midpointX); //AとBの中点 Y

        const aY = Fn(this.aX); //Aのy座標

        console.log(midpointX + ' : ' + midpointY);

        let judg = midpointY * aY;

        if(judg < 0) {
            this.bX = midpointX;
        } else {
            this.aX = midpointX;
        }
        this.drawLine(midpointX, 0, midpointX, this.sizeH, 'black');

        if(this.calTolerance()) {
            this.resultCount++;
            this.resultX = midpointX;
            this.resultOutPut();
            alert('許容誤差内に入りました');
        } else {
            this.resultCount++;
        }
    }
    setTolerance(_val) {
        this.toleranceVal = _val;
    }
    calTolerance() {
        //許容誤差を計算
        let result = 0;

        if(this.aX > this.bX) {
            result = this.aX - this.bX;
        } else {
            result = this.bX - this.aX;
        }
        
        console.log(result);

        if(this.toleranceVal < result) {
            return false;
        } else {
            return true;
        }
    }
    resultOutPut() {
        const tg = document.querySelector('#dichotomyNum');
        const tg2 = document.querySelector('#dichotomyVal');
        const tg3 = document.querySelector('.dichotomy__input-box-contents');

        tg3.classList.add('open');

        tg.innerHTML = '試行回数: ' + this.resultCount;
        tg2.innerHTML = '近似値: x = ' + this.resultX;
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