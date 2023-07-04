import Image from 'next/legacy/image';
import mathieu from '@/public/mathieu.jpg';
import martinique from '@/public/martinique.jpg';
import PageHeader from '@/common/components/PageHeader';
import Page from '@/common/components/layout/Page';

export default function About(): JSX.Element {
	return (
		<Page
			seo={{
				title: 'About',
				description:
					'If you and I are to become friends, I guess it’s about time I introduce myself. Get to know more about me .',
			}}
		>
			<PageHeader title='Who am I?'>
				<span>
					If you and I are to become friends, <br className='hidden md:inline' />I guess it’s about time I introduce
					myself.
				</span>
			</PageHeader>

			<div className='mx-auto my-20 lg:max-w-[1200px]'>
				<div className='grid items-center gap-10 lg:grid-cols-[1fr,1fr]'>
					<Image
						src={mathieu}
						height={308}
						width={532}
						alt=''
						placeholder='blur'
						layout='responsive'
						className='order-last rounded-xl md:order-first'
					/>
					<div className='text-md space-y-6 '>
						<h2 className='mb-8 text-2xl'>
							Hello there{' '}
							<span role='img' aria-label='waving hand'>
								👋🏾
							</span>
						</h2>

						<p>
							I’m Mathieu Céraline, a Front-End Developer passionate about beautiful designs, simplicity and
							accessibility.
						</p>
						<p>
							I’m currently a Software Engineering Student at Polytechnique Montréal.{' '}
							<span role='img' aria-label='Canadian Flag'>
								🇨🇦
							</span>
						</p>
						<p>
							Looking for me ? You’ll usually find me either creating or learning and sharing the insights I find
							either on my blog, newsletter or podcast.
						</p>
					</div>
				</div>
			</div>
			<div className=' mx-auto my-20 lg:max-w-[1200px]'>
				<div className='grid items-center gap-10 lg:grid-cols-[1fr,1fr]'>
					<div className='text-md space-y-6 '>
						<h2 className='mb-8 text-2xl'>
							Do you know Martinique? I grew up there
							<span role='img' aria-label='waving hand'>
								🌴
							</span>
						</h2>

						<p>
							A couple decades ago, I was born in <strong>Martinique</strong>, a tiny, yet beautiful and warm French
							island in the Caribbean.
						</p>
						<p>
							Then, I traveled to Paris{' '}
							<span role='img' aria-label='French Flag'>
								🇫🇷
							</span>{' '}
							where I earned a Digital Marketing and E-Business degree at ECITV Paris.
						</p>
						<p>
							Beside studying, I love take pictures, design, play chess, read books and sing badly in the shower
							<span role='img' aria-label='Shower'>
								🚿
							</span>
							.
						</p>
					</div>
					<Image
						src={martinique}
						height={308}
						width={532}
						alt=''
						placeholder='blur'
						layout='responsive'
						className='order-last rounded-xl md:order-first'
					/>
				</div>
			</div>
		</Page>
	);
}
