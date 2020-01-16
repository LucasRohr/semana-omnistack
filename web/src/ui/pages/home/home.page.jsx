import React, { useState, useEffect } from 'react'
import './home.style.css'
import { Form, DevList } from '../../components'
import { getDevs } from '../../../services'

const Home = () => {
    const [ devList, setDevList ] = useState([])

    const getDevsList = async () => {
        const devs = await getDevs()

        setDevList(devs.data)
    }

    const addDev = (dev) => {
        setDevList([ ...devList, dev ])
    }

    useEffect(() => {
        getDevsList()
    }, [])

    return (
        <div className="home-container">
            <aside className="aside" >
                <Form addDev={addDev} />
            </aside>

            <main className="main" >
                <DevList devList={devList} />
            </main>
        </div>
    )

}

export { Home }
