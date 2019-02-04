import React from 'react';
import logo from '../../svg/logo.svg';
import { Info } from './Info';
import { Actions } from './Actions';
import { avatarUrl } from './avatarUrl';
import {
  ViewerWrapper,
  Header,
  Runner,
  InfoActions,
  Logo,
  HeaderAvatar,
  headerHeight
} from './styles';

export const Viewer = () => {
  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();
  const title = 'Visualization Title';
  const viewCount = 1234;
  const upvotes = 2345;
  const downvotes = 5;

  return (
    <ViewerWrapper>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActions>
        <Info
          title={title}
          viewCount={viewCount}
          user={ownerUser}
          publishDate={publishDate}
        />
        <Actions upvotes={upvotes} downvotes={downvotes} />
      </InfoActions>
    </ViewerWrapper>
  );
};
