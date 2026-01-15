import { DocsLayout } from '@/components/layout/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      // other props
    >
      {children}
    </DocsLayout>
  );
}