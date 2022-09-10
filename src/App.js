import  QRCode  from 'qrcode';
import { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';



export const App = () => {
	const [text, setText] = useState('')
	const [imgUrl, setImgUrl] = useState('')
	const cls = useStyles()
	const generateQrCode = async () => {
		try {
			const response = await QRCode.toDataURL(text)
			setImgUrl(response)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<Container className={cls.container}>
			<Card>
				<h2 className={cls.title}>Generate QR Code</h2>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
							<TextField label='Enter text' onChange={(e)=> setText(e.target.value)}/>
							<Button className={cls.btn} variant='contained' color='primary'
								onClick={()=> generateQrCode()}>Generate</Button>
							<br/>
							<br/>
							<br/>
							{
								imgUrl &&
									<a href={imgUrl} download>
										<img src={imgUrl} alt="qr code" />
									</a>
							}
						</Grid>
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
					</Grid>
				</CardContent>
			</Card>
		</Container>
	)
}

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: 10
	},
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#CC99FF',
		color:'#273BE2',
		padding: 20,
		borderRadius: 3
	},
	btn: {
		marginTop: 10,
		marginBottom: 20
	}
}))

