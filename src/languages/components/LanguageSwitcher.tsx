import Select, { IOption } from '@/common/components/elements/Select';

type ILanguageSwitcher = {
	languages: IOption[];
	language: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function LanguageSwitcher({ languages, language, onChange }: ILanguageSwitcher): JSX.Element {
	return <Select label='Change Language' id='lang-selector' options={languages} selected={language} onChange={onChange} />;
}
