import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { connect, useSelector } from 'react-redux'
import authAPI from '../API/authAPI.js';
import * as actions from '../redux/actions.js'
import Image from 'react-bootstrap/Image';
import dogBlack from '../assets/images/dogBlack.jpg'
// import Calendar from '../components/Calendar.jsx'
import 'react-big-calendar/lib/css/react-big-calendar.css'



const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

const WalkerPage = ({ walker, userInfo, appointments }) => {
  console.log(walker)
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    const getWalkerAppointments = async () => {
      console.log("getWalkerAppointments")
      authAPI.getAppointment(walker._id)
    }
    getWalkerAppointments()
    // const events =
    // {
    //   id: 0,
    //   title: 'Dog Walking Appt',
    //   start: new Date(start),
    //   end: new Date(end)
    // },
  }, [])

  const handleStart = (e) => {
    console.log("handleStart", e.target.value, new Date(e.target.value))
    setStart(e.target.value)
  }

  const handleEnd = (e) => {
    console.log("handleEnd", e.target.value)
    setEnd(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(start, end)
    // Get values: start, end, walker info, customer
    // Make axios call to backend, /appointments
    const bookingInfo = { start, end, walker: { _id: walker._id, username: walker.username }, customer: { _id: userInfo.id, username: userInfo.username, email: userInfo.email } }
    console.log(bookingInfo)
    authAPI.addAppointment(bookingInfo)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={{ left: '13%', fontSize: '40px', margin: '30px', fontFamily: 'cursive', position: 'absolute', color: 'red' }}>Pick a time you would like your dog to be walked for each day of the week.</h2>

        <input type='datetime-local' className='calendarL' value={end} onChange={handleEnd}></input>
        <input type='datetime-local' className='calendarR' value={start} onChange={handleStart}></input>

        <input type='submit' className='button2'></input>

        <Image src={dogBlack} className='dogBlack' />

        <h2 style={{ textAlign: 'center' }}>{walker.username} Schedule</h2>

      </form>
      { appointments && <MyCalendar events={appointments.map(appt => {
          return { id: appt._id, title: `Appt ${new Date(appt.start).getHours()}:${new Date(appt.start).getMinutes()} - ${new Date(appt.end).getHours()}:${new Date(appt.end).getMinutes()} `, start: new Date(appt.start), end: new Date(appt.end) }
        })} /> }
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

    walker: state.walker.walker,
    userInfo: state.auth.userInfo,
    appointments: state.walker.appointments
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(actions.handleInput(e.target))
  }
}
export default connect(mapStateToProps, mapDistpatchToProps)(WalkerPage)