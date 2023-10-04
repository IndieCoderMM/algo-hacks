import findAvailableMeetingTimes from './meeting-time';

describe('Available Meeting Times', () => {
  it('should find all available time slots', () => {
    const person1MeetingTimes = [
      ['08:00', '09:00'],
      ['11:00', '12:00'],
      ['14:00', '15:00'],
    ];

    const person1TimeBounds = ['08:00', '18:00'];

    const person2MeetingTimes = [
      ['08:00', '09:00'],
      ['13:00', '14:00'],
      ['15:30', '16:00'],
    ];

    const person2TimeBounds = ['08:00', '18:00'];

    const meetingDuration = 30;

    const result = findAvailableMeetingTimes(
      person1MeetingTimes,
      person1TimeBounds,
      person2MeetingTimes,
      person2TimeBounds,
      meetingDuration,
    );

    const expectedResult = [
      ['09:00', '11:00'],
      ['12:00', '13:00'],
      ['15:00', '15:30'],
      ['16:00', '18:00'],
    ];

    expect(result).toEqual(expectedResult);
  });

  it('should find all available time slots when both persons have no prior meetings', () => {
    const person1MeetingTimes = [];
    const person1TimeBounds = ['08:00', '18:00'];

    const person2MeetingTimes = [];
    const person2TimeBounds = ['09:00', '20:00'];

    const meetingDuration = 60;

    const result = findAvailableMeetingTimes(
      person1MeetingTimes,
      person1TimeBounds,
      person2MeetingTimes,
      person2TimeBounds,
      meetingDuration,
    );

    const expectedResult = [['09:00', '18:00']];

    expect(result).toEqual(expectedResult);
  });

  it('should handle a case where only one person has prior meetings', () => {
    const person1MeetingTimes = [
      ['08:00', '09:00'],
      ['12:00', '14:00'],
      ['16:00', '17:00'],
    ];
    const person1TimeBounds = ['08:00', '18:00'];

    const person2MeetingTimes = [];
    const person2TimeBounds = ['06:00', '19:00'];

    const meetingDuration = 45;

    const result = findAvailableMeetingTimes(
      person1MeetingTimes,
      person1TimeBounds,
      person2MeetingTimes,
      person2TimeBounds,
      meetingDuration,
    );

    const expectedResult = [
      ['09:00', '12:00'],
      ['14:00', '16:00'],
      ['17:00', '18:00'],
    ];

    expect(result).toEqual(expectedResult);
  });

  it('should find available time slots when both persons have non-overlapping prior meetings', () => {
    const person1MeetingTimes = [
      ['08:00', '09:00'],
      ['12:00', '14:00'],
      ['16:00', '17:00'],
    ];
    const person1TimeBounds = ['08:00', '18:00'];

    const person2MeetingTimes = [
      ['09:45', '11:00'],
      ['14:30', '15:15'],
    ];
    const person2TimeBounds = ['08:00', '18:00'];

    const meetingDuration = 45;

    const result = findAvailableMeetingTimes(
      person1MeetingTimes,
      person1TimeBounds,
      person2MeetingTimes,
      person2TimeBounds,
      meetingDuration,
    );

    const expectedResult = [
      ['09:00', '09:45'],
      ['11:00', '12:00'],
      ['15:15', '16:00'],
      ['17:00', '18:00'],
    ];

    expect(result).toEqual(expectedResult);
  });

  it('should find no available time slots when both persons have fully occupied schedules', () => {
    const person1MeetingTimes = [
      ['08:00', '09:00'],
      ['11:00', '12:05'],
      ['14:00', '15:00'],
      ['16:00', '17:30'],
    ];
    const person1TimeBounds = ['08:00', '18:00'];

    const person2MeetingTimes = [
      ['09:00', '11:00'],
      ['13:00', '14:00'],
      ['15:30', '16:00'],
    ];
    const person2TimeBounds = ['08:00', '18:00'];

    const meetingDuration = 60;

    const result = findAvailableMeetingTimes(
      person1MeetingTimes,
      person1TimeBounds,
      person2MeetingTimes,
      person2TimeBounds,
      meetingDuration,
    );

    const expectedResult = [];

    expect(result).toEqual(expectedResult);
  });
});
