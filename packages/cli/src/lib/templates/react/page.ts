export function getReactPageComponentTemplate({
  name,
  title,
}: {
  readonly name: string;
  readonly title?: string;
}): string {
  return `import { Page, PageTitle } from '@srclaunch/ui';

export const ${name} = () => {
  return (
    <Page title="${title}">
      <PageTitle title="${title}" />
    </Page>
  );
};`;
}
