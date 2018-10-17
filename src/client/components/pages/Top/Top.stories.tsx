import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { gql } from 'apollo-boost';
import { Top } from '.';

const stories = storiesOf('components/pages/Top', module);

const GET_ORGS = gql`
  {
    organizations {
      name
      uid
    }
  }
`;

const mockedData = {
  organizations: [
    {
      uid: 1,
      name: 'name',
      uri: 'uri',
      __typename: 'organizations'
    },
    {
      uid: 2,
      name: 'name2',
      uri: 'uri',
      __typename: 'organizations'
    },
    {
      uid: 3,
      name: 'name3',
      uri: 'uri',
      __typename: 'organizations'
    },
    {
      uid: 4,
      name: 'name4',
      uri: 'uri',
      __typename: 'organizations'
    }
  ]
};

const mocks = [{ request: { query: GET_ORGS }, result: { data: mockedData } }];

stories.add('default', () => (
  <div
    style={{
      width: '80%',
      margin: '50px auto',
      background: '#fff'
    }}
  >
    <MockedProvider mocks={mocks}>
      <MemoryRouter initialEntries={['/']}>
        <Top error={null} load={() => {}} />
      </MemoryRouter>
    </MockedProvider>
  </div>
));
