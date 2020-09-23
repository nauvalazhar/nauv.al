import Layout from '../layouts/Layout';
import Head from 'next/head';

const handle = function(template, e) {
    e.preventDefault();

    const nextElement = e.currentTarget.parentNode.parentNode.parentNode.parentNode.nextSibling;

    if(template.link == 'scroll_down')
    {
        window.scrollTo({
            top: nextElement.offsetTop
        });

        return;
    }

    window.open(template.link);
}

const templates = [
    {
        name: 'Erebus',
        description: 'Large text with dark background color.',
        link: 'scroll_down',
        preview: '/images/previews/1.png',
        patterns: '/images/patterns/1.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Kimopoleia',
        description: 'Gradient light background with icon.',
        link: 'scroll_down',
        preview: '/images/previews/2.png',
        patterns: '/images/patterns/2.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Meliae',
        description: 'Large text with fully background image.',
        link: 'scroll_down',
        preview: '/images/previews/3.png',
        patterns: '/images/patterns/3.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Sofrosine',
        description: 'Minimal design, solid white background.',
        link: 'scroll_down',
        preview: '/images/previews/4.png',
        patterns: '/images/patterns/4.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Tartarus',
        description: 'Black solid background with preview images.',
        link: 'scroll_down',
        preview: '/images/previews/5.png',
        patterns: '/images/patterns/5.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Lamia',
        description: 'Gradient background with large screenshot.',
        link: 'scroll_down',
        preview: '/images/previews/6.png',
        patterns: '/images/patterns/6.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Eirene',
        description: 'Solid background with preview image.',
        link: 'scroll_down',
        preview: '/images/previews/7.png',
        patterns: '/images/patterns/7.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Tikhe',
        description: 'Background image with overlay.',
        link: 'scroll_down',
        preview: '/images/previews/8.png',
        patterns: '/images/patterns/8.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Muses',
        description: 'Gradient background with large preview image.',
        link: 'scroll_down',
        preview: '/images/previews/9.png',
        patterns: '/images/patterns/9.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'Higeia',
        description: 'Blob preview image and solid background color.',
        link: 'scroll_down',
        preview: '/images/previews/10.png',
        patterns: '/images/patterns/10.png',
        text: 'Scroll Down 👇'
    },
    {
        name: 'And More',
        description: 'Duplicate this design file and start designing content! You can follow me for updates on this project or my upcoming work!',
        link: 'https://www.figma.com/file/UaNmyUFBkvYdGhyngTu1pq/Social-Feeds/duplicate',
        preview: '/images/previews/11.png',
        patterns: '/images/patterns/11.png',
        text: 'Download 👉'
    }
]

