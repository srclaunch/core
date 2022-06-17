// import { ServiceRequest as ServiceRequestModel } from '@azorakapp/azorak-applab-models';
import { DualLightIcons } from '@srclaunch/icons';
import { Primitives } from '@srclaunch/types';
import {
  AlignHorizontal,
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Container,
  DataGrid,
  Depth,
  Label,
  Orientation,
  TitleCard,
  useEntityEditor,
  Workspace,
} from '@srclaunch/ui';
// import {
//   getServiceRequests,
//   ServiceRequestSelectors,
// } from '@azorakapp/azorak-applab-redux-state';
import {
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect } from 'react';

import { store } from '../../index';
// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../layouts/WebApp';

export const ServiceRequests = memo((): ReactElement => {
  const dispatch = useDispatch();
  const { showEntityEditor } = useEntityEditor();
  const state = useSelector(s => s);
  const initialized = false;
  // const serviceRequests = ServiceRequestSelectors.selectAll(store.getState());
  const inProgress = useSelector(
    (state: RootState) => state.serviceRequests?.inProgress,
  );

  useEffect(() => {
    // dispatch(getServiceRequests({ limit: 30 }));
  }, []);

  return (
    <Workspace
      header={{
        actions: (
          <Button
            events={{
              mouse: {
                onClick: () => {
                  showEntityEditor({
                    // new: ServiceRequestModel.name,
                  });
                },
              },
            }}
            // alignSelf={Align.Right}
            // onClick={() => {

            // Entity.Panel.show({
            //   model: ServiceRequestModel.name,
            // });
            // dispatch(
            //   showModelPanel({
            //     model: Project.name,
            //   }),
            // );
            // }}
            type={ButtonType.Primary}
          >
            Create a service request
          </Button>
        ),
        title: 'Service Requests',
      }}
      layout={WebApp}
      title="Service Requests"
    >
      <Container margin={{ bottom: Amount.All }}>
        <TitleCard
          label="Total Open"
          value={7}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />
      </Container>

      {!inProgress && [].length === 0 && initialized ? (
        <Label>You haven't added any service requests yet</Label>
      ) : (
        <DataGrid
          columns={[
            {
              align: AlignHorizontal.Left,
              field: 'subject',
              label: 'Subject',
              size: { width: 300 },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'description',
              label: 'Description',
              size: { width: 400 },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'category',
              label: 'Category',
              size: { width: 150 },
              type: Primitives.Menu,
            },
            {
              align: AlignHorizontal.Center,
              field: 'unit_access_permission',
              label: 'Unit Access Permission',
              size: { width: 180 },
              type: Primitives.Boolean,
            },
          ]}
          loaded={initialized}
          loading={inProgress}
          // data={serviceRequests}
          header={{
            export: {
              size: { width: 140 },
            },
            search: {
              placeholder: 'Search Projects',
              size: { width: 220 },
            },
          }}
          // model={ServiceRequestModel}
          onItemClick={({ id }: { id?: string }) => {
            showEntityEditor({
              // edit: ServiceRequestModel.name,
              id,
            });
          }}
        />
      )}
    </Workspace>
  );
});
