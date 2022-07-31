import React, { Fragment } from 'react';
import Media from 'react-media';

import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div>
      <Media
        queries={{
          small: '(max-width: 400px)',
          medium: '(min-width: 401px) and (max-width: 1199px)',
          large: '(min-width: 1200px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <Oval
                height={50}
                width={50}
                color="#4A56E2"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#C5BAFF"
                strokeWidth={5}
                strokeWidthSecondary={5}
              />
            )}
            {matches.medium && (
              <Oval
                height={70}
                width={70}
                color="#4A56E2"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#C5BAFF"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            )}
            {matches.large && (
              <Oval
                height={80}
                width={80}
                color="#4A56E2"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#C5BAFF"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}
