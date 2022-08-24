import { ReducerAction } from 'react';
import { formDataType } from '../pages/home';
import { FORMACTIONS, FORMACTIONSENUM } from './formActions';

interface formAction {
  type: FORMACTIONSENUM;
  payload: formDataType;
}

export default function formReducer(
  formData: formDataType,
  action: formAction
) {
  switch (action.type) {
    case FORMACTIONS.SET_START:
      return { ...formData, windowStart: action.payload.windowStart };
    case FORMACTIONS.SET_END:
      return { ...formData, windowEnd: action.payload.windowEnd };
    case FORMACTIONS.SET_AGENCY: {
      if (action.payload.agency === 'all') {
        return { ...formData, agency: '' };
      } else {
        return { ...formData, agency: action.payload.agency };
      }
    }
    default:
      return formData;
  }
}
