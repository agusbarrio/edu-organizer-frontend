import {
  Card as CardMaterial,
  CardActions,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Truncate from '../Truncate';
import IconButton from '../IconButton';
import HelpOutline from '@mui/icons-material/HelpOutline';

function Card({ children, actions, title, cardContentProps, help, ...props }) {
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

  const [helpOpen, setHelpOpen] = useState(false);

  const toggleHelp = useCallback(() => {
    setHelpOpen((prevHelpOpen) => !prevHelpOpen);
  }, []);
  const cardContentHeight = useMemo(() => {
    return `calc(100% - ${titleHeight + topDividerHeight + bottomDividerHeight + actionsHeight}px)`
  }, [titleHeight, topDividerHeight, bottomDividerHeight, actionsHeight])

  return (
    <CardMaterial variant="outlined"  {...props} sx={{ width: '100%', height: '100%', ...props?.sx }}>
      {(!!title || !!help) && (
        <Stack padding={2} ref={titleRef} direction={'row'}>
          <Truncate variant="h5" sx={{ flexGrow: 1 }}>{title}</Truncate>
          {!!help && (
            <IconButton size="small" color="info" onClick={toggleHelp} tooltip={help} tooltipProps={{ sx: { maxWidth: 300 }, arrow: true, open: helpOpen }} >
              <HelpOutline />
            </IconButton>
          )}
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
