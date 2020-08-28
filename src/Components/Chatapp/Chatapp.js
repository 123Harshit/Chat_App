import React, {Component} from 'react'
import dp from '../../Assets/img/dp.png'
import menu from '../../Assets/img/menu.png'
import status from '../../Assets/img/status.png'


class Chatapp extends Component{
    state = {
        users : [
            {
                dp:'1',
                name:'Harshit'
            },
            {
                dp:'2',
                name:'Priyanshi'
            },
            {
                dp:'3',
                name:'Lewis'
            }

        ]
    }
    render(){
        return(
            <div className="container">
            <div className="h5 mt-4">The Chat App</div>
            <div className="row">
                <div className="col-md-4 nor-bor dis-flex flex-row">
                    <div className="row">
                        <div className="col-md-4"><img className="rounded-circle" src={dp} style={{width:'50px', height:'50px'}}/></div>
                        <div className="col-md-4"><img className="rounded-circle" src={status} style={{width:'50px', height:'50px'}}/></div>
                        <div className="col-md-4"><img className="rounded-circle" src={menu} style={{width:'50px', height:'50px'}}/></div>
                    </div>
                    <div className="row">{this.state.users.map((user)=>{
                                        return <div>{user.name}</div>
                                    })}</div>
                </div>
                <div className="col-md-8 nor-bor">there</div>
            </div>
            </div>
        )
    }
}
export default Chatapp;