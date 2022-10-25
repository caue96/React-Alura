import { useState } from 'react';
import Banner from './components/banner';
import Formulary from './components/formulary';
import Team from './components/team';

function App() {
  const teams = [
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Data Sciense',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secundaryColor: '#FAE95F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const atNewCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Formulary teams={teams.map(team => team.name)} atCollaboratorRegistry={atNewCollaboratorAdded} />
      {teams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secundaryColor={team.secundaryColor} collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} />)}
    </div>
  )
}

export default App