const SocialFeeds = () => (
    <>
        <Head>
            <meta name="title" content="Social Feeds" />
            <meta name="description" content="Beautiful Social Media Content Design Templates For Figma" />

            <meta property="og:site_name" content="Nauval" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nauv.al/socialfeeds" />
            <meta property="og:title" content="Social Feeds" />
            <meta property="og:description" content="Beautiful Social Media Content Design Templates For Figma" />
            <meta property="og:image" content="https://nauv.al/images/og-image.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://nauv.al/socialfeeds" />
            <meta property="twitter:title" content="Social Feeds" />
            <meta property="twitter:description" content="Beautiful Social Media Content Design Templates For Figma" />
            <meta property="twitter:image" content="https://nauv.al/images/og-image.png" />
            
            <link href="/favicon.png" rel="shortcut icon" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" /> 
            <link rel="canonical" href="https://nauv.al/socialfeeds"/>
            <title>Social Feeds &mdash; Beautiful Social Media Content Design Templates For Figma</title>

            <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="mhd" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a tea!" data-color="#5F7FFF" data-position="" data-x_margin="18" data-y_margin="18"></script>
        </Head>
        
        <style jsx global>{`
            html, body {
                scroll-behavior: smooth;
            }
        
            body {
                font-family: 'Source Sans Pro', sans-serif;
                font-size: 16px;
                margin: 0;
            }
            * {
                box-sizing: border-box;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                .container {
                    padding: 0 40px;
                }
            }

            nav {
                padding: 40px 0;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
            }
            
            nav ul {
                display: flex;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            nav ul a {
                font-weight: 700;
                color: #190B43;
            }

            .hero {
                display: flex;
                padding: 100px 0;
                background-image: url(/images/figma.png);
                background-position: 700px center;
                background-size: 850px;
                background-repeat: no-repeat;
            }

            @media (min-width: 1281px) {
                .hero {
                    background-position: right center;
                }
            }

            @media (max-width: 1024px) {
                .hero {
                    background-position: 550px center;
                }
            }

            @media (max-width: 768px) {
                .hero {
                    background-position: 400px;
                }
            }
            
            @media (max-width: 540px) {
                .hero {
                    background-image: none;
                }
            }
            
            .hero .text {
                width: 50%;
            }


            @media (max-width: 540px) {
                .hero .text {
                    width: 100%;
                }
            }
            
            .hero .text h1 {
                font-size: 40px;
                font-weight: 700;
                color: #190B43;
            }

            .hero .text p {
                margin-bottom: 50px;
                font-size: 18px;
                color: #767676;
                line-height: 30px;
            }

            .btn {
                display: inline-block;
                color: #fff;
                background-color: #FF317B;
                padding: 15px 30px;
                border-radius: 10px;
                box-shadow: 0 15px 40px rgba(255, 49, 123, .35);
                font-weight: 600;
                text-decoration: none;
                transition: all .3s;
            }

            .btn.tw {
                background-color: #1A91DA;
                color: #fff;
                box-shadow: 0 15px 40px rgba(26, 145, 218, .25);
                margin-right: 10px;
            }

            .btn:hover {
                background-color: #FF005C;
                box-shadow: none;
            }

            .twitter {
                color: #1A91DA;
            }

            .logo {
                margin-right: 20px;
            }
            .logo::after {
                content: '|';
                margin-left: 20px;
                color: #ddd;
                font-weight: 300;
            }

            .sectioned {
                color: #fff;
                padding: 140px 0;
            }

            .sectioned .flex {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin: 0 -20px;
            }

            .sectioned .preview,
            .sectioned .text {
                width: 50%;
                padding-left: 10px;
                padding-right: 10px;
            }
            
            .sectioned .preview {
                margin-bottom: -20px;
            }
            .sectioned .preview img {
                max-width: 100%;
            }
            .sectioned h2 {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 10px;
            }

            .sectioned p {
                font-size: 18px;
                margin-bottom: 40px;
                line-height: 30px;
            }

            @media (max-width: 540px) {
                .sectioned .text,
                .sectioned .preview {
                    text-align: center;
                    width: 100%;
                }
                .sectioned .preview {
                    order: 1;
                }
                .sectioned .text {
                    order: 2;
                }
            }

            .sectioned .rt {
                font-size: 24px;
                line-height: 36px;
                margin-top: 40px;
            }
            .sectioned .rt a {
                color: #fff;
                font-weight: 700;
            }
            .ctat {
                display: flex;
                align-items: center;
            }
            .ctat .pb {
                padding-left: 20px;
                color: #767676;
            }
            .ctat .pb a {
                color: #FF317B;
                text-decoration: none;
                padding-bottom: 2px;
                border-bottom: 1px solid #FF317B;
            }
            .credit {
                position: absolute;
                width: 100%;
                bottom: -100px;
                left: -10px;
                opacity: .8;
            }
            .credit a {
                color: #fff;
            }
            @media (max-width: 540px) {
                .credit {
                    text-align: center;
                    left: 0;
                }
            }
            `}
        </style>

        <nav>
            <div className="container">
                <ul>
                    <li><a className="logo">Social Feeds</a></li>
                    <li><a className="twitter" href="https://twitter.com/mhdnauvalazhar">@mhdnauvalazhar</a></li>
                </ul>
            </div>
        </nav>

        <div className="hero">
            <div className="container">
                <div className="text">
                    <h1>Beautiful Social Media Content Design Templates</h1>
                    <p>Figma social media content templates for branding, marketing, insights, and more. Free for personal and commercial use!</p>

                    <div className="ctat">
                        <a href="#content" className="btn">Discover 👇</a>
                        <div className="pb">a project by <a href="https://nauv.al" target="_blank">Nauval</a></div>
                    </div>

                    <a href="https://www.producthunt.com/posts/social-feeds?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-social-feeds" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=266852&theme=dark" alt="Social Feeds - Free Social Media Content Design Template For Figma | Product Hunt Embed" style={{width: '250px', height: '54px', marginTop: 60}} width={250} height={54} /></a>
                </div>
            </div>
        </div>

        <a name="content"></a>
        { templates.map((template, index) => (
            <section key={index} className="sectioned" style={{ backgroundImage: `url(${template.patterns})` }}>
                <div className="container" style={{position: 'relative'}}>
                    <div className="flex">
                        <div className="text">
                            <h2>{ template.name }</h2>
                            <p>{ template.description }</p>

                            { index == templates.length - 1 &&
                                <a href="https://twitter.com/mhdnauvalazhar" className="btn tw">Follow 👋</a>
                            }
                            <a href="#" onClick={handle.bind(this, template)} className="btn">{template.text}</a>

                            { index == templates.length - 1 &&
                                <p className="rt">Can you help me to <a href="https://twitter.com/intent/tweet?text=Beautiful+Social+Media+Content+Design+Templates+by+%40mhdnauvalazhar&url=https%3A%2F%2Fnauv.al%2Fsocialfeeds" target="_blank">tweet</a> this? 🙃</p>
                            }
                        </div>
                        <div className="preview">
                            <img src={template.preview} />
                        </div>
                    </div>

                    { index == templates.length - 1 &&
                        <div className="credit">
                            Patterns by <a href="https://www.heropatterns.com">heropatterns.com</a>
                        </div>
                    }
                </div>
            </section>
        )) }
    </>
);

export default SocialFeeds;