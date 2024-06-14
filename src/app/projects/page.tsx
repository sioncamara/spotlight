import { type Metadata } from 'next'
import Image from 'next/image'

import { Card, ChevronRightIcon } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import twitter from '@/images/logos/twitter.png'
import markdownViewer from '@/images/logos/markdown-viewer.png'
import logoPorfolio from '@/images/avatar.ico'
import flowReader from '@/images/logos/flow-reader.png'
import Link from 'next/link'
import clsx from 'clsx'

const projects = [
  {
    name: 'Porfolio',
    description: {
      content:
        'The website you are looking at right now.\n\nBuilt with a professional user experience in mind.',
    },
    link: { href: 'https://github.com/sioncamara/spotlight', label: 'github.com' },
    logo: logoPorfolio,
    readMore: 'portfolio',
  },
  {
    name: 'Blue-bird',
    description: {
      content:
        'A Twitter clone project based on the  <span class="group-hover/desc:text-teal-500 hover:underline">egghead.io</span> course, used as a primer for understanding Next.js App Router, React Server Components, and Supabase documentation and technology.',
      hasLink: true,
      link: 'https://egghead.io/courses/build-a-twitter-clone-with-the-next-js-app-router-and-supabase-19bebadb',
    },
    link: {
      href: 'https://blue-bird-psi-nine.vercel.app/',
      label: 'bluebird.app',
    },
    gitLink: {
      href: 'https://github.com/sioncamara/blue-bird',
      label: 'github.com',
    },
    logo: twitter,
  },
  {
    name: 'Flow Reader',
    description: {
      content:
        'Built an application to improve my reading experience by having it read for me.',
    },
    link: {
      href: 'https://flow-reader-rose.vercel.app/',
      label: 'flowreader.app',
    },
    gitLink: {
      href: 'https://github.com/sioncamara/flow-reader',
      label: 'github.com',
    },
    logo: flowReader,
    readMore: 'flow-reader',
  },
  {
    name: 'Markdown Viewer',
    description: {
      content:
        'A specialized markdown editor built with Next.js, react, and Tailwind CSS, designed to efficiently listen to chatbot responses.',
    },
    link: {
      href: 'https://custom-md-viewer.vercel.app/',
      label: 'mdviewer.app',
    },
    gitLink: {
      href: 'https://github.com/sioncamara/Custom-MD-Viewer',
      label: 'github.com',
    },
    logo: markdownViewer,
    readMore: 'md-viewer',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've worked on outside of work to improve my skills."
      intro="Not only have these projects improved my skills, but they have also solved a personal problem for me, with the exception of the Twitter clone."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link
                href={
                  project.readMore
                    ? `/projects/${project.readMore}`
                    : project.gitLink
                      ? project.gitLink.href
                      : project.link.href
                }
                target={project.readMore ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description
              className={
                project.description.hasLink ? 'group/desc peer/desc z-30' : ''
              }
            >
              {project.description.hasLink ? (
                <a
                  className="block"
                  href={project.description.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{
                    __html: project.description.content,
                  }}
                />
              ) : (
                project.description.content
              )}
            </Card.Description>
            <Link
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'peer/pl relative z-30 mt-6 flex cursor-pointer text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200',
                '',
              )}
            >
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </Link>

            {project.gitLink && (
              <Link
                href={project.gitLink.href}
                className={clsx(
                  'peer/gitLink relative z-30 mt-2 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200',
                  'peer-hover/pl:text-zinc-400',
                  !project.readMore &&
                    ' group-hover:text-teal-500 peer-hover/desc:text-zinc-400 peer-hover/pl:text-zinc-400',
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.gitLink?.label}</span>
              </Link>
            )}
            {project.readMore && (
              <div
                className={clsx(
                  'z-10 mt-4 flex cursor-pointer items-center text-sm font-medium text-zinc-500 group-hover:text-teal-500 dark:text-zinc-200',
                  'peer-hover/desc:text-zinc-400 peer-hover/gitLink:text-zinc-400 peer-hover/pl:text-zinc-400',
                )}
              >
                <span>Read more</span>
                <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
              </div>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
