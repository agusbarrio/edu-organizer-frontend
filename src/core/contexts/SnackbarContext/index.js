import { SnackbarProvider as SnackbarProviderNotistack } from 'notistack';
import PropTypes from 'prop-types';

function SnackbarContextProvider({
  maxSnack: maxSnackProps = 3,
  anchorOrigin: anchorOriginProps = { horizontal: 'left', vertical: 'bottom' },
  autoHideDuration: autoHideDurationProps = 2000,
  children,
}) {
  return (
    <SnackbarProviderNotistack
      maxSnack={maxSnackProps}
      anchorOrigin={anchorOriginProps}
      autoHideDuration={autoHideDurationProps}
    >
      {children}
    </SnackbarProviderNotistack>
  );
}

SnackbarContextProvider.propTypes = {
  maxSnack: PropTypes.number,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'bottom']),
  }),
  children: PropTypes.node,
};

export default SnackbarContextProvider;
