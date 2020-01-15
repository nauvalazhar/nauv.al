import Layout from '../layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';
import imgForgif from '../public/images/forgif.png';
import imgKodinger from '../public/images/kodinger.png';
import imgLetschckout from '../public/images/letschckout.png';
import imgLowin from '../public/images/lowin.png';
import imgMagz from '../public/images/magz.png';
import imgMultinity from '../public/images/multinity.png';
import imgNgfl from '../public/images/ngfl.png';
import imgPenzil from '../public/images/penzil.png';
import imgQopi from '../public/images/qopi.png';
import imgSadnile from '../public/images/sadnile.png';
import imgStisla from '../public/images/stisla.png';

const projects_data = [
	{
		id: 1,
		image: imgForgif,
		title: 'Forgif',
		tech: 'Laravel',
		summary: 'The 4th social media that I made. Here you can upload GIFs or videos that will be converted to GIFs and shared with people around the world. Unfortunately, this project is dead.'
	},
	{
		id: 2,
		image: imgKodinger,
		title: 'Kodinger',
		tech: 'Laravel, React, Passport, Tailwind, DO Spaces, Babel, Webpack Mix',
		summary: 'Kodinger is a content publication that I own. I created a lot of content in this publication, and the Kodinger website is being redesigned so that it can become a developer community website in Indonesia. This project is also open-source, and beginning in 2020 I plan to release a beta soon.',
		link: 'https://kodinger.com'
	},
	{
		id: 3,
		image: imgLetschckout,
		title: 'Let\'s Checkout',
		tech: 'HTML, SCSS, JavaScript',
		summary: 'This is a template for creating checkout pages, which can help developers to create checkout pages quickly.',
		link: 'http://projects.multinity.com/letscheckout/2/'		
	},
	{
		id: 4,
		image: imgLowin,
		title: 'Lowin',
		tech: 'CSS, CSS Animation, JavaScript, HTML',
		summary: 'This is an open-source CSS3 login template that I created. You can download it for free.',
		link: 'https://github.com/nauvalazhar/lowin'
	},
	{
		id: 5,
		image: imgMagz,
		title: 'Magz',
		tech: 'Bootstrap 3, SCSS',
		summary: 'This is a Bootstrap 3 based news site template. This project is open-source, in which there are many pre-designed pages. You can also download this for free.',
		link: 'https://github.com/nauvalazhar/Magz'
	},
	{
		id: 6,
		image: imgMultinity,
		title: 'Multinity',
		tech: 'Laravel',
		summary: 'Multinity is the second software house startup that I built with my brother. I work on many projects here, to have several co-workers, however, in the end it must "end", because we already have a way of life that - we think - is better.',
		link: 'https://multinity.com/'
	},
	{
		id: 7,
		image: imgNgfl,
		title: 'NGFL',
		tech: 'Bootstrap 4',
		summary: 'This is a minimal website design template that I created. Based on Bootstrap 4 and I made it using Bootstrap Studio. This is also an open-source project.',
		link: 'https://github.com/nauvalazhar/NGFL'
	},
	{
		id: 8,
		image: imgPenzil,
		title: 'Penzil',
		tech: 'PHP Native',
		summary: 'Penzil is my first software house startup that was built with my brother. There aren\'t too many projects that I\'m working on here. Even though it is no longer operational, we let the website live, as a memory.',
		link: 'https://penzil.net'
	},
	{
		id: 9,
		image: imgQopi,
		title: 'Qopi',
		tech: 'Laravel',
		summary: 'Qopi is a tool that can be used to generate WhatsApp Click to Chat links. This tool is easy to use for ordinary people or anyone, including you.',
		link: 'http://qopi.me'
	},
	{
		id: 10,
		image: imgSadnile,
		title: 'Sadnile',
		tech: 'Bootstrap 3',
		summary: 'My first e-commerce template. This template was rejected by Envato for no apparent reason. So, I decided to make it open source.',
		link: 'https://github.com/nauvalazhar/sadnile'
	},
	{
		id: 11,
		image: imgStisla,
		title: 'Stisla',
		tech: 'Bootstrap 4, SCSS, Gulp',
		summary: 'This is my most favorite open source project. Also, my most downloaded and starred open source project. I have a plan to make it even better.',
		link: 'https://getstisla.com'
	},
];

const Projects = () => (
	<Layout>
		<Head>
			<title>Nauval: Projects</title>
		</Head>
		<h2 className="blink" style={{color: '#89AAB4'}}>Projects</h2>
		<p>You know, I was working on a project when I was a freelancer, but, here are some of my favorite projects.</p>
		<table border="1" cellpadding="10" width="100%" className="table-project">
			<tr>
				<th>Image</th>
				<th>Description</th>
			</tr>
			{projects_data.map((item) => {
				return (
					<tr key={item.id}>
						<td valign="top" width="150" align="center">
							<img src={item.image} alt={item.title} width="100%" />
							<p><a href={item.link ? item.link + '?ref=nauv.al' : 'javascript:alert("Website is no longer active :(");'}>Visit Project</a></p>
						</td>
						<td valign="top">
							<h3>{item.title}</h3>
							<code>Tech: {item.tech}</code>
							<p>{item.summary}</p>
						</td>
					</tr>
				);
			})}
		</table>
		<p>Not all the projects that I worked on I put in the table above. I just put down a few of my favorite projects.</p>
		<p>Some screenshots may be irrelevant, because it is likely that each project has updated its interface. So, you can go to the link in each project.</p>
		<p>Follow <a href="https://github.com/nauvalazhar" target="_blank">my GitHub account</a> to get updates about my upcoming open source project.</p>
		<p>If you have a good project, you can <Link href="/contact"><a>contact me</a></Link>.</p>
		<style jsx global>{`
			.table-project {
				margin-top: 20px;
				margin-bottom: 20px;
			}
		`}
		</style>
	</Layout>
);

export default Projects;