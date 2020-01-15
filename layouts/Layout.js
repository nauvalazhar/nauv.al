import Link from 'next/link';
import Head from 'next/head';

const Layout = (props) => (
	<>
		<Head>
			<link rel="shortcut icon" href="https://avatars1.githubusercontent.com/u/14899175?s=460&v=4" />
		</Head>
		<table width="800" border="1" cellpadding="20">
			<thead>
				<tr>
					<th colspan="2">
						<h1>Nauval</h1>
						<h4>My personal website</h4>
					</th>
				</tr>
				<tr>
					<th colspan="2">
						<Link href="/"><a>Home</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link href="/profile"><a>Profile</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
						<Link href="/projects"><a>Projects</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
						<Link href="/contact"><a>Contact</a></Link>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td valign="top">
						{props.children}
					</td>
					<td width="250" valign="top">
						<img src="images/avatar.jpeg" width="100" />
						<p>Koala on Windows 7 is my favorite photo in the universe.</p>
						<Link href="/profile"><a>See my profile</a></Link>
						<br />
						<br />
						<hr />
						<h4>Get in touch</h4>
						<p>You can follow me on several of these platforms:</p>
						<ul>
							<li><a href="https://github.com/nauvalazhar">GitHub</a></li>
							<li><a href="https://medium.com/@mhdnauvalazhar">Medium</a></li>
							<li><a href="https://dribbble.com/mhdnauvalazhar">Dribbble</a></li>
							<li><a href="https://twitter.com/mhdnauvalazhar">Twiiter</a></li>
							<li><a href="https://facebook.com/mhdnauvalazhar">Facebook</a></li>
						</ul>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2" align="center">
						<p>Copyright &copy; {(new Date).getFullYear()}<br /><br/>
						<small>Design by Nauval</small></p>
					</td>
				</tr>
			</tfoot>
		</table>
		<style jsx global>{`
			body {
				background-image: url(images/bg.jpeg);
			}
			table {
				background-color: #EBDAD3;
				border-color: #87A8B0;
				margin: 0 auto;
				margin-top: 50px;
				margin-bottom: 50px;
				border-collapse: collapse;
			}
			// blink polyfill
			.blink {
			  -webkit-animation: 1s linear infinite condemned_blink_effect; // for Safari 4.0 - 8.0
			  animation: 1s linear infinite condemned_blink_effect;
			}
			@-webkit-keyframes condemned_blink_effect { // for Safari 4.0 - 8.0
			  0% {
			    visibility: hidden;
			  }
			  50% {
			    visibility: hidden;
			  }
			  100% {
			    visibility: visible;
			  }
			}
			@keyframes condemned_blink_effect {
			  0% {
			    visibility: hidden;
			  }
			  50% {
			    visibility: hidden;
			  }
			  100% {
			    visibility: visible;
			  }
			}
		`}
		</style>
	</>
);

export default Layout;