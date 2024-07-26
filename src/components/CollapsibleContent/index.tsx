import { Dynamic } from 'solid-js/web';
import { JSX, splitProps } from 'solid-js';

interface CollapsibleContentProps {
  as?: string;
  children: JSX.Element;
  id?: string;
  class?: string;
  isOpen: boolean;
  onOpenStyles?: string;
  onCloseStyles?: string;
  animationProperties?: string;
}

const CollapsibleContent = (props: CollapsibleContentProps) => {
  const [local, others] = splitProps(props, [
    'as',
    'children',
    'class',
    'isOpen',
    'onOpenStyles',
    'onCloseStyles',
    'animationProperties',
  ]);
  const Component = local.as || 'div';
  const onCloseStyles = local.onCloseStyles || 'h-0 p-0';

  return (
    <Dynamic
      component={Component}
      class={`${local.animationProperties} ${local.isOpen ? local.onOpenStyles : onCloseStyles} ${local.class}`}
      {...others}
    >
      {local.children}
    </Dynamic>
  );
};

export default CollapsibleContent;
