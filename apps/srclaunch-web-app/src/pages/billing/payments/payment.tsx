// import { Project } from '@applab-io/models';
// import { DualLightIcons } from '@srclaunch/icons';
// import { Primitives } from '@srclaunch/types';
import {
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Depth,
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../../layouts/WebApp';

export const Payment = memo((): ReactElement => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log('searchParams', searchParams);

  // const pathName = useSelector(state => state.router.location.pathname).split(
  //   '/',
  // );

  // const projects = [];
  // const in_progress = false;
  // const initialized = false;

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
      title="Payment"
    ></Workspace>
  );
});
