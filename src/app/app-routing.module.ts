import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
  {
    path: 'upload',
    component: UploadComponent,
  },
  // {
  //   path: 'video',
  //   component: VideoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
