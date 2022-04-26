import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Uppercase } from './shared/pipes/uppercase.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { UploadComponent } from './upload/upload.component';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Uppercase,
    HomeComponent,
    AboutComponent,
    VideoComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    VideoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
