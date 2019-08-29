import React from 'react';

import { FirebaseContext } from '../Firebase';

const Home = () =>  (
    <FirebaseContext.Consumer>
        {
            firebase => {
            console.log(firebase)
            return <div>This is firebase and stuff</div>
            }

        }
    </FirebaseContext.Consumer>
)

export default Home;