import React from 'react';
import ContentLoader from 'react-content-loader';

const HotLoading = (props) => (
  <ContentLoader
    speed={2}
    width={150}
    height={270}
    viewBox="0 0 150 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#5693f5"
    {...props}>
    <rect x="9" y="208" rx="4" ry="4" width="150" height="20" />
    <rect x="9" y="9" rx="0" ry="0" width="150" height="190" />
    <rect x="9" y="235" rx="4" ry="4" width="150" height="20" />
  </ContentLoader>
);

export default HotLoading;
