import { MachineContext } from 'contexts/MachineContext';
import _ from 'lodash';
import React, { useMemo } from 'react';

/**
 * Hook que maneja los estados de una maquina de estado teninedo predefinido funciones y pasos
 */
function useMachine() {
  const { state, send, steps, stepper } = React.useContext(MachineContext);

  const context = useMemo(() => _.get(state, `context`, {}), [state]);
  const next = React.useCallback(
    (payload) => {
      send({
        type: 'NEXT',
        payload: { idState: state.value, values: payload }
      });
    },
    [state, send]
  );
  const prev = React.useCallback(
    (payload) => {
      send({
        type: 'PREV',
        payload: { idState: state.value, values: payload }
      });
    },
    [state, send]
  );
  const cancel = React.useCallback(
    (payload) => {
      send({
        type: 'CANCEL',
        payload: { idState: state.value, values: payload }
      });
    },
    [state, send]
  );

  return {
    state,
    steps,
    stepper,
    next,
    cancel,
    prev,
    send,
    context
  };
}

export default useMachine;
