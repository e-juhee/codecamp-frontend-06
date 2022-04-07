interface IProps {
  contents: string;
  date?: string;
  isComplete: boolean;
  el: any;
  key: any;
}

export default function ItemsUI(props: IProps) {
  console.log(props.el);
  return (
    <>
      <div key={props.key}>
        {props.el}
        <div>{props.el.contents}</div>
        {/* <div>{props.date}</div> */}
        {/* <div>{props.isComplete}</div> */}
      </div>
    </>
  );
}
