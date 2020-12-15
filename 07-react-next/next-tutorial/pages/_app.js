import '../styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (	
	<>
		<nav>
			<ul>
				<li>
					{/* <a routerLink=""></a> */}
					<Link href="/todo/foo">
						<a>
							Todo
						</a>
					</Link>
				</li>
				<li>
					{/* <a routerLink=""></a> */}
					<Link href="/">
						<a>
							Home
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	  	<Component {...pageProps} />
	</>
  )
}

export default MyApp
