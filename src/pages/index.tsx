import PageHeader from '@/components/shared/PageHeader';
import Page from '@/layout/Page';
import Link from '@/components/shared/CustomElements/Link';

export default function Home(): JSX.Element {
	return (
		<Page
			title='Mathieu Céraline'
			slogan='Frontend Web Developer, designer, writer.'
			description='Frontend Web Developer, designer, writer.'
		>
			<PageHeader
				title='Hello, I’m Mathieu Céraline 👋🏾'
				intro={
					<span>
						I’m a Frontend Web Developer, Designer as well as a Software Engineering student at Polytechnique
						Montréal. You should <Link href='/projects'>check out my latest works</Link>
						or <Link href='/about'>learn more about me</Link>.
					</span>
				}
			/>

			<main>
				{/* <div className='grid lg:grid-cols-[1fr,2fr] gap-10 '>
						<section>
							<h2 className='text-2xl font-bold'>Latest posts</h2>
							<p className='mt-2 mb-4 font-thin'>On design, code and creativity.</p>
							<Link href='/playground' passHref>
								<a>
									<div className='relative hover:.test:translate-y-10 pb-10'>
										<div className='test absolute w-full h-[105%] top-0 bg-primary-light rounded-xl transition duration-1000 ease-in-out transform hover:translate-y-10  '>
											Jerry{' '}
										</div>
										<ImageCard
											cover={{ url: 'https://source.unsplash.com/450x222/?write' }}
											tags={[{ name: "Mona Lisa isn't who you think she is" }]}
											className='h-80'
										/>
									</div>

									<h3 className='mt-5 font-bold text-md'>Jerry, Personal Portfolio</h3>
								</a>
							</Link>
						</section>
						<section className=''>
							<h2 className='text-2xl font-bold'>What I've been working on</h2>
							<p className='mt-2 mb-4 font-thin'>Here is the last project I had fun with.</p>
							<ImageCard cover={featured.cover} tags={[{ name: 'Jerry, Personal Portfolio' }]} className='h-80' />
						</section>
					</div> */}
				<div className='my-32 md:w-4/6 lg:w-3/6 mx-auto'>
					<p className='text-2xl font-bold italic mb-2 text-center'>
						"The most important ingredient we put into any relationship is not what we say or what we do, but what we
						are."
					</p>
					<p className='text-right'>- Stephen R. Covey</p>
				</div>
				<div className='grid lg:grid-cols-[1fr,4fr] md:grid-cols-[1fr,2fr] sm:grid-cols-[1fr,1fr] gap-10 '>
					{/* <section>
							<h2 className='text-2xl font-bold'>
								Library{' '}
								<span role='img' aria-label='book'>
									📘
								</span>
							</h2>
							<p className='mt-2 mb-4 font-thin'>On design, code and creativity.</p>
							<Link href='/playground' passHref>
								<a>
									<BookCard book={BOOK} />
								</a>
							</Link>
						</section> */}
					{/* <section className=''>
							<h2 className='text-2xl font-bold'>
								Seeding ideas
								<span role='img' className='ml-1' aria-label='plant'>
									🌱
								</span>
							</h2>
							<p className='mt-2 mb-4 font-thin'>
								My recent explorations and uncomplete ideas on design, web development and creativty.
							</p>
							<div className='grid lg:grid-cols-[1fr,1fr,1fr] md:grid-cols-[1fr,1fr] gap-10 '>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey  rounded-lg p-4 flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Best Accessibility Pratices for Web Developers</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey rounded-lg p-4 h-full flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Mona Lisa isn’t who you think she is</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey  rounded-lg p-4 flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Best Accessibility Pratices for Web Developers</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey  rounded-lg p-4 flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Best Accessibility Pratices for Web Developers</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey  rounded-lg p-4 h-full flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Mona Lisa isn’t who you think she is</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
								<Link href='/playground' passHref>
									<a>
										<div
											className='dark:bg-darkGrey  rounded-lg p-4 h-full flex flex-col justify-center'
											style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.68)' }}
										>
											<h3 className='text-md mb-2'>Mona Lisa isn’t who you think she is</h3>
											<div>
												<span className='text-[#69AE22]'>
													<span role='img' className='mr-1' aria-label='plant'>
														🌱
													</span>
													{'  '}
													Seeding
												</span>
												<span className='text-[#C4C4C4]'>
													<span className='mx-3'>•</span>May 24th, 2021
												</span>
											</div>
										</div>
									</a>
								</Link>
							</div>
						</section> */}
				</div>
			</main>
		</Page>
	);
}
