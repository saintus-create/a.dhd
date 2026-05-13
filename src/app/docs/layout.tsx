import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import 'fumadocs-ui/style.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Link href="/a.dhd/" className="font-bold tracking-tight">
            ADHD Safety Hub
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
