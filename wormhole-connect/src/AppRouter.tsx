import React, { useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from './store';
import { clearRedeem } from './store/redeem';
import { clearTransfer } from './store/transfer';
import { usePrevious } from './utils';
import './App.css';

import Bridge from './views/Bridge/Bridge';
import WalletModal from './views/WalletModal';
import Redeem from './views/Redeem/Redeem';
import TxSearch from './views/TxSearch';
import { clearWallets } from './store/wallet';
import Terms from './views/Terms';
import FAQ from './views/FAQ';

const useStyles = makeStyles()((theme) => ({
  appContent: {
    textAlign: 'left',
    margin: '40px auto',
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    fontFamily: theme.palette.font.primary,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
}));

// since this will be embedded, we'll have to use pseudo routes instead of relying on the url
function AppRouter() {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const showWalletModal = useSelector(
    (state: RootState) => state.router.showWalletModal,
  );

  const route = useSelector((state: RootState) => state.router.route);
  const prevRoute = usePrevious(route);

  useEffect(() => {
    const redeemRoute = 'redeem';
    const bridgeRoute = 'bridge';
    // reset redeem state on leave
    if (prevRoute === redeemRoute && route !== redeemRoute) {
      dispatch(clearRedeem());
    }
    // reset transfer state on leave
    if (prevRoute === bridgeRoute && route !== bridgeRoute) {
      dispatch(clearTransfer());
    }
  }, [route, prevRoute, dispatch]);

  return (
    <div className={classes.appContent}>
      {showWalletModal && <WalletModal type={showWalletModal} />}
      {route === 'bridge' && <Bridge />}
      {route === 'redeem' && <Redeem />}
      {route === 'search' && <TxSearch />}
      {route === 'terms' && <Terms />}
      {route === 'faq' && <FAQ />}
    </div>
  );
}

export default AppRouter;
