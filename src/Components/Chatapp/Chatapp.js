import React, {Component} from 'react'
import dp from '../../Assets/img/dp.png'
import menu from '../../Assets/img/menu.png'
import status from '../../Assets/img/status.png'

import user1 from '../../Assets/img/user1.png'
import user2 from '../../Assets/img/user2.png'
import send from '../../Assets/img/send.png'

import RightBody from '../RightBody/RightBody'
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
            },
            {
                dp:'4',
                name:'User4'
            },
            {
                dp:'5',
                name:'User5'
            },
            {
                dp:'6',
                name:'User6'
            }

        ]
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
                                                <div className="dis-flex flex-col ml-4">
                                                    <div>{user.name}</div>
                                                    <div className="b1">Last Message</div>
                                                </div>
                                                </div>
                         })}</div>
            
                    </div>
                    <div className="col-md-8 dis-flex flex-col pt-4">
                        <nav className="navbar navbar-default bg-primary rounded dis-flex flex-row mb-4">
                            <img src={user1} alt="User0" style={{width:'50px', height:'50px', marginLeft:'8px'}}/>
                            <div className="dis-flex flex-col mr-auto pl-4">
                                <div className="h4">Harshit</div>
                                <div className="b2">Last Seen today at 12:00 AM</div>
                            </div>
                        </nav>
                        <div className="rounded bg-primary h-100 mb-4"></div>
                        <nav className="navbar navbar-default bg-primary rounded mb-4">
                            <div className="col-md-11">
                                <textarea className="form-control" rows="1" id="comment">Start Typing Here</textarea>
                           </div>
                            <div className="col-md-1">
                                <img className="rounded-circle" src={send} alt="User0" style={{width:'40px', height:'40px', marginLeft:'8px', marginRight:'8px'}}/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Chatapp;
           