import { useEffect, useReducer, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { getAgencies, getLaunches } from '../api/apiHandler';
import { InputForm } from '../components/InputForm';
import { useLoading } from '../context/loadingContext';
import { LoadingOverlay } from '../components/LoadingOverlay';
import formReducer from '../reducers/formReducer';
import axios from 'axios';

export interface formDataType {
  windowStart: string;
  windowEnd: string;
  agency: string;
}

export default function Home() {
  const { loading, setLoading } = useLoading();
  // Add types!!!
  const [agencies, setAgencies] = useState<string[]>([]);
  const [launches, setLaunches] = useState<any[]>([]);
  const [selectedLaunch, setSelectedLaunch] = useState<any>();
  const now = new Date();
  const future3Months = new Date(now.setMonth(now.getMonth() + (3 % 12)));
  const [formData, dispatch] = useReducer(formReducer, {
    windowStart: new Date().toISOString(),
    windowEnd: future3Months.toISOString(),
    agency: '',
  });

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    getAgencies(controller.signal)
      .then(({ data }) => {
        if (data.count) {
          const agenciesnames = data.results.map((agency: any) => agency.name);
          setAgencies(agenciesnames);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('canceled api call');
        } else {
          console.error(err);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log(formData);
    setLoading(true);
    const controller = new AbortController();
    getLaunches(
      formData.windowStart,
      formData.windowEnd,
      formData.agency,
      controller.signal
    )
      .then(({ data }) => {
        console.log(data);
        setLaunches(data.results);

        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('canceled api call');
        } else {
          console.error(err);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [formData]);

  return (
    <div>
      <InputForm dispatch={dispatch} formData={formData} agencies={agencies} />
      <Map height={300} defaultCenter={[0, 0]} defaultZoom={1}>
        {launches.map((launch: any) => (
          <Marker
            key={launch.id}
            width={30}
            anchor={[Number(launch.pad.latitude), Number(launch.pad.longitude)]}
            onClick={() => setSelectedLaunch(launch)}
          />
        ))}
      </Map>
      {selectedLaunch && (
        <div>
          <p>{selectedLaunch.name}</p>
          <p>{selectedLaunch.pad.name}</p>
          <p>{selectedLaunch.window_start}</p>
          <p>{selectedLaunch.window_end}</p>
        </div>
      )}

      <LoadingOverlay loading={loading} />
    </div>
  );
}
