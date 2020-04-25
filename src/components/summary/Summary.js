import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './Summary.scss';

function Summary( {summary :{infected, recovered, deaths, isLoading}}) {
    return (
        <div className="Summary">
            <h1 className="Summary--title" >Summary in the world</h1>
            <div className="Summary--cards">
                <Grid container justify="space-between">
                    <Grid item xs={12} md={3} component={Card} className="card card--recovered">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Recovered
                            </Typography>
                            <Typography variant="h5" component="h2">
                            <CountUp start={0} end={isLoading? 0 : recovered} duration={2} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of recoveries by COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className="card card--infected">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Infected
                            </Typography>
                            <Typography variant="h5" component="h2">
                            <CountUp start={0} end={isLoading? 0 : infected} duration={2} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of infected by COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className="card card--deaths">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant="h5" component="h2">
                            <CountUp start={0} end={isLoading? 0 : deaths} duration={2} separator="," />
                            </Typography>
                            <Typography variant="body2" component="p">
                                Number of deaths by COVID-19.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Summary;