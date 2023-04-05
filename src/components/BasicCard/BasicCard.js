import * as React from 'react';
import { Paper} from '@mui/material';
import { ChildeCard } from '../ChildCard/ChildeCard';
import SearchAppBar from '../Test/SearchAppBar';


 


export default function BasicCard() {

    return (
        <>
            <Paper elevation={3} sx={{ height: window.height, margin: 0, backgroundColor: 'white' ,paddingTop:0,}}>
                <SearchAppBar/>
                
            <ChildeCard/>
            </Paper>


        </>
    );
}