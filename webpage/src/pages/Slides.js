import {SliderCard} from "../components/Card1";
import React from "react";
import {Popularlists} from "../components/popularlist";
import {Player} from "./Player"
function Slides(){
    return(
        <div>
               <SliderCard/>
                <Popularlists/>
                <Player/>
        </div>
    )
}
export {Slides};