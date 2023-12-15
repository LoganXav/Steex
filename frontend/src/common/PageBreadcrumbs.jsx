import Breadcrumbs from "../libs/mui/Breadcrumbs";
import RouterLink from "../libs/mui/RouterLink";

/**
 *
 * @param {PageBreadcrumbsProps} props
 */
function PageBreadcrumbs(props) {
  const { breadcrumbs, ...rest } = props;

  return (
    <Breadcrumbs {...rest} className="text-mui-primary-tertiary">
      {breadcrumbs.map(({ name, ...restProps }, index) => {
        return index !== breadcrumbs?.length - 1 ? (
          <RouterLink
            key={index}
            {...restProps}
            className="text-mui-primary-tertiary underline"
          >
            {name}
          </RouterLink>
        ) : (
          <span key={index}>{name}</span>
        );
      })}
    </Breadcrumbs>
  );
}

PageBreadcrumbs.defaultProps = {
  breadcrumbs: [],
};

export default PageBreadcrumbs;

/**
 * @typedef {{
 * breadcrumbs: {name: string} & import("react-router-dom").LinkProps[]
 * }} PageBreadcrumbsProps
 */
