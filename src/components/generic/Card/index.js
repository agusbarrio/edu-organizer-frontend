import {
  Card as CardMaterial,
  CardActions,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import Truncate from '../Truncate';

function Card({ children, actions, title, cardContentProps, ...props }) {
  const showTopDivider = useMemo(() => !!title, [title]);
  const showBottomDivider = useMemo(
    () => !!children && !!actions,
    [children, actions]
  );

  const titleRef = useRef(null);
  const topDividerRef = useRef(null);
  const bottomDividerRef = useRef(null);
  const actionsRef = useRef(null);

  const [titleHeight, settitleHeight] = useState(0)
  const [topDividerHeight, setTopDividerHeight] = useState(0);
  const [bottomDividerHeight, setBottomDividerHeight] = useState(0);
  const [actionsHeight, setActionsHeight] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      settitleHeight(titleRef.current.getBoundingClientRect().height);
    }
  }, [titleRef]);
  useEffect(() => {
    if (topDividerRef.current) {
      setTopDividerHeight(topDividerRef.current.getBoundingClientRect().height);
    }
  }, [topDividerRef]);
  useEffect(() => {
    if (bottomDividerRef.current) {
      setBottomDividerHeight(bottomDividerRef.current.getBoundingClientRect().height);
    }
  }, [bottomDividerRef]);
  useEffect(() => {
    if (actionsRef.current) {
      setActionsHeight(actionsRef.current.getBoundingClientRect().height);
    }
  }, [actionsRef]);




  const cardContentHeight = useMemo(() => {
    return `calc(100% - ${titleHeight + topDividerHeight + bottomDividerHeight + actionsHeight}px)`
  }, [titleHeight, topDividerHeight, bottomDividerHeight, actionsHeight])

  return (
    <CardMaterial  {...props}>
      {!!title && (
        <Stack padding={2} ref={titleRef}>
          <Truncate variant="h5">{title}</Truncate>
        </Stack>
      )}
      {showTopDivider && <Divider ref={topDividerRef}></Divider>}
      {children && <CardContent {...cardContentProps} sx={{ height: cardContentHeight, ...cardContentProps?.sx }} >{children}</CardContent>}
      {showBottomDivider && <Divider ref={bottomDividerRef}></Divider>}
      {!!actions && <CardActions ref={actionsRef}>{actions}</CardActions>}
    </CardMaterial >
  );
}

export default Card;
