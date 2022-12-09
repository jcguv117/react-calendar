import { Route, Routes } from "react-router-dom"
import {LoginPage} from '../auth'
import {CalendarPage} from '../calendar'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <LoginPage/>} />
        <Route path="/*" element={ <CalendarPage/>} />
    </Routes>
  )
}
