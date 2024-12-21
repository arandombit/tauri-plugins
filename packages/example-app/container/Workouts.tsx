import React, { Dispatch, SetStateAction, useState } from 'react';

import { showContextMenu } from '@inkibra/tauri-plugin-context-menu';

import { workout } from '../asset/data';

enum WorkoutTypes {
  IndoorCycle = 'Indoor Cycle',
  IndoorRun = 'Indoor Run',
  OutdoorWalk = 'Outdoor Walk',
  IndoorWalk = 'Indoor Walk',
  OutdoorRun = 'Outdoor Run',
  OutdoorCycle = 'Outdoor Cycle'
}

interface Option {
  id: string
  title: WorkoutTypes
}

interface API {
  option: string
  setOption: Dispatch<SetStateAction<string>>
  showContextMenu: any
  submitWorkout: any
}

const workoutTypes: Option[] = [
  { id: '1', title: WorkoutTypes.IndoorCycle },
  { id: '2', title: WorkoutTypes.IndoorRun },
  { id: '3', title: WorkoutTypes.OutdoorWalk },
  { id: '4', title: WorkoutTypes.IndoorWalk },
  { id: '5', title: WorkoutTypes.OutdoorRun },
  { id: '6', title: WorkoutTypes.OutdoorCycle }
];


const handleClick = (api: API) => async () => {
  api.submitWorkout(workout);
  await showContextMenu([{ id: 'workout', title: 'Workout added!' }]);
  api.setOption('');
}

const Workouts = (props: any) => {
  const [option, setOption] = useState('');
  return (
    <div>
      <h1>Hello, world!</h1>
      <select id='options' value={option} onChange={e => setOption(e.target.value)}>
        { workoutTypes.map(workout => <option value={workout.id}>{ workout.title }</option>) }
      </select>
      <button onClick={handleClick({ option, setOption } as API)}>Add Workout</button>
    </div>
  );
}

export default Workouts
