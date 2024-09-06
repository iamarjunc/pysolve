import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Introduction from './contents/introduction';
import Variables from './contents/variables';
import Datatype from './contents/datatypes';
import Typecasting from './contents/typecasting';
import Strings from './contents/strings';
import Boolean from './contents/boolean';
import Operators from './contents/operators';
import ConditionalStatements from './contents/conditionstatement';
import Loops from './contents/loop';
import PythonLists from './contents/list';
import PythonTuples from './contents/Tuples';
import PythonSets from './contents/set';
import PythonDictionaries from './contents/dictonary';
import PythonFunctions from './contents/functions';
import PythonClasses from './contents/class';
import PythonInheritance from './contents/inheritance';
import PythonPolymorphism from './contents/polymorphism';
import PythonScopes from './contents/scopes';
import PythonModules from './contents/modules';
import PythonExceptions from './contents/exceptions';
import PythonFileHandling from './contents/filehandling';
import PythonJSONHandling from './contents/pythonjson';
import PythonRegexHandling from './contents/regularexpression';
import PythonGeneratorsHandling from './contents/generators';
import PythonDecoratorsHandling from './contents/decorators';
import PythonLambdaHandling from './contents/lambdafct';
import PythonIteratorsHandling from './contents/iterators';
import PythonContextManagersHandling from './contents/contextmanagers';

import DjangoOverview from './django/DjangoOverview';
import DjangoGetStarted from './django/DjangoGetStarted';

import './App.css'

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {/* Render Navbar only if not on the home page */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/introduction" element={<Introduction />} />
        <Route path="/variables" element={<Variables />} />
        <Route path="/data-types" element={<Datatype />} />
        <Route path="/type-casting" element={<Typecasting />} />
        <Route path="/strings" element={<Strings />} />
        <Route path="/boolean" element={<Boolean />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/conditionstatement" element={<ConditionalStatements />} />
        <Route path="/loop" element={<Loops />} />
        <Route path="/pythonlists" element={<PythonLists />} />
        <Route path="/pythontuples" element={<PythonTuples />} />
        <Route path="/pythonsets" element={<PythonSets />} />
        <Route path="/pythondictionaries" element={<PythonDictionaries />} />
        <Route path="/functions" element={<PythonFunctions />} />
        <Route path="/classes" element={<PythonClasses />} />
        <Route path="/inheritance" element={<PythonInheritance />} />
        <Route path="/polymorphism" element={<PythonPolymorphism />} />
        <Route path="/scopes" element={<PythonScopes />} />
        <Route path="/modules" element={<PythonModules />} />
        <Route path="/exceptions" element={<PythonExceptions />} />
        <Route path="/file-handling" element={<PythonFileHandling />} />
        <Route path="/json" element={<PythonJSONHandling />} />
        <Route path="/regular-expressions" element={<PythonRegexHandling />} />
        <Route path="/generators" element={<PythonGeneratorsHandling />} />
        <Route path="/decorators" element={<PythonDecoratorsHandling />} />
        <Route path="/lambda-functions" element={<PythonLambdaHandling />} />
        <Route path="/iterators" element={<PythonIteratorsHandling />} />
        <Route path="/context-managers" element={<PythonContextManagersHandling />} />

        <Route path="/django-intro" element={<DjangoOverview />} />
        <Route path="/django-getstartred" element={<DjangoGetStarted />} />
      </Routes>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router basename="/pysolve">
    <App />
  </Router>
);
export default AppWrapper;
