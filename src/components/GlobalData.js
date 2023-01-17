import React from 'react';
import { useQuery } from 'react-query';
import fetchData from '../helper/queryHelper';
import { GLOBAL_DATA_QUERY } from '../helper/queries';
import { Card, Typography, Grid, Box } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import DataCard from './DataCard';
import PeopleIcon from '@mui/icons-material/People';

const GlobalData = (props) => {
    const { data, isSuccess } = useQuery('global-data', fetchData(GLOBAL_DATA_QUERY));

    console.log(data);
    // const isSuccess = true;

    if(isSuccess) {
        return (
            <Box sx={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>
                <DataCard 
                 title="Active Cases"
                 numericData={data?.globalTotal?.active}
                 iconElement={<CoronavirusIcon />}
                />
                <DataCard 
                 title="Total Deaths"
                 numericData={data?.globalTotal?.deaths}
                 iconElement={<CoronavirusIcon sx={{ color: 'red' }} />}
                 textColor="red"
                />
                <DataCard 
                 title="Recovered"
                 numericData={data?.globalTotal?.recovered}
                 iconElement={<PeopleIcon sx={{ color: 'green' }} />}
                />
            </Box>
        )
    }

    return (
        <div>Show data</div>
    )
}

export default GlobalData;