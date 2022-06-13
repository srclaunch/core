// import { Project } from '@applab-io/models';
import {
  Amount,
  BackgroundColors,
  Button,
  ButtonType,
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../../layouts/WebApp';

export const Invoice = memo((): ReactElement => {
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
        title: 'Invoice',
      }}
      background={{ color: BackgroundColors.Default }}
      layout={WebApp}
      padding={{ all: Amount.Most }}
      title="Invoice"
    ></Workspace>
  );
});
