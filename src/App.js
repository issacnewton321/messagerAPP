import './App.css';
import firebase from 'firebase'
import React,{useState,useEffect} from 'react' 
import Message from './components/Message'
import db from './firebase'
import useSound from 'use-sound';
import boopSfx from './ting.mp3';
function App() {
  const [play] = useSound(boopSfx)
  
  const [message,setMessage] = useState([])
  const [input,setInput] = useState('')
  const [username,setUsername] = useState('')
  useEffect(()=>{
    db.collection('message').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessage(snapshot.docs.map(doc => ({id:doc.id,data:doc.data()})))
    })
  },[])
  useEffect(()=>{
    play()
  },[message])
  useEffect(()=>{
    setUsername(prompt('Please enter your name : '))
  },[])
  function submitForm(e){
    
    e.preventDefault();
    db.collection('message').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }
  return (
    <div className="App">
      <audio className="audio-element">
      <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      <h3 className='mb-4'><i class="fa fa-comments fa-4x text-primary" aria-hidden="true"></i></h3>
      <h1>Chat Room using react - firebase</h1>
      
      <p className='lead'>Wellcome {username} to chat room !!!</p>
      <form className=' input-block row'>
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='input-field' placeholder='Enter a message ...'/>
        <button type='submit' onClick={submitForm} className='btn btn-outline-info'><i class="fa fa-paper-plane" aria-hidden="true"> SEND</i></button>
      </form>
      {message.map(({id,data}) => (<Message key={id} message={data} username={username}/>))}
    </div>
  );
}

export default App;
