import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import '../LeftSidePanel/LeftSide.css';
import covid from "../../../../images/covid.png";
import groups from "../../../../images/groups.png";
import memories from "../../../../images/memories.png";
import messengerKids from "../../../../images/messengerkids.png";
import ads from "../../../../images/ads.png";
import adsmanager from "../../../../images/admanager.png";
import blood from "../../../../images/blood.png";
import business from "../../../../images/business.png";

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    getData=()=>{ //FAke JSON RESPONSE
        let jsondata = [
            {
                "image": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67799282_2356763091211453_5510315871081332736_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-bWuQ1qnpowAX9EsuqA&_nc_ht=scontent.fhyd11-1.fna&tp=27&oh=9d9a57c30949b2077a686582f0c870ef&oe=60E0EDBF",
                "text": "VINOD BALAKUMMAR"
            },
            {
                "image": covid,
                "text": "COVID-19 Information Centre" 
            },
            {
                "image": groups,
                "text":"Friends"
            },
            {
                "image": memories,
                "text":"Memories"
            },
            {
                "image": messengerKids,
                "text":"Messenger Kids"
            },
            {
                "image": ads,
                "text":"Ad Center"
            },
            {
                "image": adsmanager,
                "text":"Ads Manager"
            },
            {
                "image": blood,
                "text":"Blood Donations"
            },
            {
                "image": business,
                "text":"Business Manager"
            } 
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                {
                 this.state.data.map( (item) =>(
                        <ImageLayout image={item.image} text={item.text} />
                 ))
             }
            </div>
        );
    }
}

export default LeftSide;