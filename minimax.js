// Minimax algorithm

/*
Score Values
----------------
x: +1
O: -1
tie: 0
*/

/*
O is the minimising player and X is the maximising player
*/

function bestMove() {
    // AI making turn
    let bestScore = -Infinity
    let move

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                
                board[i][j] = ai
                let score = minimax(board, 0, false)
                board[i][j] = ''
                
                if (score > bestScore) {
                    bestScore = score
                    move = { i, j }
                }
            }
        }
    }
    board[move.i][move.j] = ai
    currentPlayer = human
}

let scores = {
    X: 1,
    O: -1,
    tie: 0
}

function minimax(board, depth, isMaximising) {
    let result = checkWinner() // returns 'tie', 'X', or 'O
    
    if (result !== null) {
        return scores[result]
    }


    if (isMaximising) {
        let bestScore = -Infinity

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = ai
                    let score = minimax(board, depth + 1, false)
                    board[i][j] = ''
                    bestScore = max(score, bestScore)
                }
            }
        }

        return bestScore

    } else {
        // not maximising player

        let bestScore = Infinity

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = human
                    let score = minimax(board, depth + 1, true)
                    board[i][j] = ''
                    bestScore = min(score, bestScore)
                }
            }
        }
        return bestScore
    }
}