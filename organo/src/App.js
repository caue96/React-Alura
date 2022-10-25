import { useState } from 'react';
import Banner from './components/banner';
import Formulary from './components/formulary';

function App() {
  const [collaborators, setCollaborators] = useState([])

  const atNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Formulary atCollaboratorRegistry={atNewCollaboratorAdded} />
    </div>
  );
}

export default App;
