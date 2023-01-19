import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

function DataCard(props) {
  const {
    title, numericData, iconElement,
  } = props;

  return (
    <Card
      sx={{ minWidth: 300, minHeight: 200 }}
    >
      <Grid
        container
      >
        <Grid
          container
          flexDirection="column"
          xs={10}
          justifySelf="center"
        >
          <Grid>
            <Typography color="text.secondary" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid>
            <Typography color="text.secondary" gutterBottom>
              {numericData}
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={2}>
          {iconElement}
        </Grid>
      </Grid>
    </Card>
  )
}

DataCard.propTypes = {
  title: PropTypes.string,
  numericData: PropTypes.number,
  iconElement: PropTypes.string,
}

export default DataCard;
