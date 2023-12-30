import React, { useContext, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import ArrowTop from '../../../assets/arrow_top.svg';
import ArrowDown from '../../../assets/arrow_down.svg';
import useDetectClose from '../../../utils/hooks/useDetectClose';
import { StackContext } from '../../../pages/Edit/Edit';

function Dropdown({ option = [] }) {
  const dropDownRef = useRef();
  const [value, setValue] = useState(option[0].data);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef);

  const { setBadgeType } = useContext(StackContext);

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
          {option.map((item) => {
            return (
              <li
                key={item.type}
                data-type={item.type}
                data-style={item.data}
                className={styles.optionItem}
                onClick={() => {
                  setValue(item.data);
                  setBadgeType(item.type);
                }}>
                {item.data}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
