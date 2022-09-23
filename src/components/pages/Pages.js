import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HOME_PAGE } from '../utils/urls'
import { routes } from './Routes'

const Pages = () => {
  return (
    <div>
        <Routes>
            {
                routes.map(({path, element}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={element}
                        exact='true'
                    />
                })
            }
            <Route
                path={'*'}
                element={<Navigate to={HOME_PAGE}/>}
            />
        </Routes>
    </div>
  )
}

export default Pages