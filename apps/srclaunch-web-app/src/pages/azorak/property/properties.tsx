// import { Property } from '@azorakapp/azorak-applab-models';
// import {
//   getProperties,
//   PropertySelectors,
// } from '@azorakapp/azorak-applab-redux-state';
import {
  AlignHorizontal,
  AlignVertical,
  Button,
  ButtonType,
  Container,
  Image,
  Label,
  MediaGrid,
  Orientation,
  TextColors,
  TextSize,
  TextWeight,
  useEntityEditor,
  Workspace,
} from '@srclaunch/ui';
import {
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { store } from '../../../index';
import { WebApp } from '../../../layouts/WebApp';

export const Properties = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { showEntityEditor } = useEntityEditor();
  const [searchParams, setSearchParams] = useSearchParams();
  // const properties = PropertySelectors.selectAll(store.getState());
  const inProgress = useSelector(
    (state: RootState) => state.properties?.inProgress,
  );

  // console.log('properties', properties);

  useEffect(() => {
    // dispatch(getProperties({ limit: 30 }));
  }, []);

  return (
    <Workspace
      header={{
        actions: (
          <Button
            // alignSelf={Align.Right}
            events={{
              mouse: {
                onClick: () => {
                  setSearchParams({
                    new: 'Property',
                  });
                },
              },
            }}
            type={ButtonType.Primary}
          >
            Add Property
          </Button>
        ),
        title: 'Properties',
      }}
      layout={WebApp}
      title="Properties"
    >
      {!inProgress && [].length === 0 ? (
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
        >
          <Image
            // marginBottom={Amount.Default}
            url="/images/test3.png"
            // height={250}
            size={{ width: 250 }}
          />
          <Label
            textColor={TextColors.Light}
            textSize={TextSize.Large}
            textWeight={TextWeight.More}
          >
            You haven&apos;t added any properties yet
          </Label>
        </Container>
      ) : (
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Top,
          }}
        >
          <MediaGrid
            // @ts-ignore
            items={properties.map(property => {
              return {
                description: property.description,
                image: property.images?.[0],
                menu: property.id
                  ? [
                      {
                        label: 'Edit',
                        onClick: ({ id }: { id: string }) => {
                          showEntityEditor({
                            // edit: Property.name,
                            id,
                          });
                        },
                      },
                    ]
                  : undefined,
                size: {
                  height: 220,
                },
                title: property.name ?? property.street_address ?? '',
                url: `/properties/${property.id}`,
              };
            })}
            states={{
              state: {
                loading: inProgress,
              },
            }}
          />
        </Container>
      )}
    </Workspace>
  );
});
