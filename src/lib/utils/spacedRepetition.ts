/**
 * SM-2 Spaced Repetition Algorithm
 * Returns updated state with next review interval.
 */
export interface SM2State {
  interval: number;    // days until next review
  easeFactor: number;  // starts at 2.5
  repetitions: number;
}

export const SM2_INITIAL: SM2State = {
  interval: 1,
  easeFactor: 2.5,
  repetitions: 0,
};

export function sm2Next(state: SM2State, quality: 0 | 1 | 2 | 3 | 4 | 5): SM2State {
  const { interval, easeFactor, repetitions } = state;
  const newEF = Math.max(
    1.3,
    easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  if (quality < 3) {
    return { interval: 1, easeFactor: newEF, repetitions: 0 };
  }

  const newInterval =
    repetitions === 0 ? 1 :
    repetitions === 1 ? 6 :
    Math.round(interval * newEF);

  return { interval: newInterval, easeFactor: newEF, repetitions: repetitions + 1 };
}
