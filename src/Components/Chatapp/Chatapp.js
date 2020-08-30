import React, {Component} from 'react'
import dp from '../../Assets/img/dp.png'
import menu from '../../Assets/img/menu.png'
import status from '../../Assets/img/status.png'

import user1 from '../../Assets/img/user1.png'
import user2 from '../../Assets/img/user2.png'
import send from '../../Assets/img/send.png'

import RightBody from '../RightBody/RightBody'
class Chatapp extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : [
                {
                    dp:'1',
                    name:'Dad',
                    messages:[],
                    last_message:"How are You?",
                    last_seen: "Last Seen Today at 6:00AM"
                },
                {
                    dp:'2',
                    name:'Mom',
                    messages:[],
                    last_message:"Hi There",
                    last_seen: "Last Seen Today at 11:40AM"
                },
                {
                    dp:'3',
                    name:'Archit',
                    messages:[],
                    last_message:"Tommorow is Holiday",
                    last_seen: "Last Seen Yesterday at 11:39PM"
                },
                {
                    dp:'4',
                    name:'Piyush',
                    messages:[],
                    last_message:"Happy Birthday",
                    last_seen: "Last Seen Today at 3:35AM"
                },
                {
                    dp:'5',
                    name:'Mohit',
                    messages:[],
                    last_message:"Congratulations",
                    last_seen: "Online"
                },
                {
                    dp:'6',
                    name:'Solzar',
                    messages:[],
                    last_message:"Happy Day!",
                    last_seen: "Last Seen Today at 10:50AM"
                },
                {
                    dp:'7',
                    name:'Chiya Ben',
                    messages:[],
                    last_message:"Bewkoof",
                    last_seen: "Last Seen Today at 2PM"
                }
    
            ],
            user: false,
            currentUser:{}
        }
        this.addMessageHere = this.addMessageHere.bind(this);
    }
    
    showUser(user){
        this.setState({user:true, currentUser:user})
    }
    addMessageHere(msg, id){
        this.state.users.map((user)=>{
            if(user.dp===id){
                this.setState(()=>{
                    const msgs = user.messages.push(msg)
                    console.log(msgs);
                    return{
                        msgs
                    }
                })
                console.log(user.messages)
            }
        })

    }
    render(){
        return(
            <div className="container-fluid h-100">
            <div className="h5 pt-4">The Chat App</div>
                <div className="row h-100">
                    <div className="col-md-4 dis-flex flex-col h-100" style={{overflowY:'scroll'}}>
                        <div className="dis-flex flex-row all-center mt-4 card h4 px-4 py-4">
                            <img className="rounded-circle mr-auto" alt="Profile" src={dp} style={{width:'35px', height:'35px'}}/>
                            <img className="rounded-circle" alt="Status" src={status} style={{width:'50px', height:'50px'}}/>
                            <img className="rounded dp cursor-pointer ml-auto" src={menu} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" alt="Display Pic" style={{width:'50px', height:'50px'}}/>
                                   <ul className=" bg-dark dropdown-menu dropdown-menu-right animate__animated animate__fadeIn animate__faster shadow-sm" style={{color:'white'}} aria-labelledby="navbarDropdown">
                                        <li name="NewGroup" target="#">New Group</li>
                                        <li  name="Starred" target="#">Starred</li>
                                        <li  name="Settings" target="#">Settings</li>
                                        <li  name="Log Out">LogOut</li>
                                   </ul>
                        </div>
                        <div className="hr"></div>
                        <input className="nor-bor h-7v" type="text" placeholder="Search ..."/>
                        <div className="dis-flex flex-col spread mt-4">{this.state.users.map((user)=>{
                                            return <div className="card h4 w-100 h-100 dis-flex flex-row px-4 py-4">
                                                <img src={user1} alt="User0" style={{width:'50px', height:'50px'}}/>
                                                <div className="dis-flex flex-col ml-4" onClick={()=>this.showUser(user)}>
                                                    <div>{user.name}</div>
                                                    <div className="b1">{user.last_message}</div>
                                                </div>
                                                </div>
                         })}</div>
            
                    </div>
                    <div className="col-md-8 dis-flex flex-col pt-4">
                        {this.state.user
                            ? 
                            <RightBody currentUser={this.state.currentUser} addMessage={this.addMessageHere}/>
                            :
                            <div className="h1">
                                Welcome
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Chatapp;
           