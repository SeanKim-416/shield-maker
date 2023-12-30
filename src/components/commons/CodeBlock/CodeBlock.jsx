import { getHtmlTag } from '../../../utils/functions/getSrcLink';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BsCopy } from 'react-icons/bs';
import { IoCheckmark } from 'react-icons/io5';
import styles from './CodeBlock.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';

function CodeBlock({ techstacks, buttontype }) {
  const [isCopied, setIsCopied] = useState(false);

  const markDownArray = [];

  techstacks.forEach((stack) => {
    markDownArray.push(getHtmlTag(stack, buttontype));
  });

  const code = markDownArray.join(' ');

  const handleClick = () => {
    setIsCopied(!isCopied);

    window.navigator.clipboard.writeText(code);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <SyntaxHighlighter
        className={styles.codeBlock}
        wrapLongLines={true}
        language="JSX"
        style={stackoverflowLight}>
        {code}
      </SyntaxHighlighter>
      <span
        onClick={handleClick}
        className={clsx(styles.copyBtn, isCopied && styles.copied)}>
        {isCopied ? <IoCheckmark /> : <BsCopy />}
      </span>
    </div>
  );
}

export default CodeBlock;
