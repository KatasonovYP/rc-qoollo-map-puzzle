import ReactDOM from 'react-dom/client';
import { App } from './app/app.tsx';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
