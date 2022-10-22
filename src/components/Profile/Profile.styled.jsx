import styled from '@emotion/styled'

export const Card = styled.div`
    width: 250px;
    height:300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;

    padding: 20px;
    margin-bottom: 30px;

	border: 1px solid gray;
	box-shadow: 0 0 10px 3px gray;
	border-radius: 5px;

	font-size: 12px;
	color: gray;
	text-transform: none;
	
`

export const Avatar = styled.img`
border: 1px solid rgb(216, 215, 215);
	border-radius: 50%;
	width: 100px;
	margin-bottom: 15px;
`

export const UserName = styled.p`
    font-size: 16px;
	font-weight: 700;
	color: black;
    margin-top:0px;
	margin-bottom: 10px;
`
export const UserTeg = styled.p`
    margin-top:0px;
    margin-bottom: 10px;
`
export const UserLocation =styled.p`
    margin-top:0px;
    margin-bottom: 50px;
`
export const StatusList =styled.ul`
    display: flex;
	justify-content: center;
	width: 100%;
	height: 60px;
    padding:0px;
    margin:0px;
	list-style: none;
`
export const List = styled.li`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border: 1px solid rgb(216, 215, 215);
	background: rgba(219, 219, 219, 0.521);
`
export const LabelName = styled.span`
    font-size: 14px;
	font-weight: 400;
	color: black;
    margin-top:0px;
	margin-bottom: 10px;
`