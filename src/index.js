import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import Comment from './Comment';
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'


// Create a react component
const App = () => {
  return (
   <div>     
<Card.Group>
              <ApprovalCard>
              <Comment author="AbdelHay HAQIQ" date="à 9h00" content="Bonjour ASEDS INE2" />
             </ApprovalCard>
              <ApprovalCard>
              <Comment author="Hicham" date="à 9h02" content="Bonjour Monsieur" />
             </ApprovalCard>
             <ApprovalCard>
              <Comment author="Anonymous" date="à 9h05" content="Ramadan Mubarak"/>
             </ApprovalCard>
  </Card.Group>
  <footer style={{position: "fixed",left: 0,bottom: 0,width: "100%",backgroundColor: "red",color: "white",textAlign: "center",
  }}>Realised by HAQIQ</footer>           
  </div>        
            
          );
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);