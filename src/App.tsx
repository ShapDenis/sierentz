import React from 'react';
import {Route, Routes} from "react-router-dom";
import {DataTable} from "./Page/DataTable/DataTable";
import {Navbar} from "./Navbar/Navbar";


function App() {
    return (
        <>
            {/*<Navbar/>*/}
            <Routes>
                <Route key={"/"} path="/" element={<DataTable/>}/>
            </Routes>
        </>
    );
}

export default App;
