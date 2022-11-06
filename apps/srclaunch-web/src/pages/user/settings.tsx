// import { useTitle } from '@srclaunch/react-hooks';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  Container,
  Heading,
  Link,
  Orientation,
  Tab,
  Tabs,
  Workspace,
} from '@srclaunch/ui';
import { useDispatch, useSelector } from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect } from 'react';

import { AccessibilityPreferences } from '../../components/settings/AccessibilityPreferences';
import { AppearancePreferences } from '../../components/settings/AppearancePreferences';
import { CommunicationPreferences } from '../../components/settings/CommunicationPreferences';
import { LocalizationSettings } from '../../components/settings/LocalizationSettings';
import { PersonalInformationSettings } from '../../components/settings/PersonalInfoSettings';
import { WebApp } from '../../layouts/web-app';

export const Settings = memo((): ReactElement => {
  // useTitle('Settings - SrcLaunch');
  const dispatch = useDispatch();
  const user = useSelector(state => state);

  console.log('user', user);

  // const updatePreference = async (name: string, value: unknown) => {
  //   // const { error } = await UserService.(userPreferences);
  //   // if (error) {
  //   //   throw error;
  //   // }
  //   // dispatch(getUserDetails());
  // };

  // useEffect(() => {
  // dispatch(getPaymentMethods());
  // analytics.sendPageLoad('budget');
  // }, [dispatch]);

  return (
    <Workspace
      alignHorizontal={AlignHorizontal.Center}
      alignVertical={AlignVertical.Top}
      title="Settings"
      layout={WebApp}
    >
      <Tabs>
        <Tab label="General" selected={true}>
          <Container orientation={Orientation.Horizontal}>
            <Container paddingRight={Amount.Most}>
              <Heading>Localization</Heading>

              <LocalizationSettings />
            </Container>

            <Container paddingLeft={Amount.Most}>
              <Heading>Appearance</Heading>

              <AppearancePreferences />
            </Container>
          </Container>
        </Tab>
        <Tab label="Account">
          <Container
            orientation={Orientation.Horizontal}
            alignVertical={AlignVertical.SpaceBetween}
          >
            <Container paddingRight={Amount.More}>
              <Heading>Personal Info</Heading>

              <PersonalInformationSettings />
            </Container>
          </Container>
        </Tab>

        <Tab label="Billing">
          <Heading>Subscriptions</Heading>
          <Link to="/settings">Settings</Link>
          <Link to="/settings/asdf">Settings asdf</Link>
          <Link to="/asdf">asdf</Link>
        </Tab>

        <Tab label="Communications">
          <Container paddingLeft={Amount.More}>
            <Heading>Communication Preferences</Heading>

            <CommunicationPreferences />
          </Container>
        </Tab>

        <Tab label="Accessibility">
          <Heading>Accessibility Preferences</Heading>

          <AccessibilityPreferences />
        </Tab>
      </Tabs>
    </Workspace>
  );
});
