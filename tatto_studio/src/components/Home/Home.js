import './Home.scss'
import Header from '../Header/Header'

import { ReactComponent as Alerts } from '../../images/alerts.svg'
import { ReactComponent as Clients } from '../../images/clients.svg'
import { ReactComponent as Employees } from '../../images/staff.svg'
import { ReactComponent as Events } from '../../images/events.svg'
import { ReactComponent as Messages } from '../../images/messages.svg'
import { ReactComponent as Sessions } from '../../images/sessions.svg'
import { ReactComponent as House } from '../../images/home.svg'
// import { Link } from 'react-router-dom'


function Home() {

const TITLE = 'Homepage'
const SECTIONS = [
  { id: 1, title: 'Sessions', path: '/sessions', Icon: Sessions },
  { id: 2, title: 'Events', path: '/events', Icon: Events },
  { id: 3, title: 'Alerts', path: '/alerts', Icon: Alerts },
  { id: 4, title: 'Messages', path: '/messages', Icon: Messages },
  { id: 5, title: 'Clients', path: '/clients', Icon: Clients},
  { title: 'Our Staff', href: '/employees', Icon: Employees },
]

  return (
  <div className='Home'>
    <Header
      title={TITLE}
      userName='Иванов Иван Иванович'
      className='Home-Header'
      renderIcon={() => (
        <House className='Header-Icon'/>
      )}
    />
    <div className='Home-Body'>
      <div className='SectionNavigation'>
        {SECTIONS.map(el => 
        <>
          <a className='SectionNavigation-Item Section' href='#'>
            <el.Icon className='Section-Icon'/>
            <span className='Section-Title'>{el.title}</span>
          </a>
        </>
        )}
      </div>
    </div>
  </div>
  )
}

export default Home
