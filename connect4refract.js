class game {
    constructor(p1, p2, height = 6, width = 7) {
        this.height = height
        this.width = width
        this.players = [p1, p2]
        this.currentPlayer = p1
        this.makeBoard()
        this.makeHtmlBoard()
        this.gameOver = false
    }
    makeBoard() {
        this.board = []
        for (let y = 0; y < this.height; y++) {
          this.board.push(Array.from({ length: this.width }));
        }
      }
    makeHtmlBoard() {
        const board = document.getElementById('board');
        board.innerHTML = ''

        const top = document.createElement('tr');
        top.setAttribute('id', 'column-top');
        this.handleGameClick = this.handleGameClick.bind(this)
        top.addEventListener('click', this.handleGameClick)

        for (let x = 0; x < this.width; x++) {
            const headCell = document.createElement('td');
            headCell.setAttribute('id', x);
            top.append(headCell);
        }

        board.append(top);

        for (let y = 0; y < this.height; y++) {
            const row = document.createElement('tr');

            for (let x = 0; x < this.width; x++) {
            const cell = document.createElement('td');
            cell.setAttribute('id', `${y}-${x}`);
            row.append(cell);
            }

            board.append(row);
        }
        }
            }