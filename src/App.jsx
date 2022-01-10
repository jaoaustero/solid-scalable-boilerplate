import logo from './logo.svg';
import styles from './App.module.css';

import { useRoutes, Link } from 'solid-app-router';

import routes from '@/router';

import BaseNavbar from '@/components/navbar';

function App() {
	const Routes = useRoutes(routes);

	return (
		<div class={styles.App}>
			<BaseNavbar>
				<p>hello</p>
				<p>hello</p>
				<p>hello</p>
			</BaseNavbar>

			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>

				<Link href="/">
					Home
				</Link>
				<Link href="/login">
					Login
				</Link>
				<Link href="/profile">
					Profile
				</Link>

				<Routes />
			</header>
		</div>
	);
}

export default App;
