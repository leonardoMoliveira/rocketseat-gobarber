import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
// import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    /* const response = await api.get('appointments');

    setAppointments(response.data); */

    setAppointments([
      {
        id: 1,
        date: new Date(),
        user_id: 1,
        provider_id: 1,
        canceled_at: new Date(),
        updated_at: new Date(),
        name: 'Leonardo',
      },
      {
        id: 2,
        date: new Date(),
        user_id: 1,
        provider_id: 1,
        canceled_at: new Date(),
        updated_at: new Date(),
        name: 'Leonardo',
      },
      {
        id: 3,
        date: new Date(),
        user_id: 1,
        provider_id: 1,
        canceled_at: new Date(),
        updated_at: new Date(),
        name: 'Leonardo',
      },
    ]);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
