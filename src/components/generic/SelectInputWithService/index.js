import { useEffect, useMemo } from 'react';

import _ from 'lodash';
import useService from 'hooks/useService';
import SelectInput from '../SelectInput';

function SelectInputWithService({
  itemValueGetter,
  itemLabelGetter,
  service,
  ...props
}) {
  const { value, runService, loading } = useService({
    service,
    defaultValue: [],
  });

  useEffect(() => {
    runService();
  }, [runService]);

  const list = useMemo(() => {
    return _.map(value, (option) => ({
      value: itemValueGetter(option),
      children: itemLabelGetter(option),
    }));
  }, [value, itemLabelGetter, itemValueGetter]);

  return <SelectInput list={list} {...props} />;
}

export default SelectInputWithService;
