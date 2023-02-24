// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../images/All.css';
import nbalogo from '../images/nba.png'
import submit from '../images/submit.png'
import basketball from '../images/basketball.jpg'
import { useState } from 'react';
import './style.scss'
// import GetReady from '../getready.png';
// import { useParams } from "react-router-dom";
// eslint-disable-next-line
import {useRef} from 'react';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import {useLocation} from 'react-router-dom';

const Registration = () =>{
    // const [numberr, setNumberr] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    // eslint-disable-next-line
    const buttonRef = useRef(null);
    const [select, setSelect] = useState('m')

//    function onlyOnetwo(e) {
//         var checkm = document.getElementById('checkm');
//         var checkf = document.getElementById('checkf');
//         // checkm.checked = !checkm.checked 
//         // checkf.checked = !checkf.checked 
//         // console.log(checkbox)

//         if(e === 'm'){

//             checkf.checked = false
//             setSelect("m")
            
//             // setUser({...user, [firstname]:value})
//         }

//         if(e === 'f'){

            
//             checkm.checked = false
//             setSelect("f")

//             // setUser({...user, [firstname]:value})
//         }
//     }

    function HandleSubmit(){
        console.log('2');

        // buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        const Msg = document.getElementById("message").value;

       
        console.log(Email)

        if(Name === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER YOUR NAME"
            return;
        }

        if (document.getElementById("no").value === "" ||  document.getElementById("no").value.slice(0,3) != 971 ){
            console.log('Hello')
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
            return;
            
        }

        if(select === ''){
            document.getElementById('error').innerHTML = "PLEASE SELECT YOUR GENDER"
            return;
        }

        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,
            Message: Msg,
            Gender: select,
            time: firebase.firestore.FieldValue.serverTimestamp()

        }).then(()=>{
            navigate('/Success')
        })
    }

    function check(){
        if (select === 'm'){
            setSelect('f')
            console.log(select)
        }
        else{
            setSelect('m')
            console.log(select)

        }
    }
    
    return( 
            
        <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '70%', gap:'5px', alignItems: 'center', justifyContent:'center'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                    <img style={{minWidth: '100px', maxWidth: '300px'}} src={nbalogo} alt="NBALogo"/>
                </div>

                <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'white', fontSize: '20px'}}>Raffle Registration</h1>
                
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" placeholder='NAME' id="Name" style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
                </div>
                
                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="email" placeholder='EMAIL' id='email' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                </div>


                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <input type="number" placeholder='MOBILE (971 xx xxx xxxx)' id='no' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                </div>

                <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <textarea className="form-control" type="textarea" name="message" id="message" rows='3' placeholder="For us, the answer is Yes. Now, what's your question?" required style={{height: '115px', marginBottom: '0px', width: '100%', border: '1px solid black', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddintTop: '10px', paddingRight: '10px', backgroundColor: 'transparent', backgroundColor: 'white'}}/>
                </div>

                <div style={{width:"100%", display: 'flex', flexDirection: 'column',background:'fff'}}>
                        <label style={{color:"#fff", fontWeight:"400", marginBottom: '10px'}}>Gender</label>
                        <div class="switch-button">
                            <input className="switch-button-checkbox" id='check' type="checkbox" onClick={check}></input>
                            <label className="switch-button-label" for=""><span className="switch-button-label-span">MALE</span></label>
                        </div>
                </div>

                <div>
                    <p id='error' style={{color:"red", marginBottom: '5px'}}></p>
                </div>


                {/* <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>        
                    <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', marginLeft: '20px', backgroundColor: 'black', color: 'white', fontSize: '25px'}} variant="contained" onClick={HandleSubmit}>SUBMIT</button>
                </div> */}

                <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}} onClick={HandleSubmit}>        
                    <img style={{width: '150px'}} src={submit} alt="submit"/>
                </div>

            </div>
            
        </div>
    )
}

export default Registration;