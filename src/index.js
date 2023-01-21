import React from 'react';
import ReactDOM from 'react-dom/client';
import AnotherComponent from './WelcomeNote';
import { WelcomeNote,SomeComponent } from './WelcomeNote';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
  <AnotherComponent></AnotherComponent>
  <WelcomeNote></WelcomeNote>
  <SomeComponent></SomeComponent>

  </>
);


