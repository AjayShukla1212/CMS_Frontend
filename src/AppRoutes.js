import React from 'react'
import Navigation from './components/Navigation';
import Login from './components/Login';
import LoginImage from './components/LoginImage';
import {Routes, Route} from 'react-router-dom'
import AdminHome from './components/AdminHome';
import CreateBank from './components/CreateBank';
import CreateGroup from './components/CreateGroup';
import ViewBank from './components/ViewBank';
import ViewUser from './components/ViewUser';
import ViewGroup from './components/ViewGroup';
import ViewTransactions from './components/ViewTransactions';
import SearchByDate from './components/SearchByDate';
import HistoryReport from './components/HistoryReport';
import SearchAuditByDate from './components/SearchAuditByDate';
import CreateUser from './components/CreateUser';
import Home from './components/Home';

function AppRoutes() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<AdminHome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/bank/create'  element={<CreateBank/>}/>
            <Route path='/user/create' element={<CreateUser/>}/>
            <Route path='/bank/view' element={<ViewBank/>}/>        
            <Route path='/user/view' element={<ViewUser/>}/>
            <Route path='/group/create' element={<CreateGroup/>}/>
            <Route path='/group/view' element={<ViewGroup/>}/>      
            <Route path='/reports/transactions/view' element={<ViewTransactions/>}/>
            <Route path='/reports/searchByDate' element={<SearchByDate/>}/>
            <Route path='/reports/history' element={<HistoryReport/>}/>
            <Route path='/audit/searchByDate' element={<SearchAuditByDate/>}/>
     
            
        </Routes> 
    </>
  )
}

export default AppRoutes;