import React from 'react';
import { Text, Row, Avatar, Grid, Tooltip, Badge } from '@nextui-org/react';

const Member = (props) => {
  const { username, avatar, status, id } = props;
  console.log(props);
  if (!username || !avatar || !status) return null;

  let statusColor;
  if (status === 'online') statusColor = 'success';
  if (status === 'idle') statusColor = 'warning';
  if (status === 'dnd') statusColor = 'error';

  return (
    <Tooltip
      className='member'
      id={id}
      content={
        <Grid.Container>
          <Row>
            <Text b>{username}</Text>
          </Row>
        </Grid.Container>
      }
    >
      <Avatar
        key={'user_' + id}
        src={avatar}
        size='lg'
        color={statusColor}
        bordered
        css={{
          transition: 'all 0.1s ease-in-out',
        }}
      />
    </Tooltip>
  );
};

export const Members = (props) => {
  return (
    <Grid.Container gap={2} className='members'>
      {props.result.members
        .sort((a, b) => a.username.localeCompare(b.username) || 0)
        .map((member) => {
          return (
            <Member
              key={member.id}
              id={member.id}
              status={member.status}
              username={member.username}
              avatar={member.avatar_url}
            />
          );
        })}
      {/* {
        // checking presence_count and subtracting the length of the members array
        props.result.presence_count - props.result.members.length > 0 && ( // if the difference is greater than 99 then display 99+ else display the difference
          <div className='member'>
            <Avatar
              text={
                props.result.presence_count - props.result.members.length > 99
                  ? '99+'
                  : props.result.presence_count - props.result.members.length
              }
              size='lg'
              css={{
                opacity: '1 !important',
              }}
            />
          </div>
        )
      } */}
      <MembersOverflows result={props.result} />
    </Grid.Container>
  );
};

const MembersOverflows = (props) => {
  const { result } = props;
  const totalMembers = result.presence_count;
  const memberCountOverflow = totalMembers - result.members.length;

  const displayedOverflow =
    memberCountOverflow > 99 ? '99+' : `+${memberCountOverflow}`;

  console.log('displayedOverflow', displayedOverflow);

  if (memberCountOverflow > 0)
    return (
      <Badge
        className='member'
        css={{
          width: '48px',
          height: '48px',
        }}
      >
        {displayedOverflow}
      </Badge>
    );
  else return null;
};
