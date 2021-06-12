import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import './NavBar.css'
import { Avatar } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container className="navbar__main">
                    <Grid item xs={3}>
                        <div className="navbar__leftbar">
                            <img className="navbar__logo" src={fblogo} width='35px' />
                            <input className="navbar__search" type="text" placeholder="search for v-facebook" />
                        </div>

                    </Grid>
                    <Grid item xs={6}>
                        <div className="navbar__container" >
                            <div className="navbar__tabs active">
                                <img src={home} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={page} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={watch} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={market} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={group} height="35px" width="35px" />
                            </div>
                        </div>


                    </Grid>
                    <Grid item xs={3}>
                        <div className="navbar__right">
                            <div className="navbar__righttab">
                                <Avatar className="navbar__rightimg" src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67799282_2356763091211453_5510315871081332736_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-bWuQ1qnpowAX9EsuqA&_nc_ht=scontent.fhyd11-1.fna&tp=27&oh=9d9a57c30949b2077a686582f0c870ef&oe=60E0EDBF" />
                                <div className="navbar__profilename">VINOD</div>

                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>);
    }
}

export default NavBar;