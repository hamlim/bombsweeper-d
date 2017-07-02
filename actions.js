export const setFailureMessage = pState => ({
	hasError: true,
	cols: pState.cols.map(row => row.map(cell => ({ ...cell, isRevealed: true }))),
})

export const resetBoard = () => ({
	hasError: false,
	clicks: 0,
	score: 0,
	cols: new Array(5).fill(1).map((row, rowIndex) =>
		new Array(5).fill(1).map((c, colIndex) => {
			const isMine = Math.random(1) > 0.75
			return {
				id: colIndex + rowIndex * 10 + row,
				isMine,
				isFlagged: false,
				isRevealed: false,
				children: '',
				rowIndex,
				colIndex,
			}
		}),
	),
})

export const revealCell = cid => pState => ({
	cols: pState.cols.map((row, rowIndex) =>
		row.map((cell, colIndex) => {
			if (cell.id === cid) {
				return {
					...cell,
					isRevealed: true,
				}
			} else {
				return cell
			}
		}),
	),
})
