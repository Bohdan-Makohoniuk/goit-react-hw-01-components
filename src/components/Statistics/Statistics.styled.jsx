import styled from '@emotion/styled'

export const Section = styled.section`
    width: 270px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid gray;
	box-shadow: 0 0 10px 3px gray;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 30px;
`
export const Title = styled.h2`
    height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	font-size: 14px;
`
export const StatList = styled.ul`
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
    padding:0px;
    margin:0px;
`
export const List = styled.li`
    width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	color: white;
	background: #b3cf98;
    border:1px solid #7e7e7e
`
export const Percentage =styled.span`
    font-size: 12px;
`