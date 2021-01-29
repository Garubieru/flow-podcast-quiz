import React from 'react';
import { FiYoutube, FiTwitch, FiTwitter } from 'react-icons/fi';

import { IconsWrapper, IconLink } from './styles';

export default function FlowSocialIcons() {
  return (
    <IconsWrapper>
      <IconLink
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://www.youtube.com/channel/UC4ncvgh5hFr5O83MH7-jRJg"
        colorHover="#C4302B"
      >
        <FiYoutube />
      </IconLink>
      <IconLink
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://www.twitch.tv/flowpodcast"
        colorHover="#6441A5"
      >
        <FiTwitch />
      </IconLink>
      <IconLink
        whileHover={{ scale: 1.1 }}
        target="_blank"
        href="https://twitter.com/flowpdc"
        colorHover="#08a09e"
      >
        <FiTwitter />
      </IconLink>
    </IconsWrapper>
  );
}
