import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
