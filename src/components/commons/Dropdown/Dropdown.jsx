import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import ArrowTop from '../../../assets/arrow_top.svg';
import ArrowDown from '../../../assets/arrow_down.svg';
import useDetectClose from '../../../utils/hooks/useDetectClose';

const data = ['선택지 1', '선택지 2', '선택지 3', '선택지 4'];

function Dropdown() {
  const dropDownRef = useRef();
  const [value, setValue] = useState('선택지 1');

  const [isOpen, setIsOpen] = useDetectClose(dropDownRef);

  return (
    <div
      ref={dropDownRef}
      className={styles.selectBox}
      onClick={() => {
        setIsOpen(!isOpen);
      }}>
      {value}
      <img src={isOpen ? ArrowTop : ArrowDown} alt="드롭다운 화살표" />

      {isOpen && (
        <ul className={styles.optionList}>
          {data.map((item) => {
            return (
              <li
                key={item}
                data-content={item}
                className={styles.optionItem}
                onClick={(e) => {
                  setValue(e.target.dataset['content']);
                }}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
