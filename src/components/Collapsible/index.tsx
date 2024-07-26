import { createSignal, JSX, mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

interface CollapsibleProps {
  as?: string;
  children: (props: {
    isOpen: () => boolean;
    toggle: () => void;
  }) => JSX.Element;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
  class?: string;
}

const Collapsible = (props: CollapsibleProps) => {
  const merged = mergeProps({ defaultOpen: false }, props);
  const [local, others] = splitProps(merged, [
    'as',
    'children',
    'defaultOpen',
    'isOpen',
    'onToggle',
    'class',
  ]);
  const [open, setOpen] = createSignal(local.defaultOpen);

  const isControlled = () => local.isOpen !== undefined;
  const isOpen = () => (isControlled() ? local.isOpen! : open());

  const toggle = () => {
    if (!isControlled()) setOpen((prev) => !prev);
    if (local.onToggle) local.onToggle(!isOpen());
  };

  const Component = local.as || 'div';

  return (
    <Dynamic component={Component} class={local.class} {...others}>
      {local.children({ isOpen, toggle })}
    </Dynamic>
  );
};

export default Collapsible;
