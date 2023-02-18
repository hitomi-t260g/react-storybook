import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { expect } from '@storybook/jest';
import { waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button/Button';

export default {
  title: 'Common/Button',
  component: Button,
  //decoratorにより、storyの外側要素を指定できるテンプレとかに使えそう
  // decorators: [
  //   (Story) => (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '100vh',
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
        { name: 'light', value: 'white' },
        { name: 'dark', value: 'gray' },
      ],
    },
    layout: 'centered',
    docs: {
      description: {
        //ここに書くと、button.jsxのコメントアウトよりも優先されて説明が表示される
        component: '説明用のボタンコンポーネント',
      },
    },
  },
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
    },
    handleClick: {
      action:`true`,
    },

  },
};

const something = action('something')

const Template = (args) => {
const handleClick = (e) => {
something(e);
};
//別のstoryにリンクさせたい場合は、linkToのアドオンを用いる
// return <Button {...args} handleClick={linkTo('Common/Button', 'Danger')} />;
return <Button {...args} handleClick={handleClick} />;
};


//ここの...argsとbindの流れがわからない
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

PrimaryLarge.play = async ({ args, canvasElement }) => {
  console.log(args);
  console.log(canvasElement);
  const canvas = within(canvasElement);
  await waitFor(() => userEvent.click(canvas.getByRole('button')));
  await waitFor(()=> expect(canvas.getByRole('button')).toHaveTextContent('Largeclicked'));

};



