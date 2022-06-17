// import { Tenant } from '@azorakapp/azorak-applab-models';
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
  Sizes,
  TitleCard,
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../../layouts/WebApp';

export const Tenants = (): ReactElement => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log('asdfsdf');
  console.log('searchParams', searchParams);

  // const pathName = useSelector(state => state.router.location.pathname).split(
  //   '/',
  // );

  const projects = [];
  const in_progress = false;
  const initialized = false;

  // const Project = getEntities().Project;

  // console.log('Tenant', Tenant);

  return (
    <Workspace
      background={{
        color: BackgroundColors.Light,
      }}
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
            Add Tenant
          </Button>
        ),
        title: 'Tenants',
      }}
      layout={WebApp}
      title="Tenants"
    >
      <Container margin={{ bottom: Amount.All }}>
        <TitleCard
          label="Total Tenants"
          value={2}
          icon={{
            name: DualLightIcons.Group,
            size: {
              height: Sizes.Large,
              width: Sizes.Large,
            },
          }}
        />
      </Container>

      {!in_progress && projects.length === 0 && initialized ? (
        <Label>You haven't added any tenants yet</Label>
      ) : (
        <DataGrid
          columns={[
            {
              align: AlignHorizontal.Left,
              field: 'name',
              label: 'Name',
              size: { minWidth: '20%' },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Left,
              field: 'lease.property.address',
              label: 'Property',
              size: { minWidth: '20%' },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Center,
              field: 'lease.unit.name',
              label: 'Unit',
              size: { minWidth: '15%' },
              type: Primitives.String,
            },
            {
              align: AlignHorizontal.Center,
              field: 'lease.unit.lease.endDate',
              label: 'Lease Start',
              size: { minWidth: '15%' },
              type: Primitives.DateTime,
            },
            {
              align: AlignHorizontal.Center,
              field: 'lease.unit.lease.rent',
              label: 'Lease End',
              size: { minWidth: '15%' },
              type: Primitives.CurrencyAmount,
            },
            {
              align: AlignHorizontal.Center,
              field: 'analytics.paidOnTime',
              label: 'Paid on Time',
              size: { minWidth: '15%' },
              type: Primitives.Percent,
            },
          ]}
          data={[]}
          header={{
            export: {
              size: { width: 140 },
            },
            search: {
              placeholder: 'Search Tenants',
              size: { width: 220 },
            },
          }}
          onItemClick={(row: Record<string, unknown>) => {
            navigate(`/tenants/${row.id}`);
            console.log(row);
            // setSearchParams({
            //   edit: Tenant.name,
            //   id: row.id,
            // });
          }}
          states={{
            state: {
              loaded: initialized,
              loading: in_progress,
            },
          }}
        />
      )}
    </Workspace>
  );
};
