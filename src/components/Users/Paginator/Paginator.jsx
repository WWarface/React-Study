import React from 'react'
import s from '../Users.module.css'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

let Paginator = props => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' })

	const theme = useSelector(state => state.environment.theme)

	const TOTAL_UI_BUTTONS_COUNT = isSmallScreen ? 3 : 10
	const BUTTONS_SUMMARY_AVAILABLE = isSmallScreen ? 3 : 5
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let curP = props.currentPage
	let curPF = curP - BUTTONS_SUMMARY_AVAILABLE < 0 ? 0 : curP - BUTTONS_SUMMARY_AVAILABLE
	let curPL = curP + BUTTONS_SUMMARY_AVAILABLE

	if (curPL < TOTAL_UI_BUTTONS_COUNT) curPL = TOTAL_UI_BUTTONS_COUNT
	let slicedPages = pages.slice(curPF, curPL)

	return (
		<div className={s.wrapper}>
			<div className={s.buttonsWrapper}>
				{slicedPages.map(p => {
					return (
						<button
							onClick={e => {
								props.onPageChanged(p)
							}}
							className={
								props.currentPage === p
									? `${theme === 'light' ? s.selectedPageLight : s.selectedPage}`
									: `${theme === 'light' ? s.pageButtonLight : s.pageButton}`
							}
						>
							{p}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Paginator
