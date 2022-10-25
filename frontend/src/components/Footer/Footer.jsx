import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Style from './Footer.module.css';

export function Footer() {
	return (
		<>
			<section className={Style.container}>
				<article>Sobre Makeup</article>
				<article>Ayuda</article>
				<article>Terminos y condiciones</article>
				<article>Logo</article>
			</section>
			<article className={Style.redes}>
				<FacebookOutlinedIcon />

				<InstagramIcon />

				<YouTubeIcon />

				<TwitterIcon />
			</article>
		</>
	);
}
