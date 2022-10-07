import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../Component/Sidebar/layout.css";
import Staffform from "../Forms/Staff-profile/Staff-form";
import Lookform from "../../Component/Forms/Lookform";
import Childform from "../../Component/Forms/Child-form";
import Form1 from "../../Component/Forms/form1";
import Form2 from "../../Component/Forms/form2";
import StaffManagement from "../../Component/Forms/Staff-profile/StaffMangement";
import ListTwo from "../../Component/Lists/ListTwo";
import MainPage from "../../Layout/DashboardPage/mainPage";
import Staff from "../ClassRoomComponents/Staff/index";
import Reports from "../../Layout/Reports/Main";
import EnrollmentTwo from "../ClassRoster/EnrollmentTwo";
import StaffRoster from "../ClassRoster/StaffRoster/index";
import Entry from "../../Component/ClassRoster/AddEntery/Entry";
import Report1 from "../ClassRoster/Reports/Reports";
import Journal from "../ClassRoster/Journal/Journal";
import Planner from "../ClassRoster/Planner/Planner";
import Calender from "../ClassRoster/Calander/Calander";
import Cards from "../Logins/Cards/Cards";
import HealthScreen from "../../Component/Logins/HealthScreen/HealthScreen";
import Logins from "../../Component/Logins/Logins/Logins";
import MobilePush from "../../Component/Logins/MobilePush/MobilePush";
import Virual from "../../Component/Logins/Virual/Viral";
import AddOn from "../../Component/Logins/AddOn/AddOn";
import HappyChild from "../Reports/HappyChild/HappyChild";
import HappyChild2 from "../Reports/HappyChild2/HappyChild2";
import HappyChild3 from "../Reports/HappyChild3/HappyChild3";
import HappyChild4 from "../Reports/HappyChild4/HappyChild4";
import HappyChild5 from "../Reports/HappyChild5/index";
import HappyChild6 from "../Reports/HappyChild6/index";
import HappyChild7 from "../Reports/HappyChild7/index";
import Health from "../Reports/Health/Health";
import Max from "../Max/Max";
import Parent from "../ParaentComponent/Parent";
import Help from "../Help/Help";
import Messages from "../Messages/Messages";
import NewCalander from "../NewCalander/NewCalander";
import Graph from "../ClassRoster/StaffRoster/Chart/Graph";
import Report from "../ClassRoster/Reports/Reports";
import Calander from "../ClassRoster/Calander/Calander";
import Contacts from "../Contact/Contacts";
import AllergiesTableComponent from "../Management/Allergies/Table";
import AllergiesFormComponent from "../Management/Allergies/Form";
import DepartmentTableComponent from "../Management/Department/Table";
import DepartmentFormComponent from "../Management/Department/Form";
import DiseasesFormComponent from "../Management/Diseases/Form";
import DiseasesTableComponent from "../Management/Diseases/Table";
import EpipenbrandFormComponent from "../Management/Epipenbrand/Form";
import EpipenbrandTableComponent from "../Management/Epipenbrand/Table";
import MoodsFormComponent from "../Management/Moods/Form";
import MoodsTableComponent from "../Management/Moods/Table";
import CheckinComponent from "../ClassroomActions/Checkin";
import AddEpiComponent from "../ClassroomActions/AddEpi";
import ActivityComponent from "../ClassroomActions/Activity";
import HealthComponent from "../ClassroomActions/Health";
import TemperatureComponent from "../ClassroomActions/Temperature";
import FluidsComponent from "../ClassroomActions/Fluids";
import FoodComponent from "../ClassroomActions/Food";
import SleepComponent from "../ClassroomActions/Sleep";
import ToiletComponent from "../ClassroomActions/Toilet";
import CheckoutComponent from "../ClassroomActions/Checkout";
import Apply from "../ClassRoster/AddEntery/Apply/Apply";
import ClassroomActions from "../ClassroomActions";
import ManagementContainer from "../Management/Container/Container";
import MoodsComponent from "../ClassroomActions/Moods";
import SuppliesComponent from "../ClassroomActions/Supplies";
import NotesComponent from "../ClassroomActions/Notes";
import NametofaceComponent from "../ClassroomActions/Nametoface";
function Content() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="Lookform" element={<Lookform />} />
        <Route path="Childform" element={<Childform />} />
        <Route path="Form1" element={<Form1 />} />
        <Route path="Form2" element={<Form2 />} />
        <Route path="Staffform" element={<Staffform />} />
        <Route path="StaffManagement" element={<StaffManagement />} />
        <Route path="ListTwo1" element={<ListTwo />} />
        <Route path="Staff" element={<Staff />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="EnrollmentTwo" element={<EnrollmentTwo />} />
        <Route path="classroom-actions" element={<ClassroomActions />}>
          <Route path="checkin" element={<CheckinComponent />} />
          <Route path="activity" element={<ActivityComponent />} />
          <Route path="health" element={<HealthComponent />} />
          <Route path="fluids" element={<FluidsComponent />} />
          <Route path="temperature" element={<TemperatureComponent />} />
		  <Route path="moods" element={<MoodsComponent />} />
		   <Route path="supplies" element={<SuppliesComponent />} />
		   <Route path="notes" element={<NotesComponent />} />
		   <Route path="nametoface" element={<NametofaceComponent />} />
          <Route path="food" element={<FoodComponent />} />
          <Route path="sleep" element={<SleepComponent />} />
          <Route path="toilet" element={<ToiletComponent />} />
          <Route path="checkout" element={<CheckoutComponent />} />
        </Route>
        <Route path="StaffRoster" element={<StaffRoster />} />
        <Route path="Report" element={<Report1 />} />
        <Route path="Journal" element={<Journal />} />
        <Route path="Planner" element={<Planner />} />
        <Route path="Calender" element={<Calender />} />
        <Route path="Cards" element={<Cards />} />
        <Route path="HealthScreen" element={<HealthScreen />} />
        <Route path="Logins" element={<Logins />} />
        <Route path="MobilePush" element={<MobilePush />} />
        <Route path="Virual" element={<Virual />} />
        <Route path="AddOn" element={<AddOn />} />
        <Route path="HappyChild" element={<HappyChild />} />
        <Route path="HappyChild2" element={<HappyChild2 />} />
        <Route path="HappyChild3" element={<HappyChild3 />} />
        <Route path="HappyChild4" element={<HappyChild4 />} />
        <Route path="HappyChild5" element={<HappyChild5 />} />
        <Route path="HappyChild6" element={<HappyChild6 />} />
        <Route path="HappyChild7" element={<HappyChild7 />} />
        <Route path="Health" element={<Health />} />
        <Route path="Max" element={<Max />} />
        <Route path="Parent" element={<Parent />} />
        <Route path="Help" element={<Help />} />
        <Route path="Messages" element={<Messages />} />
        <Route path="NewCalander" element={<NewCalander />} />
        <Route path="Graph" element={<Graph />} />
        <Route path="Report" element={<Report />} />
        <Route path="Calander" element={<Calander />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Management" element={<ManagementContainer />} />
        {/* new-routes */}
        <Route
          path="allergies-management"
          element={<AllergiesTableComponent />}
        />
        <Route path="allergies-form" element={<AllergiesFormComponent />} />
        <Route
          path="department-management"
          element={<DepartmentTableComponent />}
        />
        <Route path="department-form" element={<DepartmentFormComponent />} />
        <Route
          path="diseases-management"
          element={<DiseasesTableComponent />}
        />
        <Route path="diseases-form" element={<DiseasesFormComponent />} />
        <Route
          path="epipenbrand-management"
          element={<EpipenbrandTableComponent />}
        />
        <Route path="epipenbrand-form" element={<EpipenbrandFormComponent />} />
        <Route path="moods-management" element={<MoodsTableComponent />} />
        <Route path="moods-form" element={<MoodsFormComponent />} />
        {/* <Route
          path="classroom-actions"
          element={<ClassroomActionsComponent />}
        />
        <Route path="class-action-checkin" element={<CheckinComponent />} />
        <Route path="class-action-add-epi" element={<AddEpiComponent />} />
        <Route path="class-action-activity" element={<ActivityComponent />} />
        <Route path="class-action-health" element={<HealthComponent />} />
        <Route
          path="class-action-temperature"
          element={<TemperatureComponent />}
        /> */}
      </Routes>
    </>
  );
}

export default Content;
