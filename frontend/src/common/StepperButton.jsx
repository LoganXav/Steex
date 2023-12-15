import clsx from "clsx";
import Button from "../libs/mui/Button";
import Icon from "../libs/mui/Icon";

/**
 *
 * @param {StepperButtonProps} props
 * @returns
 */
export default function StepperButton(props) {
  const { children, className, completed, selected, step, ...restProps } =
    props;
  return (
    <Button
      {...props}
      color={clsx(selected ? "info" : "inherit")}
      rounded="circular"
      variant="soft"
      className={clsx(
        className && className,
        !selected && "bg-transparent text-gray-500",
        "flex justify-between whitespace-nowrap"
      )}
      endIcon={
        completed && (
          <Icon color={clsx(selected ? "white" : "success")}>task_alt</Icon>
        )
      }
    >
      <span>
        <span
          className={clsx(
            "rounded-full px-[5px] text-xs mr-2",
            selected
              ? "text-primary-main bg-white"
              : "text-primary-main bg-primary-lighter"
          )}
        >
          {step}
        </span>
        {children}
      </span>
    </Button>
  );
}

/**
 * @typedef {{
 * className: string;
 * completed: boolean;
 * selected: boolean;
 * step: number;
 * } & import('@mui/material/ButtonBase').ButtonBaseProps} StepperButtonProps
 */
