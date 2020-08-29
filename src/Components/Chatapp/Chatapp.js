import React, {Component} from 'react'
import dp from '../../Assets/img/dp.png'
import menu from '../../Assets/img/menu.png'
import status from '../../Assets/img/status.png'

import user1 from '../../Assets/img/user1.png'
import user2 from '../../Assets/img/user2.png'

class Chatapp extends Component{
    state = {
        users : [
            {
                dp:'1',
                name:'User1'
            },
            {
                dp:'2',
                name:'User2'
            },
            {
                dp:'3',
                name:'User3'
            }

        ]
    }
    render(){
        return(
            <div className="container-fluid">
            <div className="h5 mt-4">The Chat App</div>
                <div className="row h100">
                    <div className="col-md-4 nor-bor dis-flex flex-col">
                        <div className="dis-flex flex-row spread mt-4 ">
                            <img className="rounded-circle" alt="Profile" src={dp} style={{width:'50px', height:'50px'}}/>
                            <img className="rounded-circle" alt="Status" src={status} style={{width:'50px', height:'50px'}}/>
                            <img className="rounded-circle" alt="Options" src={menu} style={{width:'50px', height:'50px'}}/>
                        </div>
                        <div className="hr"></div>
                        <div className="dis-flex flex-col spread mt-4">{this.state.users.map((user)=>{
                                            return <div className="card h4 w-100 h-100 dis-flex flex-row px-4 py-4">
                                                <img src={user1} alt="User0" style={{width:'50px', height:'50px'}}/>
                                                <div className="dis-flex flex-col ml-4">
                                                    <div>{user.name}</div>
                                                    <div className="b1">Last Message</div>
                                                </div>
                                                </div>
                         })}</div>
                    </div>
                    <div className="col-md-8 nor-bor"></div>
                </div>
            </div>
        )
    }
}
export default Chatapp;

// <div className="col-md-4"><img className="rounded-circle" src={dp} style={{width:'50px', height:'50px'}}/></div>
//                             <div className="col-md-4"><img className="rounded-circle" src={status} style={{width:'50px', height:'50px'}}/></div>
//                             <div className="col-md-4"><img className="rounded-circle" src={menu} style={{width:'50px', height:'50px'}}/></div>
                        