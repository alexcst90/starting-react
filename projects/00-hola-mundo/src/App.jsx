import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App(){

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            initialIsFollowing: true
        },
        {
            userName: 'alexcst',
            name: 'Alexander Castillo',
            initialIsFollowing: true
        },
        {
            userName: 'alejandroar',
            name: 'Alejandro Argueta',
            isFollowing: false
        }
    ]
    return(
        <section className="App">
            {
                users.map( user => {
                    const { userName, name, isFollowing } = user
                    return(
                        <TwitterFollowCard
                        key={userName} 
                        userName={userName} initialIsFollowing = {isFollowing}
                        name={name}/>
                    )

                })
            }
        </section>
    )
}