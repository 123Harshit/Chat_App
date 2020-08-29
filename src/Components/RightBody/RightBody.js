import React, {Component} from 'react'
import user1 from '../../Assets/img/user1.png'
import user2 from '../../Assets/img/user2.png'
import send from '../../Assets/img/send.png'

class RightBody extends Component{
    render(){
        return(
            <div className="dis-flex flex-col pt-4">
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
        )
    }
}
export default RightBody;