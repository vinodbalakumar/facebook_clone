import React, { Component } from 'react';
import "./PostContainer.css";
import Post from './Post';
import post_img from "../../../../images/post.jpeg";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getData = () => { //calling the rest from our backend
        let json = [
            {
                "post_ID": 1,
                "user_id": 12345678,
                "user_img": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/67799282_2356763091211453_5510315871081332736_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-bWuQ1qnpowAX-lR3MN&_nc_ht=scontent.fhyd11-1.fna&oh=83906dd140d8114bc54df6b7a336ea27&oe=60E20004",
                "user_name": "Vinod Balakumar",
                "description": "Loved this wallpaper...",
                "post_img": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t31.18172-8/12120110_1691487517739017_5788217665120812202_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=8mF9zsPWXdcAX__G7wd&_nc_ht=scontent.fhyd11-1.fna&oh=2ec587b1642ad8e614d32b1fefb67bf4&oe=60E1D216",
                "like": "25k"
            },
            {
                "post_ID": 2,
                "user_id": 12345678,
                "user_img": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/106764423_3162366683854449_8483763037684750312_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qp5cIURWWzcAX864u4N&_nc_ht=scontent.fhyd11-1.fna&oh=dffea485df49d7e35b667b4ffcacab62&oe=60E392B5",
                "user_name": "Rahul ch",
                "description": "this is a dummy description for testing purpose",
                "post_img": "https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-9/106764423_3162366683854449_8483763037684750312_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qp5cIURWWzcAX864u4N&_nc_ht=scontent.fhyd11-1.fna&oh=dffea485df49d7e35b667b4ffcacab62&oe=60E392B5",
                "like": "125k"
            },
            {
                "post_ID": 3,
                "user_id": 12345678,
                "user_img": "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/175537373_3917940974962215_5706119780907103277_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xKYYqPh5tM8AX8WwkwV&_nc_ht=scontent.fhyd14-2.fna&oh=96a0dcaab7a6ccd384c593b5f6758d82&oe=60E16CFC",
                "user_name": "Yugandhar",
                "description": "this is a dummy description for testing purpose",
                "post_img": "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/88085495_2804805816275742_1369396420490035200_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=AMfuTC1RtH0AX_Q9rRN&_nc_ht=scontent.fhyd14-2.fna&oh=28810dac04c0c830025899df712fba96&oe=60E2EC43",
                "like": "225k"
            }
        ]
        this.setState({data : json});

    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div>
               {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
              
            </div>
        );
    }
}

export default PostContainer;