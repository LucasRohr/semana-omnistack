import React from 'react'
import { ListItem } from "./components"
import './dev-list.style.css'

const DevList = ({ devList }) => {

    const renderList = () => (
        devList.map((dev, key) => {
            return (
                <ListItem
                    key={key}
                    avatarUrl={dev.avatar_url}
                    name={dev.name}
                    bio={dev.bio}
                    techs={dev.techs}
                    githubUsername={dev.githubUsername}
                />
            )
        })
    )

    return (
        <div className="dev-list-container">
            {renderList()}
        </div>
    )

}

export { DevList }
