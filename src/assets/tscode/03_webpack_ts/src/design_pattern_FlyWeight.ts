// 设计模式之享元模式
(() => {
    class PieceFactory {
        private pieces: Array<Piece> = [new WhitePiece(), new BlackPiece()];

        getPiece(key: number): Piece {
            if (key == 0) {
                return this.pieces[0]
            } else {
                return this.pieces[1]
            }
        }
    }

    abstract class Piece {
        protected color: string;
        constructor(color: string) {
            this.color = color;
        }
        public abstract draw(x: number, y: number): void;
    }

    class WhitePiece extends Piece {
        constructor(color: string = "white") {
            super(color);
        }
        public draw(x: number, y: number): void {
            console.log("draw a color:" + this.color + "piece x:", x + " y:", y);
        }
    }

    class BlackPiece extends Piece {
        constructor(color: string = "black") {
            super(color);
        }
        public draw(x: number, y: number): void {
            console.log("draw a color:" + this.color + "piece x:", x + " y:", y);
        }
    }

    const pieceFactory: PieceFactory = new PieceFactory();
    const whitePiece1 = pieceFactory.getPiece(0);
    whitePiece1.draw(2, 5);
    const BlackPiece1 = pieceFactory.getPiece(1);
    BlackPiece1.draw(5, 9);
    const whitePiece2 = pieceFactory.getPiece(0);
    whitePiece2.draw(4, 7);
})()