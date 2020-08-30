import React, {Component} from 'react'
import user1 from '../../Assets/img/user1.png'
import send from '../../Assets/img/send.png'

class RightBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
        this.eventChangeHandler = this.eventChangeHandler.bind(this);
    }
    
    eventChangeHandler(e){
        this.v = e.target.value;
        this.setState({message:e.target.value})
        e.preventDefault();
    }
    handleUpdateHere=()=>{ 
        var temp = this.state.message;
        var handleUpdate = this.props.addMessage;
        handleUpdate(temp, this.props.currentUser.dp)
        this.setState({message:""})
    }
    render(){
        // console.log(this.props.currentUser);
        return(
            <div className="dis-flex flex-col">
                <nav className="navbar navbar-default bg-primary rounded dis-flex flex-row mb-4">
                            <img className="rounded-circle" src={user1} alt="User0" style={{width:'50px', height:'50px', marginLeft:'8px'}}/>
                            <div className="dis-flex flex-col mr-auto pl-4">
                                <div className="h4">{this.props.currentUser.name}</div>
                                <div className="b2">{this.props.currentUser.last_seen}</div>
                            </div>
                        </nav>
                        <div className="rounded h-100 mb-4 h-50v" style={{overflowY:'scroll'}}>
                            {/* {this.props.currentUser.messages}
                            {console.log(this.props.currentUser.messages)} */}

                            {this.props.currentUser.messages.map((message)=>{
                                return <div className="b1 my-2 dis-flex">
                                        <div className="rounded ml-auto py-3 px-2 bg-primary ">{message}</div>
                                    </div>
                            })}
                            </div>
                        <nav className="navbar navbar-default bg-primary rounded mb-4">
                            <div className="col-md-11">
                                <textarea className="form-control" rows="1" id="comment" value={this.state.message} onChange={this.eventChangeHandler}></textarea>
                           </div>
                            <div className="col-md-1">
                                <img className="rounded-circle" src={send} alt="User0" style={{width:'40px', height:'40px', marginLeft:'8px', marginRight:'8px'}} 
                                onClick={this.handleUpdateHere}/>
                            </div>
                        </nav>
            </div>
        )
    }
}
export default RightBody;