import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { Code } from '@/once-ui/components';

const components = {
  code: Code,
};

export function Mdx(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

