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
        {/* <ExternalLinkIcon className="h-2 w-2 ml-0 flex-none stroke-zinc-800 stroke-[20] transition group-hover:stroke-teal-500" /> */}
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
  description: "Allow me to introduce myself: I'm Sion Wilks.",
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
            {"Allow me to introduce myself: I'm Sion Wilks."}
          </h1>
          <div className="-mb-16 mt-6 space-y-10 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Unlike most engineers, I don’t enjoy building things just for the
              sake of it, and I was never drawn to Legos growing up. Instead, I
              was the kid who spent countless hours customizing my Android
              phone, often dedicating more time to enhancing its user experience
              than actually using it. I love creating things to derive tangible
              value from them. For me, this means building interfaces and user
              experiences that allow users to get the most out of the complex
              systems they are interacting with under the hood.
            </p>
            <p>
              Earning my <b>computer science</b> degree at UW-Madison was
              intellectually rewarding, but there was a tendency to look down on
              UX and UI work as not {'"real"'} engineering. It took some time in
              the industry for me to reconcile my passion for delightful user
              experiences with my desire to do intricate engineering work. Once I
              realized that front-end engineering can be as complex as back-end
              engineering, but with a unique focus on user experience, I
              embraced it fully.
            </p>
            <p>
              {"I've"} immersed myself in front-end engineering, learning from
              respected educators like Josh Comeau and more controversial
              figures like Theo. Over the past year and a half,{' '}
              <b>my weekends</b> have been dedicated to understanding
              open-source libraries, building web applications to consolidate my
              knowledge, and continually improving my skills. Additionally, I
              have been working as a <b>Front-end Engineer at Target</b> since
              graduating college, focusing on internal applications for{' '}
              {"Target's"} supply chain.
            </p>
            <p>
              A major factor in my rapid upskilling has been <b>leveraging</b> the 
              latest <b>chatbot</b> capabilities, alongside cutting-edge tools and custom
              workflow processes {"I've"} developed. This innovative approach has
              significantly <b>accelerated</b> my <b>learning</b> and broadened my expertise
              in front-end engineering.
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
