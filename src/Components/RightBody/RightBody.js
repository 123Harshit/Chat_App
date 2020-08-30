import React, {Component} from 'react'
import user1 from '../../Assets/img/user1.png'
import user2 from '../../Assets/img/user2.png'
import send from '../../Assets/img/send.png'

class RightBody extends Component{
    constructor(props){
        super(props);
        this.state={
            message:""
        }
        this.eventChangeHandler = this.eventChangeHandler.bind(this);
    }
    
    eventChangeHandler(e){
        this.setState({message:e.target.value});
        e.preventDefault();
    }
    render(){
        // console.log(this.props.currentUser);
        var handleUpdate = this.props.addMessage;
        return(
            <div className="dis-flex flex-col pt-4">
                <nav className="navbar navbar-default bg-primary rounded dis-flex flex-row mb-4">
                            <img src={user1} alt="User0" style={{width:'50px', height:'50px', marginLeft:'8px'}}/>
                            <div className="dis-flex flex-col mr-auto pl-4">
                                <div className="h4">{this.props.currentUser.name}</div>
                                <div className="b2">{this.props.currentUser.last_seen}</div>
                            </div>
                        </nav>
                        <div className="rounded bg-primary h-100 mb-4">
                            {/* {this.props.currentUser.messages} */}
                            {console.log(this.props.currentUser.messages)}
                            </div>
                        <nav className="navbar navbar-default bg-primary rounded mb-4">
                            <div className="col-md-11">
                                <textarea className="form-control" rows="1" id="comment" onChange={this.eventChangeHandler}></textarea>
                           </div>
                            <div className="col-md-1">
                                <img className="rounded-circle" src={send} alt="User0" style={{width:'40px', height:'40px', marginLeft:'8px', marginRight:'8px'}} 
                                onClick={()=>handleUpdate(this.state.message, this.props.currentUser.dp)}/>
                            </div>
                        </nav>
            </div>
        )
    }
}
export default RightBody;