import styled from '@emotion/styled'

export const FrList =styled.ul`
    display: flex;
	flex-direction: column;
	width: 270px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
	text-transform: none;
    margin:0px;
	margin-bottom:30px;
    padding:0px;

`
export const List =styled.li`
    width: 100%;
	display: flex;
	align-items: center;
	border: 1px solid gray;
	box-shadow: 0 2px 3px 0 gray;
	border-radius: 3px;
	margin-bottom: 5px;
	padding: 5px;
`
export const FrName = styled.p`
    margin-left: 15px;
`
// Status
export const Status =styled.span`
   width: 10px;
	height: 10px;
	border-radius: 50%;
    border:1px solid #535353;
	margin-right: 10px; 
    
` 
 export const StatusRed = styled.span`
    background: #ff0000; 
`
	

export const StatusGreen = styled.span`
	background: green;    
`

