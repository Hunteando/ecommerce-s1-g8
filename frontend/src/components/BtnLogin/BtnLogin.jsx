import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from './BtnLogin.module.css';
export function BtnLogin() {
	return (
		<div className={style.containerBtnLogin}>
			<button className={style.BtnLogin}>
				<AccountCircleIcon fontSize='large' />
				Login
			</button>
		</div>
	);
}
