class Animacao {
	constructor(matrix, image, x, y, width, height, heightSprite, widthSprite) {
		this.matrix = matrix;
		this.image = image;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.widthSprite = widthSprite;
		this.heightSprite = heightSprite;
	}

	exibe() {
		image(
			this.image,
			this.x,
			this.y,
			this.width,
			this.height,
			this.matriz[this.frameAtual][0],
			this.matriz[this.frameAtual][1],
			this.widthSprite,
			this.heightSprite
		);
		this.anima();
	}

	anima() {
		this.frameAtual++;

		if (this.frameAtual >= this.matriz.length - 1) {
			this.frameAtual = 0;
		}
	}
}
