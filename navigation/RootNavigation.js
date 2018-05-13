import React from 'react';
import { Dimensions } from 'react-native'
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
import MenuIcon from '../assets/images/menu_hamburger.png';
import TopNavBar from '../components/TopNavBar'

import SampleScreen from '../screens/SampleScreen';
import PhoneVerification from '../screens/PhoneVerification';
import Countries from '../screens/Countries';
import SignUp from '../screens/SignUp';
import UploadCertificates from '../screens/UploadCertificates';
import Specialities from '../screens/Specialities';
import Preferences from '../screens/Preferences';
import CallAvailability from '../screens/CallAvailability';
import DoctorDetail from '../screens/DoctorDetail';
import FilterDoctors from '../screens/FilterDoctors';

import Appointments from '../screens/Appointments'
import UpcomingAppointments from '../screens/Appointments/UpcomingAppointments'
import PastAppointments from '../screens/Appointments/PastAppointments'
import AppointmentRequests from '../screens/Appointments/AppointmentRequests'

import SelectUploadedFiles from '../screens/SelectUploadedFiles'
import Chat from '../screens/Chat'
import Chats from '../screens/Chats'
import FavoriteDoctors from '../screens/FavoriteDoctors'
import Cardreader from '../screens/Cardreader'
import IncomingCall from '../screens/IncomingCall'
import CallFeedback from '../screens/CallFeedback'

import DrawerContent from '../components/DrawerContent'

import SchedulePicker from '../screens/Lightbox/SchedulePicker'
import PatientSchedulePicker from '../screens/Lightbox/PatientSchedulePicker'
import PatientCancelAppointment from '../screens/Lightbox/PatientCancelAppointment'
import UserProfileLightbox from '../screens/Lightbox/UserProfile'
import QuoteLoaderLightbox from '../screens/Lightbox/QuoteLoader'
import ChatFileUploadLightbox from '../screens/Lightbox/ChatFileUpload'
import RemoveCardLightbox from '../screens/Lightbox/RemoveCard'
import PatientConfirmPayLightbox from '../screens/Lightbox/PatientConfirmPay'
import DatePickerLightbox from '../screens/Lightbox/DatePickerLightbox'

export default class RootNavigator extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <Router>
       <Lightbox key="lightbox" hideNavBar>
         <Stack key="root" hideNavBar>

           <Stack key="navbar" navBar={TopNavBar}>
             <Scene key="sample_screen" component={SampleScreen} title="Sample Screen" />
             <Scene key="countries" component={Countries} title="Countries"/>
             <Scene key="sign_up" component={SignUp} title="Sign Up"/>
             <Scene key="call_availability" component={CallAvailability} title="Call Availability"/>
             <Scene key="upload_certificates" component={UploadCertificates} title="Upload Certificates"/>
             <Scene key="specialities" component={Specialities} title="Specialities"/>
             <Scene key="preferences" component={Preferences} title="Preferences"/>
             <Scene key="filter_doctors" component={FilterDoctors} title="Filters"/>
             <Scene key="appointments" title="Appointments" component={Appointments} />
             <Scene key="chat" component={Chat} back/>
             <Scene initial key="select_uploaded_files" component={SelectUploadedFiles} title="Select the files"/>
             <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerImage={MenuIcon}
              drawerWidth={0.7 * width}>
              <Scene key="favorite_doctors" component={FavoriteDoctors} title="Favorite Doctors"/>
              <Scene key="chats" component={Chats} title="Chats" />
              <Scene key="doctor_detail" component={DoctorDetail} title="Doctor Detail"/>
            </Drawer>
           </Stack>

           <Scene key="incoming_call" component={IncomingCall} />
           <Scene key="call_feedback" component={CallFeedback} />
           <Scene key="phone_verification" component={PhoneVerification} title="Phone Verification"/>
           <Scene key="card_reader" component={Cardreader} hideNavBar/>

         </Stack>
         <Scene key="schedule_picker_lightbox" component={SchedulePicker} />
         <Scene key="patient_schedule_picker_lightbox" component={PatientSchedulePicker} />
         <Scene key="patient_cancel_appointment_lightbox" component={PatientCancelAppointment} />
         <Scene key="user_profile_lightbox" component={UserProfileLightbox} />
         <Scene key="quote_loader_lightbox" component={QuoteLoaderLightbox} />
         <Scene key="chat_uplaod_lightbox" component={ChatFileUploadLightbox} />
         <Scene key="remove_card_lightbox" component={RemoveCardLightbox} />
         <Scene key="patient_confirm_pay" component={PatientConfirmPayLightbox} />
         <Scene key="date_picker_lightbox" component={DatePickerLightbox} />
       </Lightbox>
      </Router>
    )
  }
}

/*
<Tabs
  hideNavBar
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
*/
