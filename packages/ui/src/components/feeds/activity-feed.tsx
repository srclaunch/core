import { Activity } from '@srclaunch/types';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { memo, ReactElement } from 'react';

import { getActivityLabel } from '../../lib/activity';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Orientation,
  TextDecorationPosition,
  TextSize,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { Container, ContainerProps } from '../layout/container';
import { Label } from '../typography/label';
import { DateLabel } from '../typography/labels/dates/date-label';
import { UserLabel } from '../typography/labels/people/user-label';
import { Link } from '../typography/link';

const ActivityFeedItem = memo(
  ({
    dateFormat = DateTime.DATE_FULL,
    who,
    when,
    what,
    where,
  }: ContainerProps<
    Activity & {
      readonly dateFormat?: DateTimeFormatOptions;
    }
  >): ReactElement => {
    return (
      <Container orientation={Orientation.Horizontal} className="activity-item">
        {who && (
          <UserLabel
            image={who.image}
            name={who.name}
            // size={Size.Small}
            to={who.to}
          />
        )}

        {what && (
          <Container orientation={Orientation.Horizontal} marginLeft={-2}>
            <Label marginRight={3} textSize={TextSize.Default}>
              {getActivityLabel(what.name)}
            </Label>

            {what.to ? (
              <Link
                to={what.to}
                hovered={{
                  textDecorationPosition: TextDecorationPosition.Underline,
                }}
                state={{}}
                textDecorationPosition={TextDecorationPosition.None}
              >
                {what.label}
              </Link>
            ) : (
              what.label
            )}
          </Container>
        )}
        {where && (
          <Label
            alignHorizontal={AlignHorizontal.Center}
            marginLeft={-2}
            textSize={TextSize.Default}
          >
            {where}
          </Label>
        )}

        <Label marginLeft={3}>on</Label>

        {when && (
          <DateLabel
            format={dateFormat}
            marginLeft={3}
            textSize={TextSize.Default}
            value={when}
          />
        )}
      </Container>
    );
  },
);

export const ActivityFeed = memo(
  ({
    activities,
    className = '',
    dateFormat = DateTime.DATE_MED,
    ...props
  }: ContainerProps<{
    readonly activities: readonly Activity[];
    readonly dateFormat?: DateTimeFormatOptions;
  }>): ReactElement => {
    return (
      <Container className={`${className} activity-feed`} {...props}>
        {activities.map((activity, key) => {
          return (
            <Container key={key}>
              {key !== 0 && key !== activities.length && (
                <Container
                  backgroundColor={BackgroundColor.Lighter}
                  borderRadius={Amount.Default}
                  marginBottom={5}
                  marginTop={5}
                  // marginLeft={convertSizeToAmount(Size.Default)}
                  height={12}
                  width={5}
                  style={{
                    transform: 'translateX(-2px)',
                  }}
                />
              )}

              <ActivityFeedItem {...activity} />
            </Container>
          );
        })}

        <Container
          alignHorizontal={AlignHorizontal.Center}
          alignVertical={AlignVertical.Center}
          borderTopColor={BorderColor.Light}
          marginTop={Amount.Default}
          paddingBottom={Amount.None}
          paddingLeft={Amount.Default}
          paddingRight={Amount.Default}
          paddingTop={Amount.Default}
        >
          <Button
            type={ButtonType.Primary}
            // size={Size.Small}
          >
            Load more
          </Button>
        </Container>
      </Container>
    );
  },
);
