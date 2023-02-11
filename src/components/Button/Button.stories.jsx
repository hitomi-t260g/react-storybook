import Button from '../Button/Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
      options:['primary', 'default', 'danger'],
      control:{type: 'radio'},
    },
    size: {
      options: ['sm', 'base','lg'],
      control:{type:'select'}
    },
    backgroundColor: {
      control:{type:'color'}
    }
  },
};

const Template = (args) => <Button {...args} />;  //ここの...argsとbindの流れがわからない
export const Default =  Template.bind({});
Default.args =  {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
}

export const Primary =  Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
}

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
}
export const PrimaryLarge =  Template.bind({});
PrimaryLarge.args = {
  ...Primary.args,  //...PrimarySmall.argsなど指定し、同じargsを指定する。違うものは下に記述し、上書きする。
  children: 'Large',
  size: 'lg',
}

