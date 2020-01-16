import React, { useState, useEffect } from 'react'
import './form.style.css'
import { Input, Button } from './components'
import { saveDev } from '../../../services'

const Form = ({ addDev }) => {

    const [ githubUsername, setGithubUsername ] = useState('')
    const [ techs, setTechs ] = useState('')
    const [ coords, setCoords ] = useState([ '', '' ])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoords([ position.coords.longitude, position.coords.latitude ])
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        )
    }, [])

    const cleandFields = () => {
        setGithubUsername('')
        setTechs('')
    }

    const registerDev = async (event) => {
        event.preventDefault()

       const dev = {
           githubUsername,
           techs,
           latitude: coords[0],
           longitude: coords[1]
       }
       
       cleandFields()
       const devResponse = await saveDev(dev)
       
       addDev(devResponse)
    }

    return (
        <form className="form-container" >
            <h1 className="form-title" > Cadastrar </h1>

            <div className="form-inputs-container">
                <Input
                    label="Usuário do Github"
                    onChange={(event) => setGithubUsername(event.target.value)}
                    value={githubUsername}
                    type="text"
                />

                <Input
                    label="Tecnologias"
                    onChange={(event) => setTechs(event.target.value)}
                    value={techs}
                    type="text"
                />

                <div className="form-coords-inputs-container">
                    <Input
                        label="Latitude"
                        onChange={(event) => setCoords( [ event.target.value, coords[1] ] )}
                        value={coords[0]}
                        type="number"
                    />

                    <Input
                        label="Longitude"
                        onChange={(event) => setCoords( [ coords[0], event.target.value ] )}
                        value={coords[1]}
                        type="number"
                    />
                </div>
            </div>

            <Button text="Cadastrar" onClick={registerDev} />
        </form>
    )

}

export { Form }
