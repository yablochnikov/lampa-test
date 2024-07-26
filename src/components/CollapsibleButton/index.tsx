import { Dynamic } from 'solid-js/web';
import { JSX, splitProps } from 'solid-js';

interface CollapsibleButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string;
  children: JSX.Element;
  onClick?: () => void;
  class?: string;
}

const CollapsibleButton = (props: CollapsibleButtonProps) => {
  const [local, others] = splitProps(props, [
    'as',
    'children',
    'onClick',
    'class',
  ]);
  const Component = local.as || 'button';

  return (
    <Dynamic
      component={Component}
      onClick={local.onClick}
      class={local.class}
      role='button'
      {...others}
    >
      {local.children}
    </Dynamic>
  );
};

export default CollapsibleButton;
