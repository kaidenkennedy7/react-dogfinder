import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';

function DogRoutes({ dogs }) {
    return (
        <div>
            <Routes>
                <Route exact path='/dogs' element={<DogList dogs={dogs}/>}/>
                <Route exact path='/dogs/:name' element={<DogDetails dogs={dogs}/>}/>
                <Route path='/' element={<Navigate to='/dogs'/>} />
            </Routes>
        </div>
    );
}

export default DogRoutes;