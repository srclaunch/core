// import { useTitle } from '@srclaunch/react-hooks';
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
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../layouts/WebApp';

export const Documents = memo((): ReactElement => {
  // useTitle('AppLab - Projects');

  // const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log('searchParams', searchParams);

  // const pathName = useSelector(state => state.router.location.pathname).split(
  //   '/',
  // );

  const projects = [];
  const in_progress = false;
  const initialized = false;

  // const Project = getEntities().Project;

  return (
    <Workspace
      header={{
        actions: (
          <Button
            // alignSelf={Align.Right}
            // onClick={() => {
            // setSearchParams({
            //   new: Project.name,
            // });
            // dispatch(
            //   showModelPanel({
            //     model: Project.name,
            //   }),
            // );
            // }}
            type={ButtonType.Primary}
          >
            Create a new document
          </Button>
        ),
        title: 'Documents',
      }}
      layout={WebApp}
      title="Documents"
    >
      <Container margin={{ bottom: Amount.All }}>
        <TitleCard
          label="Total Documents"
          value={3}
          icon={{ name: DualLightIcons.Document }}
        />
      </Container>

      {!in_progress && projects.length === 0 && initialized ? (
        <Label>You haven't added any documents yet</Label>
      ) : (
        <DataGrid
          columns={[
            {
              align: AlignHorizontal.Left,
              field: 'name',
              label: 'Name',
              size: {
                minWidth: 260,
                width: '40%',
              },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'type',
              label: 'Type',
              size: {
                minWidth: 180,
                width: '20%',
              },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'active',
              label: 'Active',
              size: {
                minWidth: 140,
                width: '10%',
              },
              type: Primitives.Boolean,
            },
          ]}
          data={[
            {
              active: true,
              name: 'Web App',
              type: 'web_app',
            },
          ]}
          header={{
            export: {
              size: { width: 140 },
            },
            search: {
              placeholder: 'Search Projects',
              size: { width: 220 },
            },
          }}
          loaded={initialized}
          loading={in_progress}

          // onRowClick={(asd: unknown) => {
          //   // dispatch(
          //   //   showDetailsPanel({
          //   //     entity: DomainEntity.Expense,
          //   //     id: expense.id,
          //   //   }),
          //   // );
          // }}
        />
      )}
    </Workspace>
  );
});
