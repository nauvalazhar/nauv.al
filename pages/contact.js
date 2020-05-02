import Layout from '../layouts/Layout';
import Head from 'next/head';

const Contact = () => (
	<Layout>
		<Head>
			<title>Nauval: Contact</title>
		</Head>
		<h2 className="blink" style={{color: '#89AAB4'}}>Contact</h2>
		<p>Business inquiries or hire me? <br/><br/>Email me at <a href="mailto:hai@nauv.al">hai@nauv.al</a>
		<br/><br/>Phone or WhatsApp: <a href="https://wa.me/6282124768469">+6282124768469</a></p>
		<p>Or you can follow my social media account to get updates: <a href="https://twitter.com/mhdnauvalazhar" target="_blank">Twitter</a> or <a href="https://facebook.com/mhdnauvalazhar" target="_blank">Facebook</a>.
		My Facebook account is widely followed by Indonesians, while Twitter is followed by my friends in several other countries. Also, I prefer to use Twitter, however, I'm not very active on social media.</p>
	</Layout>
);

export default Contact;