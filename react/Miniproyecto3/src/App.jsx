import { HOBBIES } from './Services/HOBBIES'
import './App.css'
import Read from './Components/Read/Read'
import Sports from './Components/Sports/Sports'
import Movies from './Components/Movies/Movies'
import Languages from './Components/Languages/Languages'
import SongsHeard from './Components/SongsHeard/SongsHeard'


const App=()=> {
  

  

  return (
    <div className="App">
    <Read data= {HOBBIES.read}/>
    <Sports data= {HOBBIES.sports}/>
    <Movies data= {HOBBIES.movies}/>
    <Languages data= {HOBBIES.languages}/>
    <SongsHeard data= {HOBBIES.songsHeard}/>
      
    </div>
  )
}

export default App

