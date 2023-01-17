import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

const DataCard = (props) => {
    // const { data, isSuccess } = useQuery('global-data', fetchData(GLOBAL_DATA_QUERY));
    const { title, numericData, iconElement, textColor } = props;

        return (
            <Card
            sx={{ minWidth: 300, minHeight: 200 }}
            >
                <Grid 
                container
                >
                <Grid 
                container 
                // spacing={2}
                flexDirection="column"
                xs={10}
                justifySelf="center"
                >
                    <Grid>
                    <Typography sx={{ fontSize: 12, margin: '5px 0px 0px 0px', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                {title}
                </Typography>
                    </Grid>
                    <Grid>
                    <Typography sx={{ fontSize: 24, color: textColor || 'green', fontWeight: 'bold'  }} color="text.secondary" gutterBottom>
                    {numericData}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid xs={2} sx={{ padding: '18px 0px' }}>
                {iconElement}
                </Grid>
                </Grid>
            </Card>
        )
}

export default DataCard;