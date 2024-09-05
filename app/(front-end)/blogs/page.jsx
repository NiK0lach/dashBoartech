import React from 'react';
import TrainingList from '@/components/frontend/TrainingList';
import { getData } from '@/lib/getData';


export default async function page() {
    const training = await getData('training');
  return (
    <div>
      <TrainingList title="Read All training" training={training}/>
    </div>
  );
}
