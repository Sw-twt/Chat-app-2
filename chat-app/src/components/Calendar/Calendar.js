// src/components/Calendar/Calendar.js

import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Paper } from '@mui/material';

const localizer = momentLocalizer(moment);

function Calendar() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('새로운 일정 제목:');
    if (title) {
      setEvents((prevEvents) => [...prevEvents, { start, end, title }]);
    }
  };

  return (
    <Paper sx={{ m: 2, p: 2 }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
        views={['month', 'week', 'day', 'agenda']}
      />
    </Paper>
  );
}

export default Calendar;
