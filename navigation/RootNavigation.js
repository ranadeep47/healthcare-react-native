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

import { colors, fontSizes } from '../constants/styles'

import SampleScreen from '../screens/SampleScreen';
import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';
import SignUp from '../screens/SignUp';
import UploadCertificates from '../screens/UploadCertificates';
import Specialities from '../screens/Specialities';
import Preferences from '../screens/Preferences';
import CallAvailability from '../screens/CallAvailability';
import DoctorDetail from '../screens/DoctorDetail';

import Appointments from '../screens/Appointments'
import UpcomingAppointments from '../screens/Appointments/UpcomingAppointments'
import PastAppointments from '../screens/Appointments/PastAppointments'
import AppointmentRequests from '../screens/Appointments/AppointmentRequests'
import Chats from '../screens/Chats'
import FavoriteDoctors from '../screens/FavoriteDoctors'

import SchedulePicker from '../screens/Lightbox/SchedulePicker'
import PatientSchedulePicker from '../screens/Lightbox/PatientSchedulePicker'
import PatientCancelAppointment from '../screens/Lightbox/PatientCancelAppointment'
import UserProfileLightbox from '../screens/Lightbox/UserProfile'
import QuoteLoaderLightbox from '../screens/Lightbox/QuoteLoader'

export default class RootNavigator extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Router>
       <Lightbox key="lightbox" hideNavBar>
         <Stack key="root">
           <Scene key="sample_screen" component={SampleScreen} title="Sample Screen" />
           <Scene key="phone_verification" component={PhoneVerification} title="Phone Verification"/>
           <Scene key="countries" component={Countries} title="Countries"/>
           <Scene key="sign_up" component={SignUp} title="Sign Up"/>
           <Scene key="upload_certificates" component={UploadCertificates} title="Upload Certificates"/>
           <Scene key="specialities" component={Specialities} title="Specialities"/>
           <Scene key="preferences" component={Preferences} title="Preferences"/>
           <Scene key="call_availability" component={CallAvailability} title="Call Availability"/>
           <Scene key="appointments" title="Appointments">
             <Tabs
               key="tabs_appointments"
               activeTintColor={colors.blue}
               inactiveTintColor={colors.lightText}
               labelStyle={{fontSize: fontSizes['sm'], flex: 1, marginBottom: 12}}
               tabStyle={{}}
               activeBackgroundColor={colors.background}
               inactiveBackgroundColor={colors.background}
               tabBarStyle={{marginTop: 20}}
               swipeEnabled={true}>
               <Scene
                 hideNavBar
                 key="upcoming_appointments"
                 component={UpcomingAppointments}
                 tabBarLabel="Upcoming"/>
               <Scene
                 hideNavBar
                 key="past_appointments"
                 component={PastAppointments}
                 tabBarLabel="Past"/>
               <Scene
                 hideNavBar
                 key="appointments_requests"
                 component={AppointmentRequests}
                 tabBarLabel="Requests"/>
             </Tabs>
           </Scene>
           <Scene key="chats" component={Chats} title="Chats" />
           <Scene key="doctor_detail" component={DoctorDetail} title="Doctor Detail"/>
           <Scene initial key="favorite_doctors" component={FavoriteDoctors} title="Favorite Doctors"/>
         </Stack>
         <Scene key="schedule_picker_lightbox" component={SchedulePicker} />
         <Scene key="patient_schedule_picker_lightbox" component={PatientSchedulePicker} />
         <Scene key="patient_cancel_appointment_lightbox" component={PatientCancelAppointment} />
         <Scene key="user_profile_lightbox" component={UserProfileLightbox} />
         <Scene key="quote_loader_lightbox" component={QuoteLoaderLightbox} />
       </Lightbox>
      </Router>
    )
  }
}
