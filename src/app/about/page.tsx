import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  ExternalLinkIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  includeExternalIcon = true,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  includeExternalIcon?: boolean
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
        {includeExternalIcon && (
          <ExternalLinkIcon className="ml-0 h-2 w-2 flex-none stroke-zinc-800 stroke-[20] transition group-hover:stroke-teal-500 dark:stroke-zinc-200" />
        )}
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: "I’m Sion Wilks, a front-end engineer building interfaces where complexity disappears behind clarity.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {"I’m Sion Wilks, a front-end engineer who builds interfaces where complexity disappears behind clarity."}
          </h1>
          <div className="-mb-16 mt-6 space-y-10 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              At Target, I’ve led the front end for internal supply-chain tools—modernizing legacy systems with React, TypeScript, and Figma-driven design systems. My work has ranged from building full scheduling modules that replaced vendor platforms to refectoring large codebases that cut feature delivery time by a third.
            </p>
            <p>
              Outside of work, I build projects that push my limits—like Flow Reader, a Next.js-based PDF reader with real-time text-to-speech synchronization, an experiment in precision timing, parsing, and accessibility. Alongside my engineering projects, I’ve also completed extensive business education, studying works like The Personal MBA and Running Lean and applying their principles through hands-on startup modeling and documentation.
            </p>
            <p>
              I care deeply about human-centered engineering: designing elegant systems that serve real cognitive needs. I move fast, learn aggressively, and leverage new tools (from Cursor to AI-assisted workflows) to iterate at the edge of what’s possible in front-end engineering.
            </p>
          </div>
        </div>
        <div className="pt-16 lg:pl-20 lg:pt-0">
          <ul role="list">
            <SocialLink
              href="https://github.com/sioncamara"
              icon={GitHubIcon}
              className="mt-4"
            >
              View my GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/sion-wilks"
              icon={LinkedInIcon}
              className="mt-4"
            >
              View my LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:sionwilks@gmail.com"
              icon={MailIcon}
              includeExternalIcon={false}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              sionwilks@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
