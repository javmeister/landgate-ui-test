import * as fromPeople from '../reducers/people.reducer';
import { peopleFeatureSelector } from './people.selectors';

describe('People Selectors', () => {
  it('should select the feature state', () => {
    const result = peopleFeatureSelector({
      [fromPeople.peopleFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
