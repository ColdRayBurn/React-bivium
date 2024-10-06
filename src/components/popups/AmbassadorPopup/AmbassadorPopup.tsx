import { FC } from 'react';
import styles from './AmbassadorPopup.module.css';

import OverlayingPopup from '../OverlayingPopup/OverlayingPopup';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AmbassadorPopup: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>test</div>
    </OverlayingPopup>
  );
};

export default AmbassadorPopup;
