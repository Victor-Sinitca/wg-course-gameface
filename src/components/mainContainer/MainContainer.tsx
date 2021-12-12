import React from "react";
import {MainNav} from "@/components/mainContainer/mainNav/MainNav";
import {Main} from "@/components/mainContainer/main/Main";


export const MainContainer =()=>{
    return(
        <div className="main">
            <div id="main1" className="main-container">
                <MainNav/>
                <Main/>
            </div>
        </div>
    )
}
