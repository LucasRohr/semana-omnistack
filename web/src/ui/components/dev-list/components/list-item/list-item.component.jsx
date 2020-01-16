import React from 'react'
import './list-item.style.css'
import PropTypes from 'prop-types'

const ListItem = ({ avatarUrl, name, bio, techs, githubUsername }) => {

    const renderTechs = () => {
        let techsString = ''

        techs.forEach((tech, index) => {
            const isLastIndex = index === techs.length - 1

            techsString += isLastIndex ? `${tech}` : `${tech}, `
        })

        return techsString
    }

    return (
        <div className="list-item-container">

            <div className="list-item-header">
                <div className="avatar-container">
                    <img className="avatar" src={avatarUrl} alt="dev"/>
                </div>

                <div className="name-techs-container">
                    <span className="list-item-dev-name" > {name} </span>
                    <span className="list-item-dev-techs" > {renderTechs()} </span>
                </div>
            </div>

            <span className="list-item-dev-bio" > {bio} </span>

            <a className="github-link"
                target="_blank"
                rel="noopener noreferrer"
                href={`http://github.com/${githubUsername}` }
            >
                Acessar perfil no Github
            </a>
        </div>
    )

}

ListItem.propTypes = {
    avatarUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string
}

export { ListItem }
