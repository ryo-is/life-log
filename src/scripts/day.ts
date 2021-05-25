import dayjs from 'dayjs';
type CalendarItem = {
  date: dayjs.Dayjs;
};
export const formatDate = (date: string, format: string) => {
  return dayjs(date).format(format);
};

export const genCalendarItems = (base: dayjs.Dayjs = dayjs()) => {
  const dayItems = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthItems = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const nowMonth = base.get('M');
  const lastDate = base.daysInMonth();
  const firstDay = base.startOf('M').get('d');
  const calendarItemNumber = lastDate + firstDay;
  const startDate = base.startOf('M').subtract(firstDay, 'd');
  const calendarItems: CalendarItem[] = [];
  for (let i = 0; i < calendarItemNumber; i++) {
    calendarItems.push({ date: startDate.add(i, 'd') });
  }
  return { nowMonth, calendarItems, dayItems, monthItems };
};
