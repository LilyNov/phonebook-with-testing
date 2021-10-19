import style from './Container.module.css';

export default function Container({ testid, children }) {
  return <div className={style.container} data-testid={testid}>{children}</div>;
}