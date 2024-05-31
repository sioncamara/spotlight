import { type Metadata } from 'next'
import Resume from '@/components/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Here is my resume with a clear layout with the option to download.',
}

export default function ResumePage() {
  return <Resume />
}
