import StandardTable from "./StandardTable";

function Table(props) {
  const { type, ...rest } = props;
  if (!props.instance) return null;

  return <StandardTable {...rest} />;
}

Table.defaultProps = {
  type: "standard",
};

export default Table;
