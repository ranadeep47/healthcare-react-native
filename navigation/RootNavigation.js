import { Notifications } from 'expo';
import React from 'react';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import SampleScreen from '../screens/SampleScreen';
import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';
import SignUp from '../screens/SignUp';
import UploadCertificates from '../screens/UploadCertificates';
import Specialities from '../screens/Specialities';
import Preferences from '../screens/Preferences';
import CallAvailability from '../screens/CallAvailability';

import Appointments from '../screens/Appointments'
import UpcomingAppointments from '../screens/Appointments/UpcomingAppointments'
import PastAppointments from '../screens/Appointments/PastAppointments'
import AppointmentRequests from '../screens/Appointments/AppointmentRequests'

export default class RootNavigator extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene initial key="sample_screen" component={SampleScreen} title="Sample Screen" />
          <Scene key="phone_verification" component={PhoneVerification} title="Phone Verification"/>
          <Scene key="countries" component={Countries} title="Countries"/>
          <Scene key="sign_up" component={SignUp} title="Sign Up"/>
          <Scene key="upload_certificates" component={UploadCertificates} title="Upload Certificates"/>
          <Scene key="specialities" component={Specialities} title="Specialities"/>
          <Scene key="preferences" component={Preferences} title="Preferences"/>
          <Scene key="call_availability" component={CallAvailability} title="Call Availability"/>
          <Tabs
            key="tabs_appointments"
            activeBackgroundColor="white"
            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
            tabBarStyle={{marginTop: 100}}
            swipeEnabled={true}>
            <Scene
              key="upcoming_appointments"
              component={UpcomingAppointments}
              title="Upcoming Appointments"
              tabBarLabel="Upcoming"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              titleStyle={{ color: 'white', alignSelf: 'center' }}/>
            <Scene
              key="past_appointments"
              component={PastAppointments}
              title="Past Appointments"
              tabBarLabel="Past"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              titleStyle={{ color: 'white', alignSelf: 'center' }}/>
            <Scene
              key="appointments_requests"
              component={AppointmentRequests}
              title="Appointment Requests"
              tabBarLabel="Requests"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              titleStyle={{ color: 'white', alignSelf: 'center' }}/>
          </Tabs>          
        </Stack>
      </Router>
    )
  }

}
