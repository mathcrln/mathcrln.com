import { ChangeEvent } from 'react';
import Select from '@/common/components/elements/Select';
import { useRouter } from 'next/router';

export default function LanguageSwitcher(): JSX.Element {
	const router = useRouter();
	const languages = [
		{
			value: 'en',
			title: 'EN',
			label: 'Switch to english',
			icon: (
				<span role='img' aria-label='US flag'>
					🇺🇸
				</span>
			),
		},
		{
			value: 'fr',
			title: 'FR',
			label: 'Passer au français',
			icon: (
				<span role='img' aria-label='French flag'>
					🇫🇷
				</span>
			),
		},
		{
			value: 'es',
			title: 'ES',
			label: 'Cambiar por español',
			icon: (
				<span role='img' aria-label='Mexican flag'>
					🇲🇽
				</span>
			),
		},
	];
	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, { locale });
	};

	return <Select label='Change Language' id='lang-selector' options={languages} selected={router.locale} onChange={onChange} />;
}
