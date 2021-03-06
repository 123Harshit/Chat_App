import React, {Component} from 'react'
import dp from '../../Assets/img/dp.png'
import menu from '../../Assets/img/menu.png'
import status from '../../Assets/img/status.png'

import user1 from '../../Assets/img/user1.png'

import s from '../../Assets/img/s.png'
import d from '../../Assets/img/df.jpg'
import r from '../../Assets/img/r.png'

import RightBody from '../RightBody/RightBody'
class Chatapp extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : [
                {
                    dp:'1',
                    name:'Dad',
                    messages:['How are you'],
                    last_message:"How are You?",
                    last_seen: "Last Seen Today at 6:00AM",
                    last_message_status: r
                },
                {
                    dp:'2',
                    name:'Mom',
                    messages:['Hi There'],
                    last_message:"Hi There",
                    last_seen: "Last Seen Today at 11:40AM",
                    last_message_status: s
                },
                {
                    dp:'3',
                    name:'Archit',
                    messages:['Tommorow is Holiday', 'Dont forget to take some rest'],
                    last_message:"Tommorow is Holiday",
                    last_seen: "Last Seen Yesterday at 11:39PM",
                    last_message_status: d
                },
                {
                    dp:'4',
                    name:'Piyush',
                    messages:['Happy Birthday','May this year brings a lot of joy in your life'],
                    last_message:"Happy Birthday",
                    last_seen: "Last Seen Today at 3:35AM",
                    last_message_status: s
                },
                {
                    dp:'5',
                    name:'Mohit',
                    messages:['Congratulations','You performed Really Well'],
                    last_message:"Congratulations",
                    last_seen: "Online",
                    last_message_status: d
                },
                {
                    dp:'6',
                    name:'Solzar',
                    messages:['Happy Day!'],
                    last_message:"Happy Day!",
                    last_seen: "Last Seen Today at 10:50AM",
                    last_message_status: s
                },
                {
                    dp:'7',
                    name:'Chiya',
                    messages:['Have You Reached?'],
                    last_message:"Have You Reached?",
                    last_seen: "Last Seen Today at 2PM",
                    last_message_status: r
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
        var pushed = false;
        this.setState((state)=>{
            if(!pushed){
                state.users[id-1].messages.push(msg)
                pushed = true
            }
        })
        this.setState(
            this.state.users.map((user)=>{
                if(user.dp===id){
                    user.last_message = msg
                }
                return msg;
            })
        )
        //console.log(this.state.users[id-1])
    }
    render(){
        return(
            <div className="container-fluid h-100">
            <div className="h2 pt-4" >My Chat</div>
                <div className="hr"></div>
                <div className="row h-100">
                    <div className="col-md-4 dis-flex flex-col h-100" style={{overflowY:'scroll'}}>
                        <div className="dis-flex flex-row all-center mt-4 card h4 px-4 py-4">
                            <img className="rounded-circle mr-auto" alt="Profile" src={dp} style={{width:'35px', height:'35px'}}/>
                            <img className="rounded-circle" alt="Status" src={status} style={{width:'60px', height:'60px'}}/>
                            <img className="rounded dp cursor-pointer ml-auto" src={menu} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" alt="Display Pic" style={{width:'50px', height:'35px'}}/>
                                   <ul className="text-black pl-2 bg-dark dropdown-menu dropdown-menu-right animate__animated animate__fadeIn animate__faster shadow-sm" style={{color:'white'}} aria-labelledby="navbarDropdown">
                                        <li name="NewGroup" target="#">New Group</li>
                                        <li  name="Starred" target="#">Starred</li>
                                        <li  name="Settings" target="#">Settings</li>
                                        <li  name="Log Out">LogOut</li>
                                   </ul>
                        </div>
                        <div className="hr"></div>
                        <input className="nor-bor h-7v" type="text" placeholder="Search ..."/>
                        <div className="dis-flex flex-col spread mt-4">{this.state.users.map((user)=>{
                                            return <div className="card h5 w-100 h-100 dis-flex flex-row px-4 py-4">
                                                <img className="rounded-circle" src={user1} alt="User0" style={{width:'50px', height:'50px'}}/>
                                                <div className="dis-flex flex-col ml-4" onClick={()=>this.showUser(user)}>
                                                    <div>{user.name}</div>
                                                    <div className="dis-flex flex-row">
                                                        <img className="rounded-circle" src={user.last_message_status} alt="Read" style={{width:'20px', height:'20px', marginTop:'0px', marginRight:'2px'}}/>
                                                        <div className="b1">{user.last_message}</div>
                                                    </div>
                                                    
                                                </div>
                                                </div>
                         })}</div>
            
                    </div>
                    <div className="col-md-8 dis-flex flex-col pt-4">
                        {this.state.user
                            ? 
                            <RightBody currentUser={this.state.currentUser} addMessage={this.addMessageHere}/>
                            :
                            <div className="h3" style={{marginLeft:'auto', marginRight:'auto'}}>
                                Start Conversation
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Chatapp;
           