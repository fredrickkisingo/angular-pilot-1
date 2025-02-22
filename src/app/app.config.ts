import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';


const firebaseConfig = {
  apiKey: "AIzaSyCKmk-R-6-Cqvuj76WHHdDa-ZKuoRQFNWY",
  authDomain: "angular-demo-52091.firebaseapp.com",
  projectId: "angular-demo-52091",
  storageBucket: "angular-demo-52091.firebasestorage.app",
  messagingSenderId: "414785397164",
  appId: "1:414785397164:web:44cd96e0b76ca5d9585a09",
  measurementId: "G-4R75KP3Q5T"
};


export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideClientHydration(withEventReplay(),

    ),
    provideFirebaseApp(() => initializeApp(
      firebaseConfig
     
    )),
  ],

};
