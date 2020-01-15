import Layout from '../layouts/Layout';
import Head from 'next/head';

const Profile = () => (
	<Layout>
		<Head>
			<title>Nauval: Profile</title>
		</Head>
		<h2 className="blink" style={{color: '#89AAB4'}}>Profile</h2>
		<h4>I able to think, design, code, deploy, and sleep. Love to learn something new.</h4>
		<p>I was born at my grandma's house. Also, grew up there. Programming since high school. Worked as a programmer since high school. Already completed many projects. Sublime Text, Stack Overflow, and DevTools are my beloved friends. I love using the Service Pattern design and BEM methodology. Open source was pleasant; my most favorite projects are Stisla and Kodinger. I love blogging, teaching, and cycling.</p>
		<p><a href="https://drive.google.com/file/d/1hMH_flCl_5C5w2EVg3RU36cR8jsBkpvC/view?usp=sharing" target="_blank">Download CV here</a></p>
	</Layout>
);

export default Profile;