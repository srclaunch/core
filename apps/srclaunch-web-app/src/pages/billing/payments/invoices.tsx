// import { Project } from '@applab-io/models';
import { DualLightIcons } from '@srclaunch/icons';
import { Primitives } from '@srclaunch/types';
import {
  AlignHorizontal,
  AlignVertical,
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
import { WebApp } from '../../../layouts/WebApp';

export const Invoices = memo((): ReactElement => {
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

  // console.log('Project', Project);

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
            Create a service request
          </Button>
        ),
      }}
      background={{ color: BackgroundColors.Default }}
      depth={Depth.Low}
      layout={WebApp}
      padding={{ all: Amount.Most }}
      title="Invoices"
    >
      <Container>
        <TitleCard
          label="Total Open"
          value={7}
          icon={{
            name: DualLightIcons.Tool,
          }}
        />
      </Container>

      {!in_progress && projects.length === 0 && initialized ? (
        <Label>You haven't added any service requests yet</Label>
      ) : (
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Top,
          }}
          background={{ color: BackgroundColors.Darkest }}
          padding={{ all: 100, top: Amount.All }}
        >
          <DataGrid
            columns={[
              {
                align: AlignHorizontal.Left,
                field: 'name',
                label: 'Name',
                size: {
                  minWidth: 260,
                },

                type: Primitives.String,
              },
              {
                align: AlignHorizontal.Left,
                field: 'type',
                label: 'Type',
                size: {
                  minWidth: 180,
                },
                type: Primitives.String,
              },
              {
                align: AlignHorizontal.Left,
                field: 'active',
                label: 'Active',
                size: { minWidth: 140 },

                type: Primitives.Boolean,
              },
            ]}
            loaded={initialized}
            loading={in_progress}
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
            // onRowClick={(asd: unknown) => {
            //   // dispatch(
            //   //   showDetailsPanel({
            //   //     entity: DomainEntity.Expense,
            //   //     id: expense.id,
            //   //   }),
            //   // );
            // }}
          />
        </Container>
      )}
    </Workspace>
  );
});
