import {
  compareTimes,
  getMinutes,
  mergeCalendars,
  mergeTimeblocks,
} from './helpers';

/**
 * Finds available meeting time slots for two persons.
 *
 * @param {Array<Array<string>>} p1Calendar - The meeting times of person 1.
 *     Each element is a 2-element array representing the start time and end time in "HH:mm" format.
 * @param {Array<string>} p1TimeBound - The time bounds of person 1. start time and end time in "HH:mm" format.
 * @param {Array<Array<string>>} p2Calendar - The meeting times of person 2.
 * @param {Array<string>} p2TimeBound - The time bounds of person 2.
 * @param {number} meetingDuration - The duration of the desired meeting in minutes.
 *
 * @returns {Array<Array<string>>} An array of available meeting time slots during which both persons
 *     are free for a meeting.
 */
const findAvailableMeetingTimes = (
  p1Calendar,
  p1TimeBound,
  p2Calendar,
  p2TimeBound,
  meetingDuration,
) => {
  const ans = [];
  // Adding imaginary meetings
  p1Calendar.unshift(['00:00', p1TimeBound[0]]);
  p1Calendar.push([p1TimeBound[1], '23:59']);
  p2Calendar.unshift(['00:00', p2TimeBound[0]]);
  p2Calendar.push([p2TimeBound[1], '23:59']);

  const meetingsCalendar = mergeCalendars(p1Calendar, p2Calendar);
  // Merge time blocks for overlapping meetings
  let k = 1;
  while (k < meetingsCalendar.length) {
    if (
      compareTimes(meetingsCalendar[k - 1][1], meetingsCalendar[k][0]) === -1
    ) {
      k += 1;
      // skip this block if the times are not overlapping
      continue;
    }
    const mergedBlock = mergeTimeblocks(
      meetingsCalendar[k - 1],
      meetingsCalendar[k],
    );
    // Insert the merged block
    meetingsCalendar.splice(k - 1, 2, mergedBlock);

    // Only increase index when there is a time gap between the current and previous
    if (
      k < meetingsCalendar.length &&
      compareTimes(meetingsCalendar[k - 1][1], meetingsCalendar[k][0]) === -1
    )
      k += 1;
  }

  for (let i = 1; i < meetingsCalendar.length; i++) {
    const availableSlot =
      getMinutes(meetingsCalendar[i][0]) -
      getMinutes(meetingsCalendar[i - 1][1]);

    if (availableSlot >= meetingDuration) {
      ans.push([meetingsCalendar[i - 1][1], meetingsCalendar[i][0]]);
    }
  }
  return ans;
};

export default findAvailableMeetingTimes;

// const person1MeetingTimes = [
//   ['08:00', '09:00'],
//   ['11:00', '12:00'],
//   ['14:00', '15:00'],
//  [18:00, 18:00]
// ];

// const person1TimeBounds = ['08:00', '18:00'];

// const person2MeetingTimes = [
//   ['08:00', '09:00'],
//   ['13:00', '14:00'],
//   ['15:30', '16:00'],
//  [18:00, 18:00]
// ];

// const person2TimeBounds = ['08:00', '18:00'];

// Merge the time bounds into calendars
// mergeTimebounds() for each person ------------------------------[1]
// mergeTwoCalendars() ------------------------------------------[2]
// ==>
// const mergedCalendar = [
//   ['08:00', '09:00'],['08:00', 9:00],
//   [11:00, 12:00], ['13:00', '14:00'],
//   [14:00, 15:00], ['15:30', '16:00'],
//  [18:00, 18:00],  [18:00, 18:00]
// ];
// mergeTimeBlocks() ----------------------------------------[3]
// ===> findAvailableSlots()
