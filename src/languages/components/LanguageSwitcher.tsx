import { ChangeEvent } from 'react';
import Select from '@/common/components/elements/Select';
import { useRouter } from 'next/router';

export default function LanguageSwitcher(): JSX.Element {
	const router = useRouter();
	const languages = [
		{ value: 'en', title: 'English', label: 'Switch to english', icon: <span>🇺🇸</span> },
		{ value: 'fr', title: 'Français', label: 'Passer au français', icon: <span>🇫🇷</span> },
		{ value: 'es', title: 'Español', label: 'Cambiar por español', icon: <span>🇲🇽</span> },
	];
	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, { locale });
	};

	return <Select label='Change Language' id='lang-selector' options={languages} selected={router.locale} onChange={onChange} />;
}
