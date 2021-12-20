import { Navigation } from './routes/Navigation';
import { RegisterSWOptions } from 'virtual:pwa-register';
import { useState } from 'react';
import loading from '/img/loading.gif';

type Props = {
	registerSW: (
		options?: RegisterSWOptions | undefined,
	) => (reloadPage?: boolean | undefined) => Promise<void>;
};

export const App = ({ registerSW }: Props) => {
	const [reload, setReload] = useState(false);

	const updateSW = registerSW({
		onNeedRefresh() {
			setReload(true);
		},
	});
	return (
		<>
			<Navigation />
			{reload && (
				<button onClick={() => updateSW(reload)}>
					New content available, click here to update
					<img src={loading} alt="loading" width="32" />
				</button>
			)}
		</>
	);
};
