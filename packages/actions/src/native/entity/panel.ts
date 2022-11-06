import { Model } from '@srclaunch/types';
const window = (
  global as {
    readonly window?: {
      readonly history: {
        readonly pushState: (
          state: unknown,
          title: string,
          url: string,
        ) => void;
      };
      readonly location: {
        readonly pathname?: string;
        readonly search: string;
      };
    };
  }
).window;

export const Panel = {
  hide: () => {
    const searchParameters = new URLSearchParams(window?.location?.search);

    searchParameters.delete('edit');
    searchParameters.delete('new');
    searchParameters.delete('view');

    const newRelativePathQuery =
      window?.location.pathname +
      (searchParameters.toString().length > 0
        ? `?${searchParameters.toString()}`
        : '');

    window?.history.pushState(null, '', newRelativePathQuery);
    // window.location.search = searchParams.toString();
  },
  show: ({
    edit,
    id,
    model,
  }: {
    readonly edit?: boolean;
    readonly id?: string;
    readonly model: Model['name'];
  }) => {
    const searchParameters = new URLSearchParams(window?.location.search);

    if (id && edit) {
      searchParameters.set('edit', `${model}/${id}`);
    } else if (id) {
      searchParameters.set('view', `${model}/${id}`);
    } else {
      searchParameters.set('new', model);
    }

    const newRelativePathQuery = `${
      window?.location.pathname
    }?${searchParameters.toString()}`;

    console.log('newRelativePathQuery', newRelativePathQuery);

    window?.history.pushState(null, '', newRelativePathQuery);
    // window.location.search = searchParams.toString();
  },
};
