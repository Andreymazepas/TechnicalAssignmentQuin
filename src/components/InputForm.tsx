import React from 'react';
import { formDataType } from '../pages/home';
import { FORMACTIONS } from '../reducers/formActions';

interface InputFormType {
  dispatch: React.Dispatch<any>;
  formData: formDataType;
  agencies: string[];
}

export const InputForm = ({ dispatch, formData, agencies }: InputFormType) => {
  return (
    <div>
      <label htmlFor="window-start">window start</label>
      <input
        type="date"
        value={formData.windowStart.split('T')[0]}
        id="window-start"
        onChange={(e) =>
          dispatch({
            type: FORMACTIONS.SET_START,
            payload: { windowStart: new Date(e.target.value).toISOString() },
          })
        }
      />
      <label htmlFor="window-start">window end</label>
      <input
        type="date"
        value={formData.windowEnd.split('T')[0]}
        id="window-end"
        onChange={(e) =>
          dispatch({
            type: FORMACTIONS.SET_END,
            payload: { windowEnd: new Date(e.target.value).toISOString() },
          })
        }
      />
      <select
        value={formData.agency}
        onChange={(e) =>
          dispatch({
            type: FORMACTIONS.SET_AGENCY,
            payload: { agency: e.target.value },
          })
        }
      >
        <option hidden value="">
          All
        </option>
        {agencies.map((agency: string) => (
          <option key={agency} value={agency}>
            {agency}
          </option>
        ))}
      </select>
    </div>
  );
};
