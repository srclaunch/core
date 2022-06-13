// import { Project } from '@applab-io/models';
// import { useTitle } from '@srclaunch/hooks';
import { BasicIcons } from '@srclaunch/icons';
import {
  AlignVertical,
  Amount,
  BackgroundColors,
  Container,
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

export const Analytics = memo((): ReactElement => {
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
        title: 'Analytics',
      }}
      layout={WebApp}
      title="Analytics"
    >
      <Container margin={{ bottom: Amount.All }}>
        <TitleCard
          label="Total Projects"
          value={7}
          icon={{
            name: BasicIcons.AppSubscription,
          }}
        />

        <TitleCard
          label="Total Apps"
          value={3}
          icon={{ name: BasicIcons.AppStore }}
        />

        <TitleCard
          label="Total Services"
          value={4}
          icon={{ name: BasicIcons.ServiceVan }}
        />
      </Container>

      {!in_progress && projects.length === 0 && initialized ? (
        <Label>You haven't added any projects yet</Label>
      ) : (
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Top,
          }}
          padding={{ top: Amount.Default }}
        ></Container>
      )}
    </Workspace>
  );
});
