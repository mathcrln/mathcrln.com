import getStrapiMedia from '@/utils/getStrapiMedia';
import Image from 'next/dist/client/image';
import { ISkill } from 'src/types/skill';

type Props = {
	skill: ISkill;
	className?: string;
};

export default function Skill({ skill, className }: Props): JSX.Element {
	const { url } = getStrapiMedia(skill.icon);
	return (
		<span className={className || ''}>
			<span className='flex items-center space-x-1'>
				<Image src={url} height={18} width={18} layout='fixed' alt={skill.name} />
				<span>{skill?.name}</span>
			</span>
		</span>
	);
}
