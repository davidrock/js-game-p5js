class Personagem {
	constructor(imagem, imgW, imgH, cols, rows, x, y, sizeImgWidth, sizeImgHeight) {
		this.imagem = imagem;
    this.x = x;
    this.y = y;
    this.sizeImgHeight = sizeImgHeight;
    this.sizeImgWidth = sizeImgWidth;
		this.width = imgW;
		this.height = imgH;
		this.matriz = [];
		
		for (var x = 0; x < cols; x++) {
			for (var y = 0; y < rows; y++) {
				this.matriz.push([y * imgW, x * imgH]);
			}
		}

		console.log(this.matriz);

		this.frameAtual = 0;
	}

	exibe() {
		image(
			this.imagem,
			this.x,
			this.y,
			this.sizeImgWidth,
			this.sizeImgHeight,
			this.matriz[this.frameAtual][0],
			this.matriz[this.frameAtual][1],
			this.width,
			this.height
		);
		this.anima();
	}

	anima() {
		this.frameAtual++;

		if (this.frameAtual >= this.matriz.length) {
			this.frameAtual = 0;
		}
	}
}
