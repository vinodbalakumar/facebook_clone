import React, { Component } from 'react';
import './RightSide.css';
import ImageLayout from '../ImageLayout';

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }

    getData=()=>{ 
         let jsondata = [
             {
                 "image": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/106764423_3162366683854449_8483763037684750312_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qp5cIURWWzcAX864u4N&_nc_ht=scontent.fhyd11-1.fna&oh=dffea485df49d7e35b667b4ffcacab62&oe=60E392B5",
                 "text": "Rahul" 
             },
             {
                 "image": "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/175537373_3917940974962215_5706119780907103277_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xKYYqPh5tM8AX8WwkwV&_nc_ht=scontent.fhyd14-2.fna&oh=96a0dcaab7a6ccd384c593b5f6758d82&oe=60E16CFC",          
                 "text": "yugandhar" 
             },
             {
                 "image": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/142083579_2505652869728207_2533456337764733253_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=e3-X7rV5ur8AX9I_h7e&_nc_ht=scontent.fhyd11-1.fna&oh=4f134ab563386e624f8c1f95ad879626&oe=60E1876E",          
                 "text":"Chaitu"
             },
             {
                 "image": "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/175537373_3917940974962215_5706119780907103277_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xKYYqPh5tM8AX8WwkwV&_nc_ht=scontent.fhyd14-2.fna&oh=96a0dcaab7a6ccd384c593b5f6758d82&oe=60E16CFC",    
                 "text":"Yugandhar"
             }  
         ];
         this.setState({data : jsondata});
    
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div className="rightside__container">
                <div className="rightside__header">
                    Contacts
                </div>
                <div className="rightside__content">
                     {
                        this.state.data.map( (item) =>(
                                <ImageLayout image={item.image} status={item.active} text={item.text} />
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default RightSide;
