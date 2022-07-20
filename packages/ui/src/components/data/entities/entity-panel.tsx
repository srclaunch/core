// import { Entity } from '@srclaunch/actions';
import { HttpClient } from '@srclaunch/http-client';
import { BasicIcons } from '@srclaunch/icons';
import { RootState, useDispatch, useSelector } from '@srclaunch/web-app';
import { camelCase, capitalCase } from 'change-case';
import pluralize from 'pluralize';
import { memo, ReactElement, useEffect, useState } from 'react';

import { useEntityEditor } from '../../../lib/hooks/use-entity-editor';
import { Amount, Colors, TextColors } from '../../../types';
import {
  Container,
  ContainerProps as ContainerProperties,
} from '../../layout/container';
import { ModalHeader } from '../../modals/modal-header';
import { SlidePanel } from '../../modals/slide-panel';
import { LoadingOverlay } from '../../progress/loading-overlay';
import { EntityEditor } from './entity-editor';
import { EntityPreview } from './entity-preview';

type EntityPanelProperties = ContainerProperties & {
  readonly actions?: Record<
    string,
    (...arguments_: readonly unknown[]) => unknown
  >;
  readonly httpClient?: typeof HttpClient;
};

export const EntityPanel = memo(
  ({ actions, ...properties }: EntityPanelProperties): ReactElement => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    // const [model, setModel] = useState<Model | null>();
    const { entity, model, mode, hideEntityEditor } = useEntityEditor();

    const entityState = useSelector(
      (state: RootState) => state[`${camelCase(pluralize(model?.name ?? ''))}`],
    );
    const inProgress =
      entityState?.action[`create${model?.name}`].inProgress ||
      entityState?.action[`delete${model?.name}`].inProgress ||
      entityState?.action[`get${model?.name}`].inProgress ||
      entityState?.action[`update${model?.name}`].inProgress;

    useEffect(() => {
      if (model) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, [model]);

    // const id = entity?.id;
    // const newEntity = !id;
    // const edit = searchParams.get('edit');

    // console.log('newEntity', newEntity);

    // useEffect(() => {
    //   if (entityModel && id) {
    //     const stateModel = models[entityModel];

    //     if (stateModel) {
    //       setModel(stateModel);
    //       setVisible(true);
    //     } else {
    //       setModel(null);
    //       setVisible(false);
    //     }
    //   } else {
    //     setModel(null);
    //     setVisible(false);
    //   }
    // }, [entityModel, id, models]);
    // //
    // const editItem = {
    //   label: 'Edit',
    //   onClick: () => dispatch(showModelPanel({ edit: true, id, model })),
    // };

    // const detailsItem = {
    //   label: 'Details',
    //   onClick: () => dispatch(showModelPanel({ id, model })),
    // };

    // const deleteItem = {
    //   color: 'rgba(237, 81, 66, 1)',
    //   icon: Icon.TrashCan,
    //   label: 'Delete',
    //   onClick: () => {
    //     console.log('adsf');
    //     // showModal(true),
    //   },
    // };

    const getContent = () => {
      if (model && entity?.id && mode.edit) {
        return <EntityEditor actions={actions} model={model} id={entity.id} />;
      }

      if (model && entity?.id && mode.view) {
        return <EntityPreview model={model} id={entity.id} />;
      }

      if (model && !entity?.id) {
        return <EntityEditor actions={actions} model={model} />;
      }

      return;
    };

    const getHeaderTitle = () => {
      if (model && entity?.id && mode.edit) {
        return `Edit ${capitalCase(model.name)}`;
      }

      if (model && entity?.id) {
        return `${capitalCase(model.name)} Preview`;
      }

      if (model && !entity?.id) {
        return `New ${capitalCase(model.name)}`;
      }

      return '';
    };

    return (
      <SlidePanel
        states={{
          state: {
            visible,
          },
        }}
      >
        <Container borderRadius={{ all: Amount.Default }} {...properties}>
          <LoadingOverlay states={{ state: { visible: inProgress } }} />

          <ModalHeader
            onCloseClick={() => hideEntityEditor()}
            moreMenu={
              entity?.id
                ? {
                    menu: [
                      {
                        events: {
                          mouse: {
                            onClick: () => {
                              if (model && entity?.id) {
                                const deleteFunction =
                                  actions?.[`delete${model.name}`];

                                if (deleteFunction)
                                  dispatch(deleteFunction(entity.id));
                              }
                            },
                          },
                        },
                        icon: {
                          color: Colors.Error,
                          name: BasicIcons.TrashCan,
                          // size: Sizes.Smaller,
                        },
                        label: 'Delete',
                        textColor: TextColors.Error,
                      },
                    ],
                  }
                : undefined
            }
            title={<>{getHeaderTitle()}</>}
          />

          <Container
            padding={{ all: Amount.Default }}
            // scrollable
            style={{
              top: '60px !important',
            }}
          >
            {getContent()}
          </Container>
        </Container>
      </SlidePanel>
    );
  },
);
