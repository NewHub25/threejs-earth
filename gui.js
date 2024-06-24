import DAT from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/+esm';

const GUI = new DAT.GUI({ name: 'My GUI' });

export const TitleController = GUI.add({ name: 'Hello world!' }, 'name');
export const StarController = GUI.add(
  { 'number-stars': 1000 },
  'number-stars',
  500,
  5000,
  10
);
export const AccelerationController = GUI.add(
  { acceleration: 10 },
  'acceleration',
  0,
  200
);
export const CloudController = GUI.add({ 'see-clouds': true }, 'see-clouds');
