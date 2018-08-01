import { NgModule, Component, ViewContainerRef } from '@angular/core';
import { FormsModule,FormGroup,Validators,FormControl,FormControlName, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPropertyFormComponent } from './components/add-property-form/add-property-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListadminComponent } from './components/listadmin/listadmin.component';
import { ListpropertybuttonComponent } from './components/listpropertybutton/listpropertybutton.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoggedUserComponent } from './components/logged-user/logged-user.component';
import { ManagePropertyComponent } from './components/manage-property/manage-property.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { PropertylistComponent } from './components/propertylist/propertylist.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SigninformComponent } from './components/signinform/signinform.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { PropertyService } from './services/property.service';
import { UserService } from './services/user.service';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ManagepropertiesFormComponent } from './components/manageproperties-form/manageproperties-form.component';
import { HomesearchFormComponent } from './components/homesearch-form/homesearch-form.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { HomeExtrasComponent } from './components/home-extras/home-extras.component';
import { SignedInComponent } from './components/signed-in/signed-in.component';
import { AdminSignInFormComponent } from './components/admin-sign-in-form/admin-sign-in-form.component';
import {AuthguardGuard} from '../app/guards/authguard.guard';
import { DisplayPropertiesComponent } from './components/display-properties/display-properties.component';
import { EditDisplayComponent } from './components/edit-display/edit-display.component';
import {DisplayPropertiesServiceService} from '../app/services/display-properties-service.service';
import {PropertyMapService} from '../app/services/property-map.service';
import { CheckInCheckOutComponent } from './components/check-in-check-out/check-in-check-out.component';
import { AddPropertyNavigationComponent } from './components/add-property-navigation/add-property-navigation.component';
import { AvailabiltyFormComponent } from './components/availabilty-form/availabilty-form.component';
import { RulesAndFacilitiesComponent } from './components/rules-and-facilities/rules-and-facilities.component';
import { LoginService} from './services/login.service';
import { CookieService } from 'angular2-cookie/core';
import {Ng2Webstorage} from 'ngx-webstorage';
import { StartpageComponent } from './components/startpage/startpage.component';
import {HomeComponent} from './components/home/home.component';
import {AccBookingService} from './services/acc-booking.service';
import { ManageBookingsComponent } from './components/manage-bookings/manage-bookings.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import {PropertyTimeSheetService} from './services/property-time-sheet.service';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { PropPaymentMethodComponent } from './components/prop-payment-method/prop-payment-method.component';
import { UserPaymentMethodComponent } from './components/user-payment-method/user-payment-method.component';
import { ViewAvailabilityComponent } from './components/view-availability/view-availability.component';
import { ViewAvailabilityFormComponent } from './components/view-availability-form/view-availability-form.component';
import { AdminViewPropertiesComponent } from './components/admin-view-properties/admin-view-properties.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { AdminViewReservationsComponent } from './components/admin-view-reservations/admin-view-reservations.component';
import { ManagerModeComponent } from './components/manager-mode/manager-mode.component';
import {UserContactDetailsService} from './services/user-contact-details.service';
import {UserPaymentMethodService} from './services/user-payment-method.service';
import { UserContactDetailsComponent } from './components/user-contact-details/user-contact-details.component';
import { ViewUserProfileComponent } from './components/view-user-profile/view-user-profile.component';
import {SearchUserService} from './services/search-user.service';
import { SearchUserComponent } from './components/search-user/search-user.component';
import {BrowserAnimationsModule}  from   '@angular/platform-browser/animations';
import { ToasterService } from './services/toaster.service';
import { injectViewContainerRef } from '@angular/core/src/render3';
import {MatDialogModule,MatCard} from '@angular/material';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ViewBankDetailsComponent } from './components/view-bank-details/view-bank-details.component';
import { ViewAdditionalInformationComponent } from './components/view-additional-information/view-additional-information.component';
import {ToastrModule} from 'ngx-toastr';
import { PropertyPopUpComponent } from './components/property-pop-up/property-pop-up.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HolidayHomeComponent } from './components/holiday-home/holiday-home.component';
import { LodgeComponent } from './components/lodge/lodge.component';
import { AdminGuard } from './guards/admin.guard';
import {SearchService} from './services/search-service.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes:Routes = [
  {path:'',component:StartpageComponent},
  {path:'home',canActivate:[AuthguardGuard],component:HomepageComponent},
  {path:'viewProperty',canActivate:[AuthguardGuard],component:ViewPropertyComponent},
  {path: 'addProperty',canActivate:[AuthguardGuard],component:AddPropertyNavigationComponent},
  {path:'displayProperties',canActivate:[AuthguardGuard],component:DisplayPropertiesComponent},
  {path:'manageBooking',canActivate:[AuthguardGuard], component:ManageBookingsComponent},
  {path:'editDisplay',canActivate:[AdminGuard],component:EditDisplayComponent},
  {path:'manageProperty',canActivate:[AuthguardGuard],component:ManagepropertiesFormComponent},
  {path:'editProfile',canActivate:[AuthguardGuard],component:EditProfileComponent},
  {path:'searchProperty',canActivate:[AuthguardGuard],component:SearchPropertyComponent},
  {path: 'viewProfile',canActivate:[AuthguardGuard],component:ViewUserProfileComponent},
  {path: 'searchUser',canActivate:[AuthguardGuard],component:SearchUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    SearchFormComponent,
    HomeComponent,
    HomepageComponent,
    HomeViewComponent,
    HomeExtrasComponent,
    HomesearchFormComponent,
    ListadminComponent,
    ListpropertybuttonComponent,
    LoggedUserComponent,
    ManagePropertyComponent,
    NavigationComponent,
    SigninformComponent,
    SignupformComponent,
    AddPropertyFormComponent,
    FooterComponent,
    PropertylistComponent,
    PropertyFormComponent,
    ViewPropertyComponent,
    ManagepropertiesFormComponent,
    SignedInComponent,
    AdminSignInFormComponent,
    DisplayPropertiesComponent,
    EditDisplayComponent,
    CheckInCheckOutComponent,
    AddPropertyNavigationComponent,
    AvailabiltyFormComponent,
    RulesAndFacilitiesComponent,
    StartpageComponent,
    ManageBookingsComponent,
    EditProfileComponent,
    SearchPropertyComponent,
    TimeSheetComponent,
    PropPaymentMethodComponent,
    UserPaymentMethodComponent,
    ViewAvailabilityComponent,
    ViewAvailabilityFormComponent,
    AdminViewPropertiesComponent,
    AdminViewUsersComponent,
    AdminViewReservationsComponent,
    ManagerModeComponent,
    UserContactDetailsComponent,
    ViewUserProfileComponent,
    
    SearchUserComponent,
    
    PaymentComponent,
    
    PaymentFormComponent,
    
    ViewBankDetailsComponent,
    
    ViewAdditionalInformationComponent,
    
    PropertyPopUpComponent,
    
    ApartmentComponent,
    
    HotelComponent,
    
    HolidayHomeComponent,
    
    LodgeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,MatDialogModule,ToastrModule.forRoot(),
    FormsModule,Ng2Webstorage,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),NgbModule.forRoot()
    
  ],
  
  entryComponents:[PaymentComponent],
  providers: [SearchService,SearchUserService,UserContactDetailsService,AdminGuard,UserPaymentMethodService,PropertyTimeSheetService,PropertyMapService,AccBookingService,LoginService,UserService,AuthguardGuard,PropertyService,DisplayPropertiesServiceService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
