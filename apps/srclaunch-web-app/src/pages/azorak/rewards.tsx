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

export const Rewards = memo((): ReactElement => {
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
            Create a new reward
          </Button>
        ),
        title: 'Rewards',
      }}
      layout={WebApp}
      title="Rewards"
    >
      <Container margin={{ bottom: Amount.All }}>
        <TitleCard
          label="Total Rewards"
          value={7}
          icon={{
            name: DualLightIcons.Gift,
          }}
        />

        <TitleCard
          label="Total Rewards Redeemed"
          value={3}
          icon={{ name: DualLightIcons.Gift }}
        />
      </Container>

      {!in_progress && projects.length === 0 && initialized ? (
        <Label>You haven't added any rewards yet</Label>
      ) : (
        <DataGrid
          columns={[
            {
              align: AlignHorizontal.Left,
              field: 'name',
              label: 'Name',
              size: { minWidth: 260 },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'type',
              label: 'Type',
              size: { minWidth: 180 },
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
      )}
    </Workspace>
  );
});
